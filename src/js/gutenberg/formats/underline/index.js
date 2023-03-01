/**
 * WordPress dependencies
 */
const {
	i18n: { __ },
	data: { select },
	components: { Icon, SVG, Path },
	richText: { toggleFormat },
	blockEditor: { RichTextToolbarButton, RichTextShortcut }
} = wp;

/**
 * Block constants
 */
const name = 'wca/underline';

export const underline = {
	name,
	title: __('Underline', 'wecodeart'),
	tagName: 'span',
	className: 'has-underline',
	attributes: {
		class: 'class',
	},
	edit({ isActive, value, onChange }) {
		const formatTypes = select('core/rich-text').getFormatTypes();
		const checkFormats = formatTypes.filter((formats) => formats.name === 'wpcom/underline');

		const onToggle = () => onChange(toggleFormat(value, { type: name }));

		return (
			<>
				<RichTextShortcut
					type="primary"
					character="u"
					onUse={onToggle}
				/>
				{checkFormats.length === 0 && (
					<RichTextToolbarButton
						icon={<Icon icon={<SVG style={{ padding: 2 }} viewBox="0 0 16 16">
							<Path d="M5.313 3.136h-1.23V9.54c0 2.105 1.47 3.623 3.917 3.623s3.917-1.518 3.917-3.623V3.136h-1.23v6.323c0 1.49-.978 2.57-2.687 2.57-1.709 0-2.687-1.08-2.687-2.57V3.136zM12.5 15h-9v-1h9v1z" />
						</SVG>} />}
						title={__('Underline', 'wecodeart')}
						onClick={onToggle}
						isActive={isActive}
						shortcutType="primary"
						shortcutCharacter="u"
					/>
				)}
			</>
		);
	},
};
