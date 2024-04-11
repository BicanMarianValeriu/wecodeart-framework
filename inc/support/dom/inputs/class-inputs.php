<?php
/**
 * WeCodeArt Framework
 *
 * WARNING: This file is part of the core WeCodeArt Framework. DO NOT edit this file under any circumstances.
 * Please do all modifications in the form of a child theme.
 *
 * @package 	WeCodeArt Framework 
 * @subpackage 	DOM\Inputs
 * @copyright   Copyright (c) 2024, WeCodeArt Framework
 * @since		3.1.2
 * @version		6.4.1
 */

namespace WeCodeArt\Support\DOM;

defined( 'ABSPATH' ) || exit;

use WeCodeArt\Config\Traits\{ Asset, Singleton };
use WeCodeArt\Config\Interfaces\{ Integration, Configuration };
use function WeCodeArt\Functions\encode_svg_data;

/**
 * Standard Inputs Markup
 */
class Inputs implements Configuration {

	use Singleton;
    use Asset;

	/**
     * All of the configuration items.
     *
     * @var array
     */
    protected $items = [];
	protected static $loaded = [];

    /**
	 * Send to Constructor
	 */
	public function init() {
		// Register Default Inputs
		$this->register( 'basic',		Inputs\Basic::class     );
		$this->register( 'file',		Inputs\File::class     	);
		$this->register( 'date',		Inputs\Date::class     	);
		$this->register( 'color',		Inputs\Color::class		);
		$this->register( 'range',		Inputs\Range::class     );
		$this->register( 'button',		Inputs\Button::class 	);
		$this->register( 'select',		Inputs\Select::class 	);
		$this->register( 'textarea',	Inputs\TextArea::class 	);
		$this->register( 'toggle',		Inputs\Toggle::class 	);
		$this->register( 'radio',		Inputs\Toggle::class 	);
		$this->register( 'checkbox',	Inputs\Toggle::class 	);
        $this->register( 'fieldset',	Inputs\Fieldset::class 	);
        $this->register( 'floating',	Inputs\Floating::class 	);
        $this->register( 'group',		Inputs\Group::class 	);

        add_action( 'wp_enqueue_scripts',	[ $this, 'assets'   ], 20, 1 );
	}

	/**
	 * Render the HTML of the input
	 *
	 * @param 	string 		$type		text/number/etc
	 * @param 	array 		$args		Input Args
	 *
	 * @return	void
	 */
	public static function render( string $type = 'hidden', ...$input_args ) {
		echo self::compile( $type, ...$input_args ); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
	}

	/**
	 * Get the HTML of the input
	 *
	 * @since	unknown
	 * @version	6.4.1
	 *
	 * @param 	string 		$type		text/number/etc
	 * @param 	array 		$args		Input Args
	 *
	 * @return	string
	 */
	public static function compile( string $type = 'hidden', ...$input_args ) {
		$class_type = in_array( $type, Inputs\Basic::get_types() ) ? 'basic' : $type;
		$class      = Inputs::get_instance()->get( $class_type );

		if( $class ) {
			if( ! in_array( $class_type, self::$loaded ) ) {
				self::$loaded[] = $class_type;
			}

			$input = new $class( $type, ...$input_args );
			
            return $input->get_content(); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
		}
	}

    /**
	 * Enqueue Front-End Assets
	 *
	 * @since	5.3.3
	 * @version	6.2.5
	 */
	public function assets() {
		if( empty( self::$loaded ) ) {
			return;
		}

		$svg_valid = [
			'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8 8">',
				'<path fill="#7dc855" d="M2.3 6.73.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z"/>',
			'</svg>'
		];

		$svg_valid = encode_svg_data( join( '', $svg_valid ) );

		$svg_invalid = [
			'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12" width="12" height="12" fill="none" stroke="#dc3545">',
				'<circle cx="6" cy="6" r="4.5"/>',
				'<path stroke-linejoin="round" d="M5.8 3.6h.4L6 6.5z"/>',
				'<circle cx="6" cy="8.2" r=".6" fill="#dc3545" stroke="none"/>',
			'</svg>'
		];

		$svg_invalid = encode_svg_data( join( '', $svg_invalid ) );

		$inline_css = '
			/* Global */
			.wecodeart-forms {
				--wp--input--icon-valid: url("' . $svg_valid . '");
				--wp--input--icon-invalid: url("' . $svg_invalid . '");
				--wp--input--padding-y: .5rem;
				--wp--input--padding-x: .75rem;
				--wp--input--validation-size: calc(0.75em + .375rem) calc(0.75em + .375rem);
				--wp--input--padding: var(--wp--input--padding-y) var(--wp--input--padding-x);
				--wp--input--color: inherit;
				--wp--input--disabled-color: var(--wp--gray-300);
				--wp--input--placeholder-color: var(--wp--gray-600);
				--wp--input--background-color: var(--wp--preset--color--accent);
				--wp--input--border-color: var(--wp--preset--color--accent);
				--wp--input--border-color-focus: var(--wp--preset--color--primary);
				--wp--input--border-radius: .375rem;
				--wp--input--border: 1px solid var(--wp--input--border-color);
			}

			.wecodeart-forms.theme-is-dark {
				--wp--input--color: var(--wp--preset--color--white);
			}

			/* Reset */
			label {
				display: inline-block;
			}
			input,
			button,
			select,
			optgroup,
			textarea {
				margin: 0;
				font-family: inherit;
				font-size: inherit;
				line-height: inherit;
			}
			::-moz-focus-inner {
				padding: 0;
				border-style: none;
			}
			::-webkit-inner-spin-button {
				height: auto;
			}
			::-webkit-search-decoration {
				-webkit-appearance: none;
			}
			[type="search"] {
				outline-offset: -2px;
				-webkit-appearance: textfield;
			}
			/* rtl:raw:
			[type="tel"],
			[type="url"],
			[type="email"],
			[type="number"] {
				direction: ltr;
			}
			*/
			[hidden] {
				display: none !important;
			}
			
			/* Misc */
			.form-label {
				margin-bottom: 0.5rem;
			}
			.form-text {
                margin-top: 0.25rem;
                font-size: var(--wp--preset--font-size--small);
                color: var(--wp--preset--color--dark);
            }

			/* Validation */
			.valid-feedback,
			.invalid-feedback {
				display: none;
				width: 100%;
				margin-top: 0.25rem;
				font-size: var(--wp--preset--font-size--small);
			}  
			.valid-feedback {
				color: var(--wp--preset--color--success);
			}
			.invalid-feedback {
				color: var(--wp--preset--color--danger);
			}
			.valid-tooltip,
			.invalid-tooltip,
			.wpcf7-not-valid-tip {
				position: absolute;
				top: 100%;
				z-index: 5;
				display: none;
				max-width: 100%;
				padding: 0.25rem 0.5rem;
				margin-top: 0.1rem;
				font-size: var(--wp--preset--font-size--small);
				border-radius: var(--wp--input--border-radius);
			}
			.valid-tooltip {
				color: #000;
				background-color: var(--wp--preset--color--success);
			}
			.invalid-tooltip,
			.wpcf7-not-valid-tip {
				color: #fff;
				background-color: var(--wp--preset--color--danger);
			}
			.was-validated :where(
				:valid,
				:invalid,
				.is-valid,
				.is-invalid,
				.wpcf7-not-valid,
			) ~ :where(
				.valid-feedback,
				.valid-tooltip,
				.invalid-feedback,
				.invalid-tooltip,
				.wpcf7-not-valid-tip
			) {
				display: block;
			}
		';

		foreach( self::$loaded as $class ) {
			if( ! empty( $deps = $this->get( $class )::$style_deps ) ) {
				foreach( $deps as $dep ) {
					// Skip already loaded.
					if( in_array( $dep, self::$loaded ) ) {
						continue;
					}

					$inline_css .= $this->get( $dep )::styles();
				}
			}

			$inline_css .= $this->get( $class )::styles();
		}

		// Body class
		add_action( 'body_class', static function( $classes ) {
			$classes[] = 'wecodeart-forms';

			return $classes;
		} );

		// Styles
		wecodeart( 'assets' )->add_style( $this->make_handle(), [
			'inline'	=> $inline_css,
		] );

		$inline_js = <<<JS
			(function (wecodeart) {
				wecodeart.routes = {
					...wecodeart.routes,
					wecodeartForms: {
						complete: () => {
							const forms = document.querySelectorAll('.needs-validation');
							Array.prototype.slice.call(forms).forEach((form) => {
								let timeout;
								
								form.addEventListener('submit', (e) => {
									if (!form.checkValidity()) {
										e.preventDefault();
										e.stopPropagation();
									}
									
									form.querySelectorAll('.wpcf7-not-valid-tip,.invalid-feedback,.invalid-tooltip').forEach(el => el.remove());

									form.classList.add('was-validated');
									
									clearTimeout(timeout);

									timeout = setTimeout(() => {
										form.classList.remove('was-validated');
										clearTimeout(timeout);
									}, 5000);

								}, false);
							});
						}
					}
				};
			}).apply(this, [window.wecodeart]);
		JS;
		
		// Scripts
		wecodeart( 'assets' )->add_script( $this->make_handle(), [
			'inline'	=> $inline_js,
			'deps'		=> [ 'wecodeart-support-assets' ],
		] );
	}
	
	/**
     * Set a given integration value.
     *
     * @param  array|string  $key
     * @param  mixed   $value
     *
     * @return void
     */
    public function register( $key, $value = null ) {
        $this->set( $key, $value );
	}

    /**
     * Set a given configuration value.
     *
     * @param  array|string  $key
     * @param  mixed   $value
     *
     * @return void
     */
    public function set( $key, $value = null ) {
        $keys = is_array( $key ) ? $key : [ $key => $value ];

        foreach ( $keys as $key => $value ) {
            $this->items[$key] = apply_filters( "wecodeart/inputs/set/{$key}", $value );
        }
    }

	/**
     * Determine if the given configuration value exists.
     *
     * @param  string  $key
     *
     * @return bool
     */
    public function has( $key ) {
        return isset( $this->items[$key] );
    }

    /**
     * Get the specified configuration value.
     *
     * @param  string  $key
     * @param  mixed   $default
     *
     * @return mixed
     */
    public function get( $key, $default = null ) {
        if ( ! isset( $this->items[$key] ) ) {
            return $default;
        }

        return apply_filters( "wecodeart/inputs/get/{$key}", $this->items[$key] );
	}

    /**
     * Forget a given configuration value.
     *
     * @param string  $key
     *
     * @return void
     */
    public function forget( $key ) {
        unset( $this->items[$key] );
    }

    /**
     * Get all of the configuration items for the application.
     *
     * @return array
     */
    public function all() {
        return $this->items;
    }
}