/**
 * WordPress dependencies
 */
const {
	i18n: { __ },
	components: { Icon },
	element: { useState },
	editPost: { PluginBlockSettingsMenuItem }
} = wp;

/**
 * Internal dependencies
 */
import Modal from './modal';

const Render = () => {
	const [isOpen, setOpen] = useState(false);

	const openModal = () => setOpen(true);
	const closeModal = () => setOpen(false);

	const props = { isOpen, openModal, closeModal };

	return (
		<>
			<PluginBlockSettingsMenuItem
				icon={<Icon icon="welcome-view-site" className="components-menu-items__item-icon" />}
				label={__('Add to Design patterns', 'wecodeart')}
				onClick={openModal}
			/>
			<Modal {...props} />
		</>
	);
};

export default Render;