$(document).ready(function(){
	$('#toggle_options').click(function(){
		$('section.options').toggleClass("open");
	});

	var find_it_position = $('#find_it').offset().top;
	if (($(window).scrollTop() + $(window).height()) < find_it_position) {
		$('section.options').addClass('sticky');
	} else {
		$('section.options').removeClass('sticky');
	}
	
	$(window).on('resize', function(){
		var find_it_position = $('#find_it').offset().top;
		if (($(window).scrollTop() + $(window).height()) < find_it_position) {
			$('section.options').addClass('sticky');
		} else {
			$('section.options').removeClass('sticky');
		}
	});

	$(window).scroll(function(){
		if (($(window).scrollTop() + $(window).height()) > find_it_position) {
			$('section.options').removeClass('sticky');
		} else {
			$('section.options').addClass('sticky');
		}
	});

});