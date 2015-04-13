$(function() {
    		$('button').on('click', function() {
        				$('.bulb').removeClass('on');
        				$('button').removeClass('on');


                var color = $(this).attr('data-color');
        				$("." + color).toggleClass('on');
        				$(this).addClass('on');




            });
});