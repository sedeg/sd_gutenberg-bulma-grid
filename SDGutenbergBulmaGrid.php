<?php
defined('ABSPATH') or die('No script kiddies please!');

/**
 * Plugin Name: SD Gutenberg Bulma Grid
 * Description: With this plugin you can use bulmas gridsystem to create fully customized templates. When enabled, it adds three new blocks (container, columns and column) to the Gutenberg editor.
 * Version: 1.0.0
 * Author: Sebastian Degner 
 */
class SDGutenbergBulmaGrid
{

	const BLOCK_TITLE = "SD Bulma Grid";
	const BLOCK_SLUG = "sd-gutenberg-bulma-grid";

	public function __construct()
	{
		define('SD_GUTENBERG_BULMA_GRID_BLOCKS_PATH', plugin_dir_path(__FILE__));
		add_action('init', [$this, 'initBlocks'], 10, 2);
		// add_action('wp_enqueue_scripts', [$this, 'enqueueStylesAndScripts'], 10, 2);
		// add_action('admin_enqueue_scripts', [$this, 'enqueueStylesAndScriptsBe'], 10, 2);

		add_filter('block_categories', function ($categories, $post) {
			return array_merge(
				$categories,
				array(
					array(
						'slug'  => self::BLOCK_SLUG,
						'title' => self::BLOCK_TITLE,
						'icon' => "screenoptions"
					),
				)
			);
		}, 10, 2);

		add_theme_support('editor-color-palette', []);
		add_theme_support('editor-font-sizes', []);
		add_theme_support('__experimental-editor-gradient-presets', []);
		add_theme_support('__experimental-disable-custom-gradients');
	}

	public function initBlocks()
	{
		require_once __DIR__ . '/b_container/SDBulmaContainer.php';
		require_once __DIR__ . '/b_columns/SDBulmaColumns.php';
		require_once __DIR__ . '/b_column/SDBulmaColumn.php';

		new SDBulmaContainer;
		new SDBulmaColumns;
		new SDBulmaColumn;
	}

	/**
	 * Enqueue Scripts and Styles
	 */
	public function enqueueStylesAndScripts()
	{
		wp_register_style('styles_fe', plugins_url('/styles/frontend/styles.css', __FILE__));
		wp_enqueue_style('styles_fe');
	}

	/**
	 * Enqueue Scripts and Styles Backend
	 */
	public function enqueueStylesAndScriptsBe()
	{
		wp_register_style('styles_be', plugins_url('/styles/backend/styles.css', __FILE__));
		wp_enqueue_style('styles_be');
	}
}

/**
 * Init Plugin
 */
new SDGutenbergBulmaGrid();
