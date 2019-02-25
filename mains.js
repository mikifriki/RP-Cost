function rndPick(){
    var rnda = ['Battlecast Synda', 'Irelia Everywhere'];
    var rand = rnd[Math.floor(Math.random() * rnda.length)];
    document.getElementById("rndm").innerHTML = rand;
    }