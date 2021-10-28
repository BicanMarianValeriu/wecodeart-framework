/**
 * WordPress dependencies
 */
const {
	i18n: { __, sprintf },
	compose: { compose },
	editPost: { PluginPostStatusInfo },
	data: { useSelect, useDispatch },
	element: { useEffect },
	components: { withSpokenMessages, CheckboxControl }
} = wp;

const Controls = () => {
	const { postType, postMeta } = useSelect((select) => {
		return {
			postType: select('core/editor').getEditedPostAttribute('type'),
			postMeta: select('core/editor').getEditedPostAttribute('meta'),
		};
	});

	if (['wp_block', 'wp_template', 'wp_template_part'].includes(postType)) {
		return null;
	}

	const { _wca_title_hidden: value = false } = postMeta || {};
	const { editPost } = useDispatch('core/editor', [value]);

	const status = value === true ? __('hidden', 'wecodeart') : __('shown', 'wecodeart');

	useEffect(() => {
		const titleBlock = document.querySelector('.edit-post-visual-editor__post-title-wrapper');
		if (titleBlock && value) {
			titleBlock.classList.add('is-disabled');
		}
		return () => {
			titleBlock.classList.remove('is-disabled');
		};
	}, [value]);

	return (
		<PluginPostStatusInfo>
			<CheckboxControl
				className="wecodeart-gb-plugin wecodeart-gb-plugin--post-title"
				label={__('Hide title on single template?', 'wecodeart')}
				checked={value}
				onChange={(newValue) => editPost({ meta: { _wca_title_hidden: newValue } })}
				help={sprintf(__('Title is %s.', 'wecodeart'), status)}
			/>
		</PluginPostStatusInfo>
	);
};

export default compose(withSpokenMessages)(Controls);