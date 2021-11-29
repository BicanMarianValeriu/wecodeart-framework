/**
 * Internal dependencies
 */
import codeEditor from './code-editor';
import clearFormating from './clear-formatting';

const { registerPlugin } = wp.plugins;

export default function registerWCAPlugins() {
	[
		codeEditor,
		clearFormating,
	].forEach((block) => {
		if (!block) return;

		const { name, render } = block;

		registerPlugin(name, { icon: false, render });
	});
}

registerWCAPlugins();