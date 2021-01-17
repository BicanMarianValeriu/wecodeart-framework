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
						icon={<Icon icon={<SVG style={{ height: 16 }} viewBox="0 0 467.765 467.765">
							<Path d="m58.471 409.294h350.824v58.471h-350.824z" />
							<Path d="m292.353 0v58.471h29.235v175.412c0 48.364-39.342 87.706-87.706 87.706s-87.706-39.342-87.706-87.706v-175.412h29.235v-58.471h-116.94v58.471h29.235v175.412c0 80.597 65.579 146.176 146.176 146.176s146.176-65.579 146.176-146.176v-175.412h29.235v-58.471z" />
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
