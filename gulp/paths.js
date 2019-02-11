//import glob from 'glob';

export default {
	theme: './',   
	
	entry: {
		css: './assets/css/*.css',
		svg: './src/svg/**/*.svg',
		scss: {
			watch: './src/scss/**/*',
			main: './src/scss/style.scss',
			customizer: './src/scss/customizer/**/*.scss'
		},
		js: {
			watch: './src/js/**/*',
			main: './src/js/frontend.js',
			customizer: './src/js/customizer/**/*.js'
		}
	},

	output: {
		build: './assets/build/',
		css: './assets/css/',
		svg: './assets/images/',
		js: './assets/js/'
	}
};