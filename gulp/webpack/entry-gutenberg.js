/* eslint-disable */
const entryArray = [ 
	'./src/js/gutenberg/editor.js',  
];

const entryObject = entryArray.reduce((acc, item) => {
	const name = item.replace('./src/js/gutenberg', '').replace('.js', '');
	acc[name] = item;
	return acc;
}, {});

module.exports = entryObject;