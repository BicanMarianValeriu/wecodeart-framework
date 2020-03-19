/**
 * Internal dependencies
 */
import exporter from './export';
import markdown from './markdown';
import codeEditor from './code-editor';
import disableTitle from './disable-title';
import headingLabel from './heading-label';
import clearFormating from './clear-formatting';
import builderTemplate from './builder-template';

const { registerPlugin } = wp.plugins;

export default function registerWCAPlugins() {
	[
		exporter,
		markdown,
		codeEditor,
		disableTitle,
		headingLabel,
		clearFormating,
		builderTemplate
	].forEach((block) => {
		if (!block) return;

		const { name, render } = block;

		registerPlugin(name, { icon: false, render });
	});
}

registerWCAPlugins();