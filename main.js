function convert(){
 var x = 0.0072
 var y = document.getElementById("rp").value;
 var z = x * y;
 z += '€';
 document.getElementById("awn").innerHTML = z;
}

function rands(){
    var array = ['Battlecast Synda', 'Irelia Everywhere'];
    var rand = array[Math.floor(Math.random() * array.length)];
    document.getElementById("rndm").innerHTML = rand;
}
window.onload = rands;

