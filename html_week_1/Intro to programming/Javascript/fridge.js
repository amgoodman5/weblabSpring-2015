/**
 * Created by AaronG on 3/30/2015.
 */
var fridge= {
        opened:false,
    top: [],
    bottom: [],
    middle: [],
    door: [],

},
    open: function(){
    if(!this.opened)this.opened=true;

},
    close: function(){
        if(this.opened)this.opened=false;
  }
    put: function(shelf,item){
        if(!this.opened)return console.log('door needs to be open');

}
