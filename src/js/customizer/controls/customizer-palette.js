import PaletteControl from './palette';

import './../../../scss/customizer/controls/palette.scss';

const {
    element: { render },
    customize: { Control, controlConstructor }
} = wp;

controlConstructor['wecodeart-palette'] = Control.extend({
    renderContent: function renderContent() {
        render(<PaletteControl control={this} />, this.container[0]);
    },
});
