import TypeFaceControl from './fonts';

import './../../../scss/customizer/controls/fonts.scss';

const {
	element: { render },
	customize: { Control, controlConstructor }
} = wp;

controlConstructor['wecodeart-fonts'] = Control.extend({
	renderContent: function renderContent() {
		render(<TypeFaceControl control={this} />, this.container[0]);
	},
});
