export default {
	theme: './',   
	
	entry: {
		scss: {
			watch: './src/scss/**/*.scss',
			main: './src/scss/style.scss',
			admin: './src/scss/admin/style.scss',
			customizer: './src/scss/customizer/**/*.scss',
		},
		js: {
			watch: './src/js/**/*',
			main: './src/js/frontend.js',
			admin: './src/js/admin/**/*.js',
			customizer: './src/js/customizer/**/*.js',
		}
	},

	output: {}
};