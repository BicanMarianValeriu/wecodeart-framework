/**
 * Internal dependencies
 */
import markdown from './markdown';
import codeEditor from './code-editor';
import headingLabel from './heading-label';
import clearFormating from './clear-formatting';
import pageTitle from './page-title';
import pageTemplate from './page-template';
import contentModules from './content-modules';

const { registerPlugin } = wp.plugins;

export default function registerWCAPlugins() {
	[
		markdown,
		codeEditor,
		headingLabel,
		clearFormating,
		pageTitle,
		pageTemplate,
		contentModules
	].forEach((block) => {
		if (!block) return;

		const { name, render } = block;

		registerPlugin(name, { icon: false, render });
	});
}

registerWCAPlugins();