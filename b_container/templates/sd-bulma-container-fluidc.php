<section class="container is-fluid <?php echo implode(' ', $classesFluidC); ?>" style="<?php echo implode(';', $styles); ?>">
	<?php echo locate_template(include __DIR__ . '/partials/content.php'); ?>
	<?php echo $bgContainer; ?>
</section>