import paths from './paths';

const supportedBrowsers = [
    'last 3 versions', 		// http://browserl.ist/?q=last+3+versions
    'ie >= 10',				// http://browserl.ist/?q=ie+%3E%3D+10
    'edge >= 12', 			// http://browserl.ist/?q=edge+%3E%3D+12
    'firefox >= 28', 		// http://browserl.ist/?q=firefox+%3E%3D+28
    'chrome >= 21', 		// http://browserl.ist/?q=chrome+%3E%3D+21
    'safari >= 6.1', 		// http://browserl.ist/?q=safari+%3E%3D+6.1
    'opera >= 12.1', 		// http://browserl.ist/?q=opera+%3E%3D+12.1
    'ios >= 7', 			// http://browserl.ist/?q=ios+%3E%3D+7
    'android >= 4.4', 		// http://browserl.ist/?q=android+%3E%3D+4.4
    'blackberry >= 10', 	// http://browserl.ist/?q=blackberry+%3E%3D+10
    'operamobile >= 12.1', 	// http://browserl.ist/?q=operamobile+%3E%3D+12.1
    'samsung >= 4', 		// http://browserl.ist/?q=samsung+%3E%3D+4
];

const config = {
    browserSync: proxy => {
        if (proxy) return { proxy: proxy };
        else return { server: { baseDir: './' }, online: true };
    },
    autoprefixer: { browsers: supportedBrowsers, cascade: false },
    cleanCSS: { level: { 1: { specialComments: false } } },
    svgSprite: {
        mode: { symbol: { dest: paths.output.svg, sprite: 'sprite.svg', example: true } },
        svg: { xmlDeclaration: false, doctypeDeclaration: false }
    },
    babel: { // .babelrc should be used
        browsers: supportedBrowsers
    },
};

export default config;