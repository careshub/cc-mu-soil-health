<?php
/**
 * Community Commons MU_Soil_Health
 *
 * @package   Community_Commons_MU_Soil_Health
 * @author    Chris Barnett
 * @license   GPL-2.0+
 * @link      http://www.communitycommons.org
 * @copyright 2016 Community Commons
 */

/**
 * Plugin class. This class should ideally be used to work with the
 * public-facing side of the WordPress site.
 *
 * If you're interested in introducing administrative or dashboard
 * functionality, then refer to `admin/class-group-namespace-admin.php`
 *
 *
 * @package Community_Commons_MU_Soil_Health
 * @author  Chris Barnett
 */
class CC_MU_Soil_Health_Public {

	/**
	 * Instance of this class.
	 *
	 * @since    1.0.0
	 *
	 * @var      object
	 */
	protected static $instance = null;

	/**
	 *
	 * The current version of the plugin.
	 *
	 * Plugin version, used for cache-busting of style and script file references.
	 *
	 * @since    1.0.0
	 *
	 * @var      string
	 */
	protected $version = '1.0.0';

	/**
	 *
	 * Unique identifier for your plugin.
	 *
	 *
	 * The variable name is used as the text domain when internationalizing strings
	 * of text. Its value should match the Text Domain file header in the main
	 * plugin file.
	 *
	 * @since    1.0.0
	 *
	 * @var      string
	 */
	protected $plugin_slug = 'mu-soil-health';

	/**
	 * Initialize the plugin by setting localization and loading public scripts
	 * and styles.
	 *
	 * @since     1.0.0
	 */
	private function __construct() {

		$this->version = mu_soil_health_get_plugin_version();

		// Load plugin text domain
		add_action( 'init', array( $this, 'load_plugin_textdomain' ) );

		// Load public-facing style sheet and JavaScript.
		add_action( 'wp_enqueue_scripts', array( $this, 'enqueue_styles_scripts' ) );

		// Catch AJAX requests to find out if the current user is logged in.
		add_action( 'wp_ajax_cc-mush-is-user-member', array( $this, 'ajax_is_user_a_member' ) );
		add_action( 'wp_ajax_nporiv_cc-mush-is-user-member', array( $this, 'ajax_is_user_a_member' ) );
	}

	/**
	 * Return an instance of this class.
	 *
	 * @since     1.0.0
	 *
	 * @return    object    A single instance of this class.
	 */
	public static function get_instance() {

		/*
		 * @TODO :
		 *
		 * - Uncomment following lines if the admin class should only be available for super admins
		 */
		/* if( ! is_super_admin() ) {
			return;
		} */

		// If the single instance hasn't been set, set it now.
		if ( null == self::$instance ) {
			self::$instance = new self;
		}

		return self::$instance;
	}

	/**
	 * Return the plugin slug.
	 *
	 * @since    1.0.0
	 *
	 * @return   string Plugin slug.
	 */
	public function get_plugin_slug() {
		return $this->plugin_slug;
	}

	/**
	 * Load the plugin text domain for translation.
	 *
	 * @since    1.0.0
	 */
	public function load_plugin_textdomain() {
		$domain = $this->plugin_slug;
		$locale = apply_filters( 'plugin_locale', get_locale(), $domain );

		load_textdomain( $domain, trailingslashit( WP_LANG_DIR ) . $domain . '/' . $domain . '-' . $locale . '.mo' );
	}

	/**
	 * Register and enqueue public-facing style sheet.
	 *
	 * @since    1.0.0
	 */
	public function enqueue_styles_scripts() {
		if ( mu_soil_health_is_mu_soil_health_group() ) {
			// Styles
			wp_enqueue_style( $this->plugin_slug . '-plugin-styles', plugins_url( 'css/public.css', __FILE__ ), array(), $this->version );

			// IE specific
			// global $wp_styles;
			// wp_enqueue_style( $this->plugin_slug . '-ie-plugin-styles', plugins_url( 'css/public-ie.css', __FILE__ ), array(), $this->version );
			// $wp_styles->add_data( $this->plugin_slug . '-ie-plugin-styles', 'conditional', 'lte IE 9' );

			// Scripts
			wp_enqueue_script( $this->plugin_slug . '-plugin-script', plugins_url( 'js/public.min.js', __FILE__ ), array( 'jquery' ), $this->version );
		}
	}

	/**
	 * AJAX handler for checking whether the current user is a member of this hub.
	 *
	 * @since    1.0.0
	 *
	 * @return bool True if the user is logged in and belongs to the hub. False otherwise.
	 */
	public function ajax_is_user_a_member() {
		wp_send_json_success( mu_soil_health_is_current_user_a_member() );
	}

}