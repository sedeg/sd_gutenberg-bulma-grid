<?php

class SDBulmaColumn
{

	/**
	 * constructor.
	 */
	public function __construct()
	{
		$asset_file = include('build/index.asset.php');

		$frontendStylesPath = plugins_url('/build/style.css', __FILE__);
		wp_register_style(
			'sd-bulma-column-fe',
			$frontendStylesPath,
			[]
		);

		$backendStylesPath = plugins_url('/build/editor.css', __FILE__);
		wp_register_style(
			'sd-bulma-column-be',
			$backendStylesPath,
			['wp-edit-blocks']
		);

		wp_register_script(
			'sd-bulma-column-js',
			plugins_url('/build/index.js', __FILE__),
			array_merge($asset_file['dependencies'], ['wp-api']),
			$asset_file['version']
		);


		register_block_type(
			'sd/bulma-column',
			[
				'editor_style' => 'sd-bulma-column-be',
				'editor_script' => 'sd-bulma-column-js',
				'attributes' => [
					"editFullHD" => [
						"type" => 'boolean',
						"default" => false
					],
					"widthFullHD" => [
						"type" => 'integer',
						"default" => 6
					],
					"editWidescreen" => [
						"type" => 'boolean',
						"default" => false
					],
					"widthWidescreen" => [
						"type" => 'integer',
						"default" => 6
					],
					"editDesktop" => [
						"type" => 'boolean',
						"default" => false
					],
					"widthDesktop" => [
						"type" => 'integer',
						"default" => 6
					],
					"editTablet" => [
						"type" => 'boolean',
						"default" => false
					],
					"widthTablet" => [
						"type" => 'integer',
						"default" => 6
					],
					"editMobile" => [
						"type" => 'boolean',
						"default" => false
					],
					"widthMobile" => [
						"type" => 'integer',
						"default" => 12
					],
					"colorBG" => [
						"type" => 'string',
						"default" => "transparent"
					],
				],
				'render_callback' => [$this, 'renderCallback']
			]
		);
	}

	public function renderCallback($attributes, $content)
	{
		wp_enqueue_style('sd-bulma-column-fe');
		$classes = ['column'];
		$styles = [];

		if ($attributes['editMobile'])
			$classes[] = 'is-' . $attributes['widthMobile'] . '-mobile';
		if ($attributes['editTablet'])
			$classes[] = 'is-' . $attributes['widthTablet'] . '-tablet';
		if ($attributes['editDesktop'])
			$classes[] = 'is-' . $attributes['widthDesktop'] . '-desktop';
		if ($attributes['editWidescreen'])
			$classes[] = 'is-' . $attributes['widthWidescreen'] . '-widescreen';
		if ($attributes['editFullHD'])
			$classes[] = 'is-' . $attributes['widthFullHD'] . '-fullhd';
		if ($attributes['colorBG'] != 'transparent')
			$styles[] = 'background-color:' . $attributes['colorBG'];

		ob_start();
		include __DIR__ . '/templates/sd-bulma-column.php';
		return str_replace(["\r", "\n"], '', trim(ob_get_clean()));
	}
}
