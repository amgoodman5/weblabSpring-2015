/**
 * Created by AaronG on 3/25/2015.
 */

var hole={
    A:1, B:2, C:0, D:1, E:0, F:0, G:0, H:0, I:0, J:0, K:0, L:0, M:0, N:0, O:1, P:1, Q:1, R:1, S:0, T:0, U:0, V:0, W:0, X:0, Y:0, Z:0, //uppercase
    a:1, b:1, c:0, d:1, e:1, f:0, g:1, h:0, i:0, j:0, k:0, l:0, m:0, n:0, o:1, p:1, q:1, r:0, s:0, t:0, u:0, v:0, w:0, x:0, y:0, z:0, //lowercase
};
var word ="aAR"; //* a word that is a string that Ill test for holes.

//*start of function
function countHole(str) {

    var total = 0;
    var lettersArray = str.split('');
      //array

    lettersArray.forEach(
        function (ltr) {
            total += hole[ltr] || 0;


            //defined "hole" as an object with properties

        })

    return total;
}
//document.write(countHoles(word));

console.log(countHole('Aaron'));