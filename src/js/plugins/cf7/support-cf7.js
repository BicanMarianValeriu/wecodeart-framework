export default (function (wecodeart) {
	wecodeart.routes = {
		...wecodeart.routes,
		themeWecodeart: {
			complete: () => {
				const forms = document.querySelectorAll('form.wpcf7-form');
				const clearResponse = (form) => {
					const response = form.querySelector('.wpcf7-response-output');
					response.innerHTML = '';
					let classes = response.className.split(' ').filter(v => v.lastIndexOf('alert', 0) !== 0);
					classes = classes.filter(item => item !== 'my-3');
					response.className = classes.join(' ').trim();
				};

				[...forms].map(form => {
					// Clear Errors
					form.addEventListener('submit', (e) => {
						form.classList.remove('was-validated');
						clearResponse(form);
						const invalids = form.querySelectorAll('.is-invalid');
						[...invalids].map(i => i.classList.remove('is-invalid'));
					});

					// Show Validation
					form.addEventListener('wpcf7invalid', ({ detail }) => {
						const { apiResponse: { invalid_fields } } = detail;
						form.classList.add('was-validated');
						console.log(invalid_fields);
						invalid_fields.map(({ into, error_id }) => {
							// Add invalid fields class
							const fields = form.querySelectorAll(`${into} .form-control, ${into} fieldset`);
							[...fields].map(field => field.classList.add('is-invalid'));
							// Create an observer instance for each invalid field
							const observer = new MutationObserver(() => {
								const tip = form.querySelector(`${into} span.wpcf7-not-valid-tip`);
								tip.setAttribute('id', error_id);
								tip.classList.add('invalid-feedback');
								observer.disconnect();
							});
							observer.observe(form.querySelector(into), { childList: true });
						});

						// Observe response output
						const observer = new MutationObserver((e) => {
							const { target } = e[0];
							target.className = `${target.className} alert alert-warning my-3`;
							observer.disconnect();
						});
						observer.observe(form.querySelector('.wpcf7-response-output'), { childList: true });
					});

					// On sent ok
					form.addEventListener('wpcf7mailsent', () => {
						const response = form.querySelector('.wpcf7-response-output');
						response.className = `${response.className} alert alert-success my-3`;

						let timeout = setTimeout(() => {
							clearResponse(form);
							clearTimeout(timeout);
						}, 5000);
					});
				});
			}
		}
	};
}).apply(this, [window.wecodeart]);