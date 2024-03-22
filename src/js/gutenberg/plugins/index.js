/**
 * Internal dependencies
 */
import codeEditor from './code-editor';

const { registerPlugin } = wp.plugins;

function registerWCAPlugins() {
	[
		codeEditor,
	].forEach((block) => {
		if (!block) {
			return;
		}

		const { name, render } = block;

		registerPlugin(name, { icon: false, render });
	});
}

wp.domReady(registerWCAPlugins);