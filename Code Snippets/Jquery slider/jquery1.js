(function($){
	$( document ).ready(function() {
		var $programsSlider = $('.programs-slider');
		var $programs = $programsSlider.find('.program');

		$programs.on('mouseenter', function(event) {
		    var $index = $programs.index(this) + 1;
		    $programsSlider.addClass('program' + $index);
		    $(event.currentTarget).find('.desaturated').hide();
		    $(event.currentTarget).find('.saturated').show();
		    $(event.currentTarget).find('#mytext').show();
		});

		$programs.on('mouseleave', function(event) {
		    var $index = $programs.index(this) + 1;
		    $programsSlider.removeClass('program' + $index);
		    $(event.currentTarget).find('.desaturated').show();
		    $(event.currentTarget).find('.saturated').hide();
		    $(event.currentTarget).find('#mytext').hide();
		});

		// saturation
		var $mywindow = $(window);
		$mywindow.on('resize.home', function() {
		    var $images = $('.bg img'),
		        $offset = parseInt($('.bg').outerWidth() - $images.outerWidth()) / 2,
		        $left = Math.min($offset, 0);

		    $images.css({
		        'left': $left
		    })
		}).trigger('resize.home');

	});

})(jQuery);

