/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { Component } = wp.element;
const { compose } = wp.compose;
const { PluginPostStatusInfo } = wp.editPost;
const { select, withSelect, withDispatch } = wp.data;
const { withSpokenMessages, CheckboxControl } = wp.components;

class DisableTitle extends Component {
	constructor() {
		super( ...arguments );

		this.initialize = this.initialize.bind( this );
	}

	componentDidMount() {
		this.initialize();
	}

	componentDidUpdate() {
		this.initialize();
	}

	initialize() {
		const { postMeta } = this.props;
		
		const titleBlock = document.querySelector( '.editor-post-title__block' );

		if ( titleBlock ) {
			const isHidden = typeof postMeta !== 'undefined' && typeof postMeta._wca_title_hidden !== 'undefined' ? postMeta._wca_title_hidden : false;
			const bodyClass = isHidden ? 'wca-title-hidden' : 'wca-title-visible';
			
			if ( isHidden ) {
				document.body.classList.remove( 'wca-title-visible' );
			} else {
				document.body.classList.remove( 'wca-title-hidden' );
			}

			document.body.classList.add( bodyClass );
		}
	}

	render() {
		const { onToggle, postMeta, postType } = this.props;

		if ( [ 'wp_block' ].includes( postType ) ) {
			return false;
		}

		const isHidden = typeof postMeta !== 'undefined' && typeof postMeta._wca_title_hidden !== 'undefined' ? postMeta._wca_title_hidden : false;

		return (
			<PluginPostStatusInfo>
				<CheckboxControl
					className="wca-hide-title-label"
					label={ __( 'Hide ' + postType + ' title on single template?', 'wecodeart' ) }
					checked={ isHidden }
					onChange={ onToggle }
					help={ isHidden ? __( 'Title is now hidden.', 'wecodeart' ) : null }
				/>
			</PluginPostStatusInfo>
		);
	}
}

export default compose(
	withSelect( () => {
		return {
			postType: select( 'core/editor' ).getEditedPostAttribute( 'type' ),
			postMeta: select( 'core/editor' ).getEditedPostAttribute( 'meta' ),
		};
	} ),
	withDispatch( ( dispatch, ownProps ) => {
		let metavalue;
		if ( typeof ownProps.postMeta !== 'undefined' && typeof ownProps.postMeta._wca_title_hidden !== 'undefined' ) {
			metavalue = ownProps.postMeta._wca_title_hidden;
		}
		return {
			onToggle() {
				dispatch( 'core/editor' ).editPost( {
					meta: {
						_wca_title_hidden: ! metavalue,
					},
				} );
			},
		};
	} ),
	withSpokenMessages,
)( DisableTitle );
