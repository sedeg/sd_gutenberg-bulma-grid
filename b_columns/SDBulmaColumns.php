<?php

class SDBulmaColumns
{

	/**
	 * constructor.
	 */
	public function __construct()
	{
		$asset_file = include('build/index.asset.php');

		$frontendStylesPath = plugins_url('/build/style.css', __FILE__);
		wp_register_style(
			'sd-bulma-columns-fe',
			$frontendStylesPath,
			[]
		);

		$backendStylesPath = plugins_url('/build/editor.css', __FILE__);
		wp_register_style(
			'sd-bulma-columns-be',
			$backendStylesPath,
			['wp-edit-blocks']
		);

		wp_register_script(
			'sd-bulma-columns-js',
			plugins_url('/build/index.js', __FILE__),
			array_merge($asset_file['dependencies'], ['wp-api']),
			$asset_file['version']
		);


		register_block_type(
			'sd/bulma-columns',
			[
				'editor_style' => 'sd-bulma-columns-be',
				'editor_script' => 'sd-bulma-columns-js',
				'attributes' => [
					"isGapless" => [
						"type" => 'boolean',
						"default" => false
					],
					"gapSize" => [
						"type" => 'integer',
						"default" => 3
					],
					"colorBG" => [
						"type" => 'string',
						"default" => "transparent"
					],
					'alignment' =>
					[
						"type" => 'boolean',
						"default" => false
					],
				],
				'render_callback' => [$this, 'renderCallback']
			]
		);
	}

	public function renderCallback($attributes, $content)
	{
		wp_enqueue_style('sd-bulma-columns-fe');
		$classes = ['columns columns--nm'];
		$styles = [];


		$classes[] = ($attributes['isGapless']) ?  'is-gapless' : 'is-variable is-' . $attributes['gapSize'];
		$classes[] = ($attributes['alignment']) ?  'is-vcentered' : '';
		if ($attributes['colorBG'] != 'transparent')
			$styles[] = 'background-color:' . $attributes['colorBG'];

		ob_start();
		include __DIR__ . '/templates/sd-bulma-columns.php';
		return str_replace(["\r", "\n"], '', trim(ob_get_clean()));
	}
}
