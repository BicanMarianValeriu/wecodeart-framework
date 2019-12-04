/**
 * WordPress dependencies.
 */
const { __ } = wp.i18n;
const { Component, Fragment } = wp.element;

class CSSEditor extends Component {
	constructor() {
		super(...arguments);

		this.editor;

		this.customCSS = '';
	}

	componentDidMount() {
		let classes, classAr;

		const uniqueId = this.props.clientId.substr(0, 8);

		if (this.props.attributes.className) {
			classes = this.props.attributes.className;

			if (!classes.includes('wcacss-')) {
				classes = classes.split(' ');
				classes.push(`wcacss-${uniqueId}`);
				classes = classes.join(' ');
			}

			classAr = classes.split(' ');
			classAr = classAr.find(i => i.includes('wcacss'));
		} else {
			classes = `wcacss-${uniqueId}`;
			classAr = classes;
		}

		this.props.setAttributes({
			hasCustomCSS: true,
			className: classes
		});

		if (this.props.attributes.customCSS) {
			const generatedCSS = (this.props.attributes.customCSS).replace(/.wcacss-[^#\s]*/g, 'selector');
			this.customCSS = generatedCSS;
		} else {
			this.customCSS = 'selector {\n}\n';
		}

		this.editor = wp.CodeMirror(document.getElementById('wecodeart-css-editor'), {
			value: this.customCSS,
			autoCloseBrackets: true,
			continueComments: true,
			lineNumbers: true,
			lineWrapping: true,
			matchBrackets: true,
			lint: true,
			gutters: ['CodeMirror-lint-markers'],
			styleActiveLine: true,
			styleActiveSelected: true,
			extraKeys: {
				'Ctrl-Space': 'autocomplete',
				'Alt-F': 'findPersistent',
				'Cmd-F': 'findPersistent'
			}
		});

		this.editor.on('change', () => {
			const regex = new RegExp('selector', 'g');
			const generatedCSS = this.editor.getValue().replace(regex, `.${classAr}`);
			this.customCSS = generatedCSS;

			if (('selector {\n}\n').replace(/\s+/g, '') === this.customCSS.replace(/\s+/g, '')) {
				return this.props.setAttributes({ customCSS: null });
			}

			this.props.setAttributes({ customCSS: this.customCSS });
		});
	}

	render() {
		return (
			<Fragment>
				<div class="wecodeart-advanced-css">
					<hr />
					<h2 class="wecodeart-advanced-css__title">{__('Add your custom CSS.', 'wecodeart')}</h2>
					<div className="wecodeart-advanced-css__editor" id="wecodeart-css-editor" />
					<div class="wecodeart-advanced-css__content">
						<p>{__('Use', 'wecodeart')} <code>selector</code> {__('to target block wrapper.', 'wecodeart')}</p>
						<p>{__('Example:', 'wecodeart')}</p>
						<pre className="wecodeart-advanced-css__help">
							{'selector {\n    background: #000;\n}\n\nselector img {\n    border-radius: 100%;\n}'}
						</pre>
						<p>{__('You can also use other CSS syntax here, such as media queries.', 'wecodeart')}</p>
					</div>
				</div>
			</Fragment>
		);
	}
}

export default CSSEditor;
