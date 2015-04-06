
$(function(){
    var box = $('#specials,#LunchSpecials');
    box.on('mouseenter', function(){
        box
            .stop(true)
            .animate({
                backgroundColor: 'green'
                , width: 862
                , height: 500
            }, 1500);
    });
    box.on('mouseleave', function(){
        box
            .stop(true)
            .animate({
                backgroundColor: 'red'
                , width:  139
                , height: 200
            }, 1500);
    });
});



