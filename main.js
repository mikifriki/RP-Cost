
function convert(){
 var x = 0.0072
 var y = document.getElementById("rp").value;
 var z = x * y;
 z += '€';
 document.getElementById("awn").innerHTML = z;
}

function rndPick(){
var rnda = ['Battlecast Synda', 'Irelia Everywhere'];
var rand = rnda[Math.floor(Math.random()*rnda.length)];
document.getElementById("rndm").innerHTML = rand;
}