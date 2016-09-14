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
 * Create all six advocacy target icons with links to the taxonomy archive
 *
 * @since   1.0.0
 * @param   string $section used to incorporate correct section in link
 * @param   int $columns  number of columns to arrange icons in
 * @param   int $icon_size Size of icons to use, in px. Will be converted to 30, 60 or 90.
 * @return  html used to show icons
 */
function cc_mu_soil_health_mlra_map_shortcode( $atts ) {
    // $a = shortcode_atts( array(
    //     'section' => 'changes',
    //     'columns' => 3,
    //     'icon_size' => 90
    //     ), $atts );
    ob_start();
    mlra_map_output();
    return ob_get_clean();
}
add_shortcode( 'mlra_map', 'cc_mu_soil_health_mlra_map_shortcode' );