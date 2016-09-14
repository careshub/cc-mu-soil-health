<?php
/**
 * Extras for the MU_Soil_Health hub.
 *
 * @package   CCMUSoilHealth
 * @author    Chris Barnett
 * @license   GPL-2.0+
 * @link      http://www.communitycommons.org
 * @copyright 2016 Community Commons
 *
 * @wordpress-plugin
 * Plugin Name:       CC MU Soil Health Hub Extras
 * Plugin URI:        @TODO
 * Description:       Adds custom hub functionality to CC site
 * Version:           1.0.0
 * Author:            Chris Barnett
 * Text Domain:       cc-mu-soil-health
 * License:           GPL-2.0+
 * License URI:       http://www.gnu.org/licenses/gpl-2.0.txt
 * GitHub Plugin URI: https://github.com/careshub/mu-soil-health
 */

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

/*----------------------------------------------------------------------------*
 * Public-Facing Functionality
 *----------------------------------------------------------------------------*/

function mu_soil_health_class_init() {

	// Helper functions
	require_once( plugin_dir_path( __FILE__ ) . 'includes/mu-soil-health-functions.php' );

	// Template output functions
	require_once( plugin_dir_path( __FILE__ ) . 'public/views/template-tags.php' );
	require_once( plugin_dir_path( __FILE__ ) . 'public/views/shortcodes.php' );

	// The main class
	require_once( plugin_dir_path( __FILE__ ) . 'public/class-mu-soil-health-public.php' );
	CC_MU_Soil_Health_Public::get_instance();

	// Admin and dashboard functionality
	if ( is_admin() && ( ! defined( 'DOING_AJAX' ) || ! DOING_AJAX ) ) {
		require_once( plugin_dir_path( __FILE__ ) . 'admin/class-mu-soil-health-admin.php' );
		CC_MU_Soil_Health_Admin::get_instance();
	}

}
add_action( 'bp_include', 'mu_soil_health_class_init' );

/*
 * Register hooks that are fired when the plugin is activated or deactivated.
 * When the plugin is deleted, the uninstall.php file is loaded.
 *
 */
require_once plugin_dir_path( __FILE__ ) . 'includes/class-mu-soil-health-activator.php';
register_activation_hook( __FILE__, array( 'CC_MU_Soil_Health_Activator', 'activate' ) );
register_deactivation_hook( __FILE__, array( 'CC_MU_Soil_Health_Activator', 'deactivate' ) );

/*
 * Helper function.
 * @return Fully-qualified URI to the root of the plugin.
 */
function mu_soil_health_get_plugin_base_uri(){
	return plugin_dir_url( __FILE__ );
}

/*
 * Helper function.
 * @TODO: Update this when you update the plugin's version above.
 *
 * @return string Current version of plugin.
 */
function mu_soil_health_get_plugin_version(){
	return '1.0.0';
}