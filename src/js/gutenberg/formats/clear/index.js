/**
 * External dependencies
 */
const { map } = lodash;

/**
 * WordPress dependencies
 */
const {
	i18n: { __ },
	components: { Icon, SVG, Path, Rect },
	blockEditor: { RichTextToolbarButton },
	data: { select },
	richText: { removeFormat }
} = wp;

const ICON = <Icon icon={<SVG style={{ height: 18 }} viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" >
	<Path d="M511.528,158.4L353.128,0l-169.68,169.696l-13.84,13.84l-8.848,8.848c-43.724,43.753-43.701,114.667,0.051,158.392 c0.19,0.19,0.381,0.379,0.573,0.568l0.256,0.224H32.008v32h250.816l35.952-33.248l0.432,0.432l11.04-11.04l12.032-11.2 l-0.448-0.448L511.528,158.4z M270.296,351.536h-60.688l-26.16-23.44c-31.231-31.24-31.231-81.88,0-113.12L296.12,327.648 L270.296,351.536z M319.208,305.472L206.072,192.336L353.144,45.248L466.28,158.4L319.208,305.472z" />
	<Rect x="0.008" y="415.536" width="160" height="32" />
	<Rect x="128.008" y="479.536" width="128" height="32" />
	<Rect x="288.008" y="479.536" width="32" height="32" />
	<Rect x="352.008" y="479.536" width="32" height="32" />
</SVG>} />;

/**
 * Block constants
 */
const name = 'wca/clear-formatting';

export const clear = {
	name,
	title: __('Clear Formatting', 'wecodeart'),
	tagName: 'span',
	className: 'wca-clear-formatting',
	edit({ isActive, value, onChange }) {
		const onToggle = () => {
			const formatTypes = select('core/rich-text').getFormatTypes();
			if (formatTypes.length > 0) {
				let newValue = value;

				map(formatTypes, (activeFormat) => newValue = removeFormat(newValue, activeFormat.name));

				onChange({ ...newValue });
			}
		};

		return (
			<RichTextToolbarButton
				key={isActive ? 'remove-formatting' : 'remove-formatting-not-active'}
				name={isActive ? 'remove-formatting' : undefined}
				icon={<Icon icon={ICON} />}
				title={__('Clear format', 'wecodeart')}
				onClick={onToggle}
				isActive={isActive}
			/>
		);
	},
};
