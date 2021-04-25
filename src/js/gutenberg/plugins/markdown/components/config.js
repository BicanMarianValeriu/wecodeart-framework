/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;

const markdownShortcuts = {
	title: __( 'Markdown Formatting', 'wecodeart' ),
	shortcuts: [
		{
			keyCombination: [ '##', 'SPACE' ],
			description: __( 'Large header (h2)', 'wecodeart' ),
		},
		{
			keyCombination: [ '###', 'SPACE' ],
			description: __( 'Medium header (h3)', 'wecodeart' ),
		},
		{
			keyCombination: [ '####', 'SPACE' ],
			description: __( 'Small header (h4)', 'wecodeart' ),
		},
		{
			keyCombination: [ '1.', 'SPACE' ],
			description: __( 'Numbered list', 'wecodeart' ),
		},
		{
			keyCombination: [ '*', 'SPACE' ],
			description: __( 'Bulleted list', 'wecodeart' ),
		},
		{
			keyCombination: [ '>', 'SPACE' ],
			description: __( 'Blockquote', 'wecodeart' ),
		},
		{
			keyCombination: [ '_italic_' ],
			description: __( 'Italic', 'wecodeart' ),
		},
		{
			keyCombination: [ '*bold*' ],
			description: __( 'Bold', 'wecodeart' ),
		},
		{
			keyCombination: [ '~Strikethrough~' ],
			description: __( 'Strikethrough', 'wecodeart' ),
		},
		{
			keyCombination: [ '`code`' ],
			description: __( 'Code', 'wecodeart' ),
		},
		{
			keyCombination: [ ':lorem' ],
			description: __( 'Lorem ipsum paragraph', 'wecodeart' ),
		},
	],
};

export default [
	markdownShortcuts,
];
