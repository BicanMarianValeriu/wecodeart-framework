/**
 * WordPress dependencies.
 */
const {
	i18n: { __, sprintf },
	element: { useEffect, useState, useRef },
	components: { Popover, Dashicon }
} = wp;

const CSSEditor = ({
	attributes,
	setAttributes,
}) => {
	const { customCSS } = attributes;

	const editorRef = useRef(null);
	const customCSSRef = useRef(null);
	const defaultValue = 'selector {\n}\n';

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

	const DescriptionPopover = () => {
		const [isVisible, setIsVisible] = useState(false);
		const toggleVisible = () => setIsVisible((state) => !state);

		return (
			<>
				<Dashicon icon="info-outline" style={{ marginLeft: 'auto', cursor: 'pointer' }} onClick={toggleVisible} />
				{isVisible && <Popover placement="top-end">
					<div style={{ padding: '.5rem 1rem' }}>
						<p>{sprintf(__('Use %s to target the block CSS class.', 'wecodeart'), '"selector"')}</p>
						<pre>
							{'selector {\n    background: #000;\n}\n\nselector img {\n    border-radius: 100%;\n}'}
						</pre>
						<p>{__('You can also use other CSS syntax here, such as media queries.', 'wecodeart')}</p>
					</div>
				</Popover>}
			</>
		);
	};

	return (
		<>
			<div class="wecodeart-advanced-css">
				<hr />
				<p class="wecodeart-advanced-css__title" style={{ display: 'flex', fontSize: '11px', fontWeight: '500', textTransform: 'uppercase' }}>
					<span>{__('Add your custom CSS.', 'wecodeart')}</span>
					<DescriptionPopover />
				</p>
				<div className="wecodeart-advanced-css__editor" id="wecodeart-css-editor" />
			</div>
		</>
	);
};

export default CSSEditor;
