/**
 * WordPress dependencies
 */
const {
	compose: {
		compose
	},
	data: {
		useSelect,
		dispatch
	},
	blocks: {
		parse,
	},
	element: {
		useState,
		useEffect
	},
	components: {
		withSpokenMessages
	}
} = wp;

const CodeEditor = () => {
	const [isLoaded, setIsLoaded] = useState(false);

	const { editorMode } = useSelect((select) => {
		return {
			editorMode: select('core/edit-post').getEditorMode(),
		};
	});

	useEffect(() => {
		if (isLoaded || editorMode !== 'text') {
			return;
		}

		const textEditor = document.querySelector('.editor-post-text-editor,.edit-site-code-editor-text-area');

		if (textEditor) {
			const editorSettings = wp.codeEditor.defaultSettings ? _.clone(wp.codeEditor.defaultSettings) : {};

			document.body.classList.add('theme-wecodeart--codemirror-loaded');

			editorSettings.codemirror = _.extend({}, editorSettings.codemirror, {
				mode: 'text/html',
				lineNumbers: true,
				lineWrapping: true,
				indentUnit: 2,
				tabSize: 2,
				height: 'auto',
				scrollbarStyle: 'null',
			});

			const { codemirror } = wp.codeEditor.initialize(textEditor, editorSettings);

			// const { display: { viewTo }, getTextArea } = codemirror;
			// const { value } = getTextArea();
			// editor.autoFormatRange({ line: 0, ch: 0 }, { line: viewTo, ch: value.length });

			codemirror.on('change', ({ getTextArea }) => {
				const { value } = getTextArea();
				textEditor.innerHTML = value;
				dispatch('core/editor').editPost({ content: value });
			});

			codemirror.on('blur', ({ getTextArea }) => {
				const { value } = getTextArea();
				dispatch('core/editor').resetEditorBlocks(parse(value));
			});

			setIsLoaded(true);
		}

		return () => {
			setIsLoaded(false);
		};
	}, [editorMode]);

	return;
};

export default compose(withSpokenMessages)(CodeEditor);