import TypeFace from './fonts/Control';

import './../../../scss/customizer/controls/fonts.scss';

const { render } = wp.element;
const { Control, controlConstructor } = wp.customize;

controlConstructor['wecodeart-fonts'] = Control.extend({
	renderContent: function renderContent() {
		render(<TypeFace control={this} />, this.container[0]);
	},
});
