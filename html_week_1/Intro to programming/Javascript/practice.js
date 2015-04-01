/**
 * Created by AaronG on 3/30/2015.
 */
//function pad
var padded_string = pad(20,40,".");
console.log(padded_string, padded_string.length);

function pad(num, width, character){
    var paddedValue='';
    var  str = num.toString();
    var charactersToAdd = width - str.length;
    var characters= characters || ". ";
   for(var i = 0; i <charactersToAdd; i++){

    //while(charactersToAdd--){
        paddedValue += ' ';
       paddedValue= paddedValue + "." +
       " ";
    }


    return paddedValue + str;



}