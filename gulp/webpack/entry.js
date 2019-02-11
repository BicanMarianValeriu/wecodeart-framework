const entryArray = ['./src/js/frontend.js'];

const entryObject = entryArray.reduce((acc, item) => {
	const name = item.replace('./src/js/', '').replace('.js', '');
	acc[name] = item;
	return acc;
}, {});

module.exports = entryObject;