<section class="container is-fluid" style="<?php echo implode(';', $styles); ?>">
	<div class="container">
		<?php echo locate_template(include __DIR__ . '/partials/content.php'); ?>
	</div>
	<?php echo $bgContainer;?>
</section>