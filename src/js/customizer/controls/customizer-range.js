import RangeControl from './range';

import './../../../scss/customizer/controls/range.scss';

const {
	element: { render },
	customize: { Control, controlConstructor }
} = wp;

controlConstructor['wecodeart-range'] = Control.extend({
	renderContent: function renderContent() {
		render(<RangeControl control={this} />, this.container[0]);
	},
});
