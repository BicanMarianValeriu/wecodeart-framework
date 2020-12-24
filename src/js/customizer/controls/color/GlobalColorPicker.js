import classnames from 'classnames';

const {
    components: { Dropdown, Button, Icon, ColorPalette }
} = wp;

const { pallete = [] } = wecodeartColorControl;

const GlobalColorsPicker = ({ onChange, activeColor }) => {
    const isGlobal = pallete.filter(({ color }) => color === activeColor).length;

    return (
        <Dropdown
            position="left"
            renderToggle={({ isOpen, onToggle }) => (
                <Button
                    onClick={onToggle}
                    aria-expanded={isOpen}
                    role="button"
                    className={classnames([
                        'global-color-picker',
                        { active: isGlobal },
                    ])}
                >
                    <Icon size={16} icon="admin-site-alt3" />
                </Button>
            )}
            renderContent={() => (
                <ColorPalette colors={pallete} value={activeColor} onChange={onChange} disableCustomColors={true} />
            )}
        />
    );
};

export default GlobalColorsPicker;
