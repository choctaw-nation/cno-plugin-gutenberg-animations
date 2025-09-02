<?php
/**
 * Plugin Name: CNO Gutenberg Animations
 * Plugin URI: https://github.com/choctaw-nation/gutenberg-animations
 * Description: Adds some simple animations to the block editor.
 * Version: 0.1.0
 * Author: Choctaw Nation of Oklahoma
 * Author URI: https://www.choctawnation.com
 * Text Domain: cno
 * License: GPLv3 or later
 * License URI: https://www.gnu.org/licenses/gpl-3.0.html
 * Requires PHP: 8.2
 * Requires at least: 6.7.0
 * Tested up to: 6.8.2
 *
 * @package ChoctawNation
 * @subpackage Gutenberg_Animations
 */

use ChoctawNation\Gutenberg_Animations\Plugin_Loader;

if ( ! defined( 'ABSPATH' ) ) {
	die;
}

require_once __DIR__ . '/inc/class-plugin-loader.php';
$plugin_loader = new Plugin_Loader();

register_activation_hook( __FILE__, array( $plugin_loader, 'activate' ) );
register_deactivation_hook( __FILE__, array( $plugin_loader, 'deactivate' ) );
