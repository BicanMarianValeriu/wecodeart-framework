/**
 * External dependencies
 */
//import { get } from 'lodash';
const { get } = lodash;

/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { Component } = wp.element;
const { compose, ifCondition } = wp.compose;
const { select, withSelect, withDispatch } = wp.data;
const { RichTextToolbarButton } = wp.blockEditor;

class JustifyControl extends Component {
	render() {
		const {
			blockId,
			isBlockJustified,
			updateBlockAttributes,
		} = this.props;

		const onToggle = () => {
			updateBlockAttributes( blockId, { align: isBlockJustified ? null : 'justify' } );
		};
		return (
			<RichTextToolbarButton
				icon="editor-justify"
				title={ __( 'Justify', 'wecodeart' ) }
				onClick={ onToggle }
				isActive={ isBlockJustified }
			/>
		);
	}
}

export default compose(
	withSelect( () => {
		const selectedBlock = select( 'core/block-editor' ).getSelectedBlock();
		if ( ! selectedBlock ) {
			return {};
		}
		return {
			blockId: selectedBlock.clientId,
			blockName: selectedBlock.name,
			isBlockJustified: 'justify' === get( selectedBlock, 'attributes.align' ),
			formatTypes: select( 'core/rich-text' ).getFormatTypes(),
		};
	} ),
	withDispatch( ( dispatch ) => ( {
		updateBlockAttributes: dispatch( 'core/block-editor' ).updateBlockAttributes,
	} ) ),
	ifCondition( ( props ) => {
		const checkFormats = props.formatTypes.filter( ( formats ) => formats.name === 'wpcom/justify' );
		return 'core/paragraph' === props.blockName && checkFormats.length === 0;
	} )
)( JustifyControl );
