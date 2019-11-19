/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { Fragment } = wp.element;
const { toggleFormat } = wp.richText;
const { RichTextToolbarButton, RichTextShortcut } = wp.blockEditor;
const { select } = wp.data;

/**
 * Block constants
 */
const name = 'wca/underline';

export const underline = {
	name,
	title: __( 'Underline', 'wecodeart' ),
	tagName: 'span',
	className: 'has-underline',
	attributes: {
		style: 'style',
	},
	edit( { isActive, value, onChange } ) {
		const formatTypes = select( 'core/rich-text' ).getFormatTypes();
		const checkFormats = formatTypes.filter( ( formats ) => formats.name === 'wpcom/underline' );

		const onToggle = () => {
			onChange(
				toggleFormat( value, {
					type: name,
					attributes: {
						style: 'text-decoration: underline;',
					},
				} )
			);
		};

		return (
			<Fragment>
				<RichTextShortcut
					type="primary"
					character="u"
					onUse={ onToggle }
				/>
				{ checkFormats.length === 0 && ( <RichTextToolbarButton
					icon="editor-underline"
					title={ __( 'Underline', 'wecodeart' ) }
					onClick={ onToggle }
					isActive={ isActive }
					shortcutType="primary"
					shortcutCharacter="u"
				/> )
				}
			</Fragment>
		);
	},
};
