import classnames from 'classnames';

const {
    components: { Dropdown, Button, Icon, ColorPalette }
} = wp;

const GlobalColorsPicker = ({ onChange, activeColor, palette = [] }) => {
    const isGlobal = palette.filter(({ color }) => color === activeColor).length;

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
                <ColorPalette {...{
                    colors: palette,
                    value: activeColor,
                    disableCustomColors: true,
                    clearable: true,
                    onChange
                }} />
            )}
        />
    );
};

export default GlobalColorsPicker;
