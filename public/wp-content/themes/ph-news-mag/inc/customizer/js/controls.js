jQuery(document).ready(function () {
	jQuery('.controls#phnewsmag-img-container li img').click(function () {
		jQuery('.controls#phnewsmag-img-container li').each(function () {
			jQuery(this).find('img').removeClass('phnewsmag-radio-img-selected');
		});
		jQuery(this).addClass('phnewsmag-radio-img-selected');
	});

});

