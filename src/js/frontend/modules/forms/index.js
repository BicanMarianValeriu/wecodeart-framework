// Styles
import './../../../../scss/frontend/forms.scss';

const { addAction } = wp.hooks;

const extendCommonWithForms = (route, func) => {
	let isLoaded = false;
	if (route === 'common' && isLoaded !== true) {
		isLoaded = true;
		// Fetch all the forms we want to apply custom Bootstrap validation styles to
		const forms = document.querySelectorAll('.needs-validation');
		Array.prototype.slice.call(forms).forEach((form) => {
			let timeout;
			
			form.addEventListener('submit', (e) => {
				if (!form.checkValidity()) {
					e.preventDefault();
					e.stopPropagation();
				}

				form.classList.add('was-validated');

				timeout = setTimeout(() => {
					form.classList.remove('was-validated');
					clearTimeout(timeout);
				}, 5000);

			}, false);
		});
	}
};

addAction('wecodeart.route', 'wecodeart/route/common/forms', extendCommonWithForms, 10);
