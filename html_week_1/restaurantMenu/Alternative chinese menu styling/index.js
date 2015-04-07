/**
 * Created by AaronG on 4/2/2015.
 */

$(document).ready(function() {
    $('#specials').mouseenter(function () {
        $(this).fadeTo('fast', 1);
    });
    $('specials').mouseleave(function() {
        $(this).fadeTo('fast', 1);

    });
});








//$(function(){

    var box1 = $('#specials');
    var box2 = $('#LunchSpecials');

    attachEvents(box1, 1500);
    attachEvents(box2, 500);

    function attachEvents(box, speed){

        box.on('mouseenter', function(){
            box
                .stop(true)
                .animate({
                    backgroundColor: 'green'
                    , width: 862
                    , height: 500
                }, speed);
        });
        box.on('mouseleave', function(){
            box
                .stop(true)
                .animate({
                    backgroundColor: 'red'
                    , width:  139
                    , height: 200
                }, speed);
            });

    }

});



