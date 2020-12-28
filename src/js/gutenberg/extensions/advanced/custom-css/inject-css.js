/**
 * WordPress dependencies.
 */
const {
	i18n: { __ },
	blocks: { parse },
	data: { select, subscribe }
} = wp;

const addStyle = style => {
	let element = document.getElementById('wca-css-editor-styles');

	if (null === element) {
		element = document.createElement('style');
		element.setAttribute('type', 'text/css');
		element.setAttribute('id', 'wca-css-editor-styles');
		document.getElementsByTagName('head')[0].appendChild(element);
	}

	if (element.textContent === style) {
		return null;
	}

	return element.textContent = style;
};

let style = '';

const cycleBlocks = (blocks, reusableBlocks) => {
	blocks.forEach(block => {
		const { name, attributes: { ref, hasCustomCSS, customCSS }, innerBlocks } = block;
		if (hasCustomCSS) {
			if (customCSS && (null !== customCSS)) {
				style += customCSS + '\n';
			}
		}

		if ('core/block' === name && null !== reusableBlocks) {
			let reBlocks = reusableBlocks.find(i => ref === i.id);
			if (reBlocks) {
				reBlocks = parse(reBlocks.content.raw);
				cycleBlocks(reBlocks, reusableBlocks);
			};
		}

		if (undefined !== innerBlocks && 0 < (innerBlocks).length) {
			cycleBlocks(innerBlocks, reusableBlocks);
		}
	});
};

const subscribed = subscribe(() => {
	style = '';
	const { getBlocks } = select('core/block-editor') || select('core/editor');
	const blocks = getBlocks();
	const reusableBlocks = select('core').getEntityRecords('postType', 'wp_block');
	cycleBlocks(blocks, reusableBlocks);
	addStyle(style);
});
