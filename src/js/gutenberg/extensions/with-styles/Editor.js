/**
 * WordPress dependencies.
 */
const {
	i18n: { __ },
	element: { useEffect, useRef }
} = wp;

const CSSEditor = ({
	attributes,
	setAttributes,
	clientId
}) => {
	const { customCSS, className } = attributes;

	useEffect(() => {
		if (customCSS) {
			const generatedCSS = (customCSS).replace(/.wcacss-[a-zA-Z0-9_-]*/g, 'selector');
			customCSSRef.current = generatedCSS;
		} else {
			customCSSRef.current = 'selector {\n}\n';
		}

		editorRef.current = wp.CodeMirror(document.getElementById('wecodeart-css-editor'), {
			value: customCSSRef.current,
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

		editorRef.current.on('change', () => {
			const regex = new RegExp('selector', 'g');
			const generatedCSS = editorRef.current.getValue().replace(regex, `.${classArRef.current}`);
			customCSSRef.current = generatedCSS;

			if (('selector {\n}\n').replace(/\s+/g, '') === customCSSRef.current.replace(/\s+/g, '')) {
				return setAttributes({ customCSS: null });
			}

			setAttributes({ customCSS: customCSSRef.current });
		});
	}, []);

	useEffect(() => {
		let classes = getClassName();

		setAttributes({
			className: classes,
			hasCustomCSS: true,
		});
	}, [attributes]);

	const getClassName = () => {
		let classes;

		const uniqueId = clientId.substr(0, 8);

		if (
			null !== customCSSRef.current &&
			('selector {\n}\n').replace(/\s+/g, '') === customCSSRef.current.replace(/\s+/g, '')
		) {
			return className;
		}

		if (className) {
			classes = className;

			if (!classes.includes('wcacss-')) {
				classes = classes.split(' ');
				classes.push(`wcacss-${uniqueId}`);
				classes = classes.join(' ');
			}

			classArRef.current = classes.split(' ');
			classArRef.current = classArRef.current.find(i => i.includes('wcacss'));
		} else {
			classes = `wcacss-${uniqueId}`;
			classArRef.current = classes;
		}

		return classes;
	};

	const editorRef = useRef(null);
	const customCSSRef = useRef(null);
	const classArRef = useRef(null);

	return (
		<>
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
		</>
	);
};

export default CSSEditor;
