/**
 * Created by AaronG on 3/26/2015.
 */
**
* Created by AaronG on 3/24/2015.
*/

$(function())


var input =$('#guess')
    ,button=$('guess-btn')
    ,status = $('#guesses')
    ,reset= $('reset')
var guesses= 0;
var aNumber = getRandom();
reset.on('click', function(){
    guesses=0;
    aNumber =getRandom();
    input.val("");
    status.empty();

}

btn.on('click', function(){
    var value= parseInt input.val();
    guesses+=1;
    if(value=== aNumber) {
        //game over
    }else if(value > aNumber){
        tellUser(value,"high");
        //too high
    }else
        tellUser(value,"Low");{
        //too low
    }
};function tellUser(val, str, text){
    var li=S('<li class="list-group-item"/>'):
    var response = "<b>"+ val + "</b> is too<b>"+str + "</b>";

}



function getRandom(){
    return Math.floor(math.random);
}


