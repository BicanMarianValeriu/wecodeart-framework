/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { Component } = wp.element;
const { compose } = wp.compose;
const { PluginPostStatusInfo } = wp.editPost;
const { select, withSelect, withDispatch } = wp.data;
const { withSpokenMessages, CheckboxControl } = wp.components;

class DisableTitle extends Component {
	constructor() {
		super(...arguments);

		this.initialize = this.initialize.bind(this);
	}

	componentDidMount() {
		this.initialize();
	}

	componentDidUpdate() {
		this.initialize();
	}

	initialize() {
		const { postMeta } = this.props;

		const titleBlock = document.querySelector('.editor-post-title__block');

		if (titleBlock) {
			const { _wca_title_hidden: value } = postMeta;
			const isHidden = typeof postMeta !== 'undefined' && typeof value !== 'undefined' ? value : false;
			const bodyClass = isHidden ? 'wca-title-hidden' : 'wca-title-visible';

			if (isHidden) {
				document.body.classList.remove('wca-title-visible');
			} else {
				document.body.classList.remove('wca-title-hidden');
			}

			document.body.classList.add(bodyClass);
		}
	}

	render() {
		const { onToggle, postMeta, postType } = this.props;

		if (['wp_block'].includes(postType)) {
			return false;
		}

		const { _wca_title_hidden: value } = postMeta;

		const isHidden = typeof postMeta !== 'undefined' && typeof value !== 'undefined' ? value : false;

		let help = isHidden ? __('Hidden', 'wecodeart') : __('Shown', 'wecodeart');
		help = sprintf(__('Title is %s.', 'wecodeart'), help);

		return (
			<PluginPostStatusInfo>
				<CheckboxControl
					className="wca-post-status-label"
					label={__('Hide ' + postType + ' title on single template?', 'wecodeart')}
					checked={isHidden}
					onChange={onToggle}
					help={help}
				/>
			</PluginPostStatusInfo>
		);
	}
}

export default compose(
	withSelect(() => {
		return {
			postType: select('core/editor').getEditedPostAttribute('type'),
			postMeta: select('core/editor').getEditedPostAttribute('meta'),
		};
	}),
	withDispatch((dispatch, ownProps) => {
		let metaValue;
		if (typeof ownProps.postMeta !== 'undefined' && typeof ownProps.postMeta._wca_title_hidden !== 'undefined') {
			metaValue = ownProps.postMeta._wca_title_hidden;
		}
		return {
			onToggle() {
				dispatch('core/editor').editPost({
					meta: {
						_wca_title_hidden: !metaValue,
					},
				});
			},
		};
	}),
	withSpokenMessages,
)(DisableTitle);
