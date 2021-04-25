/**
 * Internal dependencies
 */
import render from './components/control';

const { registerPlugin } = wp.plugins;

registerPlugin('wca-patterns', { icon: false, render });
