/**
 * External dependencies
 */
const { map } = lodash;

/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { Component } = wp.element;
const { compose, ifCondition } = wp.compose;
const { select, withSelect } = wp.data;
const { Icon } = wp.components;
const { RichTextToolbarButton } = wp.blockEditor;
const { removeFormat } = wp.richText;

import { Format as SVGIcon } from './icon';

class ClearFormatting extends Component {
	render() {
		const {
			value,
			isActive,
			onChange,
		} = this.props;

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
				icon={<Icon icon={SVGIcon} />}
				title={__('Clear Current Format', 'wecodeart')}
				onClick={onToggle}
				isActive={isActive}
			/>
		);
	}
}

export default compose(
	withSelect(() => {
		return {
			isDisabled: false,
		};
	}),
	ifCondition((props) => !props.isDisabled)
)(ClearFormatting);
