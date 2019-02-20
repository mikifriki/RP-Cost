
function convert(){
 var x = 0.0072
 var y = document.getElementById("rp").value;
 var z = x * y;
 z += '€';
 document.getElementById("awn").innerHTML = z;
}