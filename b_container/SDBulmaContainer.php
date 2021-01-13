<?php

class SDBulmaContainer
{

	/**
	 * constructor.
	 */
	public function __construct()
	{
		$asset_file = include('build/index.asset.php');

		$frontendStylesPath = plugins_url('/build/style.css', __FILE__);
		wp_register_style(
			'sd-bulma-container-fe',
			$frontendStylesPath,
			[]
		);

		$backendStylesPath = plugins_url('/build/editor.css', __FILE__);
		wp_register_style(
			'sd-bulma-container-be',
			$backendStylesPath,
			['wp-edit-blocks']
		);

		wp_register_script(
			'sd-bulma-container-js',
			plugins_url('/build/index.js', __FILE__),
			array_merge($asset_file['dependencies'], ['wp-api']),
			$asset_file['version']
		);


		register_block_type(
			'sd/bulma-container',
			[
				'editor_style' => 'sd-bulma-container-be',
				'editor_script' => 'sd-bulma-container-js',
				'attributes' => [
					'width' => [
						'type' => 'string',
						'default' => 'default'
					],
					'colorBG' => [
						'type' => 'string',
						'default' => 'transparent'
					],
					'removePadding' => [
						'type' => 'boolean',
						'default' => true
					],
					'minHeight' => [
						'type' => 'string',
						'default' => 'auto'
					],
					'backgroundImage' =>
					[
						"type" => 'object',
						"default" => []
					],
				],
				'render_callback' => [$this, 'renderCallback']
			]
		);
	}

	public function renderCallback($attributes, $content)
	{
		wp_enqueue_style('sd-bulma-container-fe');

		$classesFluidC = [];
		$styles = [];
		$bgContainer = (!empty($attributes['backgroundImage']['sizes']['full']['url'])) ? '<div class="container--bg" style="background-image:url(' . $attributes['backgroundImage']['sizes']['full']['url'] . ');"></div>' : '';

		switch ($attributes['width']) {
			case 'fluid':
				$template = '/templates/sd-bulma-container-fluid.php';
				break;
			case 'fluidc':
				$template = '/templates/sd-bulma-container-fluidc.php';
				break;
			default:
				$template = '/templates/sd-bulma-container.php';
				break;
		}

		if ($attributes['removePadding'])
			$classesFluidC[] = 'no-padding';

		if ($attributes['colorBG'] != 'transparent')
			$styles[] = 'background-color:' . $attributes['colorBG'];

		if ($attributes['minHeight'] != "auto")
			$styles[] = 'min-height:' . $attributes['minHeight'];

		ob_start();
		include __DIR__ . $template;
		return str_replace(['\r', '\n'], '', trim(ob_get_clean()));
	}
}
