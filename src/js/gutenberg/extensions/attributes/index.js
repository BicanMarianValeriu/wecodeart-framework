/**
 * WordPress Dependencies
 */
const { addFilter } = wp.hooks;
const { createHigherOrderComponent } = wp.compose;

/**
 * Internal dependencies
 */
import { BackgroundAttributes } from './../../controls/background';

const restrictedBlocks = [
	'core/freeform',
	'core/shortcode',
	'core/nextpage',
	'woocommerce/handpicked-products',
	'woocommerce/products-by-attribute',
	'woocommerce/products-by-tag',
	'woocommerce/product-best-sellers',
	'woocommerce/product-top-rated',
	'woocommerce/product-on-sale',
	'woocommerce/product-new',
];
const blocksWithFullScreen = ['core/image', 'core/cover', 'core/group', 'core/columns', 'core/media-text'];
const blocksWithAnchor = ['core/spacer', 'core/separator'];
const blocksWithFontSize = ['core/list'];
const blocksWithBackgrounds = ['core/columns', 'core/column'];
const blocksWithContainer = ['core/columns'];
const blocksWithColumns = ['core/column'];

/**
 * Filters registered block settings, extending attributes with anchor using ID
 * of the first node.
 *
 * @param 	{Object} settings Original block settings.
 *
 * @return 	{Object} Filtered block settings.
 */
function addAttributes(settings) {
	const { name: blockName } = settings;
	if (typeof settings.attributes !== 'undefined' && !restrictedBlocks.includes(blockName)) {
		settings.attributes = Object.assign(settings.attributes, {
			wecodeart: {
				type: 'object',
				default: {
					devices: false,
					desktop: true,
					tablet: true,
					mobile: true,
					loggedin: true,
					loggedout: true,
				},
			},
		});

		// Add custom font size picker on selected blocks.
		if (blocksWithFontSize.includes(blockName)) {
			if (!settings.attributes) {
				settings.attributes = {};
			}
			settings.attributes = Object.assign(settings.attributes, {
				textColor: {
					type: 'string',
				},
				customTextColor: {
					type: 'string',
				},
				fontSize: {
					type: 'string',
				},
				customFontSize: {
					type: 'number',
				},
			});
		}

		// Enable anchor to selected blocks
		if (blocksWithAnchor.includes(blockName)) {
			if (!settings.supports) {
				settings.supports = {};
			}
			settings.supports = Object.assign(settings.supports, {
				anchor: true,
			});
		}

		// Backgrounds
		if (blocksWithBackgrounds.includes(blockName)) {
			if (!settings.supports) {
				settings.supports = {};
			}
			settings.supports = Object.assign(settings.supports, {
				hasBackground: true,
			});

			settings.attributes = Object.assign(settings.attributes, BackgroundAttributes);
		}

		// Columns Container
		if (blocksWithContainer.includes(blockName)) {
			settings.attributes = Object.assign(settings.attributes, {
				container: {
					type: 'boolean',
					default: true,
				},
				gutters: {
					type: 'boolean',
					default: false,
				}
			});
		}

		// Column Classes
		if (blocksWithColumns.includes(blockName)) {
			settings.attributes = Object.assign(settings.attributes, {
				bootstrapColumns: {
					type: 'object',
					default: {
						global: 'col-12',
						sm: 'col-sm',
						md: '',
						lg: '',
						xl: '',
					},
				},
			});
		}
	}

	return settings;
}

/**
 * Add custom WeCodeArt attributes to selected blocks
 *
 * @param {Function} BlockEdit Original component.
 * @return {string} Wrapped component.
 */
const withAttributes = createHigherOrderComponent((BlockEdit) => {
	return (props) => {
		const { name: blockName, attributes } = props;

		if (!restrictedBlocks.includes(blockName)) {
			if (typeof attributes.wecodeart === 'undefined') {
				attributes.wecodeart = Object.assign({}, attributes.wecodeart);
			}
		}

		return <BlockEdit {...props} />;
	};
}, 'withAttributes');

/**
 * Run our filters
 */
function applyFilters() {
	addFilter('editor.BlockEdit', 'wecodeart/editor/attributes', withAttributes);
	addFilter('blocks.registerBlockType', 'wecodeart/blocks/custom/attributes', addAttributes);
}

applyFilters();

/**
 * Exports
 */
export {
	restrictedBlocks,
	blocksWithAnchor,
	blocksWithFontSize,
	blocksWithFullScreen,
	blocksWithBackgrounds,
};