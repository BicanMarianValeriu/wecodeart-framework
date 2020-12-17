/**
 * Set the attributes for the Background Panel
 * @type {Object}
 */
const attributes = {
	backgroundType: {
		type: 'string',
	},
	backgroundUrl: {
		type: 'string',
	},
	backgroundPosition: {
		type: 'string',
		default: '',
	},
	backgroundRepeat: {
		type: 'string',
		default: 'no-repeat',
	},
	backgroundSize: {
		type: 'string',
	},
	backgroundOverlay: {
		type: 'number',
		default: 0,
	},
	hasParallax: {
		type: 'boolean',
		default: false,
	},
	focalPoint: {
		type: 'object',
	},
};

export default attributes;