/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { Component } = wp.element;
const { compose, ifCondition } = wp.compose;
const { PluginPostStatusInfo } = wp.editPost;
const { withSelect, withDispatch } = wp.data;
const { withSpokenMessages, CheckboxControl } = wp.components;

class BuilderTemplate extends Component {
	constructor() {
		super(...arguments);
	}

	render() {
		const { onToggle, postMeta, postType } = this.props;

		if (['wp_block'].includes(postType) || !['page'].includes(postType)) {
			return false;
		}

		const { _wca_builder_template: value } = postMeta;

		const enabled = typeof postMeta !== 'undefined' && typeof value !== 'undefined' ? value : false;

		let help = enabled ? __('enabled', 'wecodeart') : __('disabled', 'wecodeart');
		help = sprintf(__('Page builder template is %s.', 'wecodeart'), help);

		return (
			<PluginPostStatusInfo>
				<CheckboxControl
					className="wca-post-status-label"
					label={__('Enable Page Builder template?', 'wecodeart')}
					checked={enabled}
					onChange={onToggle}
					help={help}
				/>
			</PluginPostStatusInfo>
		);
	}
}

export default compose(
	withSelect((select) => {
		return {
			postType: select('core/editor').getEditedPostAttribute('type'),
			postMeta: select('core/editor').getEditedPostAttribute('meta'),
		};
	}),
	withDispatch((dispatch, ownProps) => {
		let metavalue;
		if (typeof ownProps.postMeta !== 'undefined' && typeof ownProps.postMeta._wca_builder_template !== 'undefined') {
			metavalue = ownProps.postMeta._wca_builder_template;
		}
		return {
			onToggle() {
				dispatch('core/editor').editPost({
					meta: {
						_wca_builder_template: !metavalue,
					},
				});
			},
		};
	}),
	ifCondition((props) => props.postType === 'page'),
	withSpokenMessages,
)(BuilderTemplate);
