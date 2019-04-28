export default {
	theme: './',   
	
	entry: {
		css: './assets/css/*.css',
		svg: './src/svg/**/*.svg',
		scss: {
			watch: './src/scss/**/*.scss',
			main: './src/scss/style.scss',
			admin: './src/scss/admin/style.scss',
			customizer: './src/scss/customizer/**/*.scss'
		},
		js: {
			watch: './src/js/**/*',
			main: './src/js/frontend.js',
			admin: './src/js/admin/**/*.js',
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