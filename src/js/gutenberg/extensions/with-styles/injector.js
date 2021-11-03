/**
 * WordPress dependencies.
 */
const {
	i18n: { __ },
	blocks: { parse },
	data: { select, subscribe }
} = wp;

const { flattenDeep } = lodash;

const addStyle = style => {
	let element = document.getElementById('wecodeart-blocks-dynamic-styles');

	if (null === element) {
		element = document.createElement('style');
		element.setAttribute('type', 'text/css');
		element.setAttribute('id', 'wecodeart-blocks-dynamic-styles');
		document.getElementsByTagName('head')[0].appendChild(element);
	}

	if (element.textContent === style) {
		return null;
	}

	return element.textContent = style;
};

const getCustomCSSFromBlocks = (blocks, reusableBlocks) => {
	if (!blocks) {
		return '';
	}

	// Return the children of the block. The result is an array deeply nested that match the structure of the block in the editor.
	const getChildrenFromBlock = (block) => {
		const childrends = [];
		if ('core/block' === block.name && null !== reusableBlocks) {
			const reBlocks = reusableBlocks.find(i => block.attributes.ref === i.id);
			if (reBlocks && reBlocks.content) {
				childrends.push(parse(reBlocks.content.raw || reBlocks.content).map((child) => [child, getChildrenFromBlock(child)]));
			};
		}

		if (undefined !== block.innerBlocks && 0 < (block.innerBlocks).length) {
			childrends.push(block.innerBlocks.map((child) => [child, getChildrenFromBlock(child)]));
		}

		return childrends;
	};

	// Get all the blocks and their children
	const allBlocks = blocks.map((block) => [block, getChildrenFromBlock(block)]);

	// Transform the deply nested array in a simple one and then get the `customCss` value where it is the case
	const extractCustomCss = flattenDeep(allBlocks).map((block) => {
		const { attributes: { customCSS = null } = {}, clientId } = block;
		if (customCSS) {
			return customCSS.replace('selector', `[data-block="${clientId}"]`) + '\n';
		}
		return '';
	});

	// Build the global style
	const style = extractCustomCss.reduce((acc, localStyle) => acc + localStyle, '');

	// For debugging
	// console.log( 'Get all the block', allBlocks );
	// console.log( 'Extract customCss', extractCustomCss );
	// console.log( 'Final Result\n', style );

	return style;
};

const subscribed = subscribe(() => {
	const { getBlocks } = select('core/block-editor') || select('core/editor');
	const blocks = getBlocks();
	const reusableBlocks = select('core').getEntityRecords('postType', 'wp_block');
	const blocksStyle = getCustomCSSFromBlocks(blocks, reusableBlocks);
	addStyle(blocksStyle);
});
