$(function() {

    var box = $('.box-wrapper');

    box.on('click', function (event) {
        var el = $(this); //this is the element above
        if(el.hasClass('active')){ //click on click off
            el.removeClass('active');
        } else {
            el.addClass('active');
        0.

        }

    });

});
