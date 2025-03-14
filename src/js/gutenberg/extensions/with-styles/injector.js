/**
 * WordPress dependencies.
 */
const {
	i18n: { __ },
	blocks: { parse },
	data: { select, subscribe }
} = wp;

/**
 * Updates the style element in the editor iframe with the dynamic styles of the page.
 * When updating the styles, it tries to use CSSOM to efficiently update the styles.
 * If CSSOM is not supported, it falls back to setting the inner text of the style element.
 * @param {HTMLHeadElement} domHead The head of the iframe in which to update the style element.
 * @param {string} finalStyle The final dynamic styles to be inserted into the style element.
 */
const updateStyleElement = (domHead, finalStyle) => {
	let styleElement = domHead.querySelector('#wecodeart-blocks-dynamic-styles');

	// If style element does not exist, create it
	if (!styleElement) {
		styleElement = document.createElement('style');
		styleElement.setAttribute('id', 'wecodeart-blocks-dynamic-styles');
		domHead.appendChild(styleElement);
	}

	if (styleElement.textContent !== finalStyle) {
		styleElement.textContent = finalStyle;
	}
};


/**
 * Recursively gets all child blocks from a given block.
 *
 * @param {Object} block - The block object.
 * @return {Array} An array of the block and its children.
 */
const getChildrenFromBlock = (block) => {
	return block.innerBlocks?.flatMap((child) => [child, ...getChildrenFromBlock(child)]) || [];
};

/**
 * Recursively matches parsed reusable blocks and inner blocks to actual DOM elements using index.
 *
 * @param {HTMLElement} reusableElement - The parent reusable block element.
 * @param {Array} parsedBlocks - The parsed inner blocks from reusable block content.
 * @return {Array} Blocks with correct clientIds assigned.
 */
const matchBlocksByIndex = (reusableElement, parsedBlocks) => {
	if (!reusableElement || !parsedBlocks.length) {
		return parsedBlocks;
	}

	const childElements = reusableElement.querySelectorAll('.wp-block[data-block]');

	return parsedBlocks.map((block, index) => {
		const childElement = childElements[index];

		if (childElement) {
			block.clientId = childElement.getAttribute('data-block');

			// Recursively match inner blocks
			if (block.innerBlocks?.length > 0) {
				block.innerBlocks = matchBlocksByIndex(childElement, block.innerBlocks);
			}
		}

		return block;
	});
};

/**
 * Extracts and generates CSS styles from blocks, replacing `selector` with `data-block` attributes.
 *
 * @param {Array} blocks - The array of block objects.
 * @return {string} The generated global style string.
 */
const getCustomStyleFromBlocks = (blocks) => {
	const allBlocks = blocks.flatMap((block) => [block, ...getChildrenFromBlock(block)]);

	const extractCustomStyle = allBlocks.map(({ attributes: { customStyle } = {}, clientId }) => {
		if (customStyle && clientId) {
			return customStyle.replace(/selector/g, `.wp-block[data-block="${clientId}"]`) + '\n';
		}

		return '';
	});

	return extractCustomStyle.filter(Boolean).join('');
};

/**
 * Handles dynamic style updates.
 */
const subscribed = subscribe(() => {
	let reusableStyle = '';

	const blocks = select('core/block-editor').getBlocks();
	const reusableBlocks = select('core').getEntityRecords('postType', 'wp_block', { context: 'view' }) || [];
	const reusableBlocksInPage = blocks.filter(({ name }) => name === 'core/block');

	const iframe = document.querySelector('iframe[name="editor-canvas"]');

	reusableBlocksInPage.forEach(({ attributes, clientId }) => {
		const reusableBlock = reusableBlocks.find(({ id }) => id === attributes.ref);

		if (!reusableBlock) {
			return;
		}

		const domSelector = `.wp-block[data-block="${clientId}"]`;
		const parsedBlocks = parse(reusableBlock.content.raw);
		const reusableElement = iframe?.contentDocument.querySelector(domSelector) || document.querySelector(domSelector);

		if (reusableElement) {
			const matchedBlocks = matchBlocksByIndex(reusableElement, parsedBlocks);
			reusableStyle += getCustomStyleFromBlocks(matchedBlocks);
		}
	});

	const domHead = iframe?.contentDocument.head || document.head;
	if (!domHead) {
		return;
	}

	let styleElement = domHead.querySelector('#wecodeart-blocks-dynamic-styles');
	if (!styleElement) {
		styleElement = document.createElement('style');
		styleElement.id = 'wecodeart-blocks-dynamic-styles';
		domHead.appendChild(styleElement);
	}

	const blocksStyle = getCustomStyleFromBlocks(blocks);
	const finalStyle = blocksStyle + reusableStyle;

	updateStyleElement(domHead, finalStyle);
});
