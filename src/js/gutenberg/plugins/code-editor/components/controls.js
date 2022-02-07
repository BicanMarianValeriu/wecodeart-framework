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
		if (editorMode === 'text' && isLoaded === false) {
			const editorSettings = wp.codeEditor.defaultSettings ? _.clone(wp.codeEditor.defaultSettings) : {};

			document.body.classList.add('theme-wecodeart--codemirror-loaded');

			editorSettings.codemirror = _.extend(
				{},
				editorSettings.codemirror,
				{
					mode: 'text/html',
					lineNumbers: true,
					indentUnit: 2,
					tabSize: 2,
					height: 'auto',
					lineWrapping: true,
					scrollbarStyle: 'null',
				}
			);

			const textEditor = document.querySelector('.editor-post-text-editor');
			const checkChanges = wp.codeEditor.initialize(textEditor, editorSettings);

			checkChanges.codemirror.on('change', ({ getValue }) => {
				const content = getValue();
				textEditor.innerHTML = content;
				dispatch('core/editor').editPost({ content });
			});

			checkChanges.codemirror.on('blur', ({ getValue }) => {
				const blocks = parse(getValue());
				dispatch('core/editor').resetEditorBlocks(blocks);
			});

			setIsLoaded(true);
		}
		return () => {
			setIsLoaded(false);
		};
	}, [editorMode]);

	return null;
};

export default compose(withSpokenMessages)(CodeEditor);