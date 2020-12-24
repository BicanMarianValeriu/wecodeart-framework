import ColorControl from './color';

import './../../../scss/customizer/controls/color.scss';

const {
    element: { render },
    customize: { Control, controlConstructor }
} = wp;

controlConstructor['wecodeart-color'] = Control.extend({
    renderContent: function renderContent() {
        render(<ColorControl control={this} />, this.container[0]);
    },
});
