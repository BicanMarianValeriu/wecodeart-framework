/**
 * WordPress dependencies.
 */
const {
	i18n: { __ },
	element: { useEffect, useRef }
} = wp;

const CSSEditor = ({
	clientId,
	attributes,
	setAttributes,
}) => {
	const { customCSS, customCSSId } = attributes;

	const editorRef = useRef(null);
	const customCSSRef = useRef(null);
	const defaultValue = 'selector {\n}\n';

	useEffect(() => {
		if (clientId === customCSSId) return;
		setAttributes({ customCSSId: clientId });
	}, [clientId]);

	useEffect(() => {
		customCSSRef.current = defaultValue;

		if (customCSS) {
			customCSSRef.current = customCSS;
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
			customCSSRef.current = editorRef.current.getValue();

			if ((defaultValue).replace(/\s+/g, '') === customCSSRef.current.replace(/\s+/g, '')) {
				return setAttributes({ customCSS: null });
			}

			setAttributes({ customCSS: customCSSRef.current });
		});
	}, []);

	return (
		<>
			<div class="wecodeart-advanced-css">
				<hr />
				<h2 class="wecodeart-advanced-css__title">{__('Add your custom CSS.', 'wecodeart')}</h2>
				<div className="wecodeart-advanced-css__editor" id="wecodeart-css-editor" />
				<div class="wecodeart-advanced-css__content">
					<p>{__('Use', 'wecodeart')} <code>selector</code> {__('to target the block class.', 'wecodeart')}</p>
					<p>{__('Example', 'wecodeart')}:</p>
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
