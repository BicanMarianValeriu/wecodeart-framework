/**
 * Internal dependencies
 */
import markdown from './markdown';
import codeEditor from './code-editor';
import disableTitle from './disable-title';
import headingLabel from './heading-label';
import clearFormating from './clear-formatting';

const { registerPlugin } = wp.plugins;

export default function registerWCAPlugins() {
    [
		markdown,
		codeEditor,
		disableTitle,
		headingLabel,
		clearFormating
	].forEach((block) => {
        if (!block) return;
		
		const { name, render } = block;
		
        registerPlugin( name, {
			icon: false,
			render,
		} );
    });
}

registerWCAPlugins();