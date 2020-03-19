/**
 * Internal dependencies
 */
import exportReusableBlock from '../utils/export';
import { download } from '../utils/file';

/**
 * External dependencies
 */
const { kebabCase } = lodash;

/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { withSelect, select } = wp.data;
const { compose, ifCondition } = wp.compose;
const { Fragment, Component } = wp.element;
const { PluginBlockSettingsMenuItem } = wp.editPost;
const { withSpokenMessages } = wp.components;
const { serialize } = wp.blocks;

/**
 * Render plugin
 */
class ExportManager extends Component {
	constructor() {
		super(...arguments);

		this.saveAsJSON = this.saveAsJSON.bind(this);
	}

	saveAsJSON() {
		const {
			selectedBlockCount,
			selectedBlock,
			selectedBlocks,
		} = this.props;

		if (selectedBlockCount < 1) {
			return;
		}

		let blocks;
		const title = 'wca/export';

		if (selectedBlockCount === 1) {
			if (selectedBlock.name === 'core/block') {
				exportReusableBlock(selectedBlock.attributes.ref);
				return;
			}

			blocks = serialize(selectedBlock);
		}

		if (selectedBlockCount > 1) {
			blocks = serialize(selectedBlocks);
		}

		const fileContent = JSON.stringify({
			__file: 'core_block',
			content: blocks,
		}, null, 2);

		const fileName = kebabCase(title) + '.json';
		download(fileName, fileContent, 'application/json');
	}

	render() {
		return (
			<Fragment>
				<PluginBlockSettingsMenuItem
					icon="share-alt2"
					label={__('Export as JSON', 'wecodeart')}
					onClick={this.saveAsJSON}
				/>
			</Fragment>
		);
	}
}

export default compose([
	withSelect(() => {
		const { getSelectedBlockCount, getSelectedBlock, getMultiSelectedBlocks } = select('core/block-editor');
		const { getBlock } = select('core/block-editor');

		return {
			selectedBlockCount: getSelectedBlockCount(),
			selectedBlock: getSelectedBlock(),
			selectedBlocks: getMultiSelectedBlocks(),
			isDisabled: false,
			getBlock,
		};
	}),
	ifCondition((props) => {
		return !props.isDisabled;
	}),
	withSpokenMessages,
])(ExportManager);
