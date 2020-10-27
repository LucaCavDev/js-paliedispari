function lancioDadiPari() {
  var numeroUser = Math.floor((Math.random() * 5) + 1);
  var numeroPC = Math.floor((Math.random() * 5) + 1);
  console.log(numeroUser);
  console.log(numeroPC);

  var somma = (numeroUser + numeroPC);
  document.getElementById('totale').innerHTML = somma;
  document.getElementById('numeroUser').innerHTML = numeroUser;
  document.getElementById('numeroPc').innerHTML = numeroPc;

  if (somma % 2 === 0){
    document.getElementById('esitoUser').innerHTML = 'hai vinto';
    document.getElementById('esitoPc').innerHTML = 'hai perso';
  } else {
    document.getElementById('esitoUser').innerHTML = 'hai perso';
    document.getElementById('esitoPc').innerHTML = 'hai vinto';
  }
};

function lancioDadiDispari() {
  var numeroUser = Math.floor((Math.random() * 5) + 1);
  var numeroPC = Math.floor((Math.random() * 5) + 1);
  console.log(numeroUser);
  console.log(numeroPC);
  var somma = (numeroUser + numeroPC);
  document.getElementById('totale').innerHTML = somma;
  document.getElementById('numeroUser').innerHTML = numeroUser;
  document.getElementById('numeroPc').innerHTML = numeroPc;


  if (somma % 2 != 0){
    document.getElementById('esitoUser').innerHTML = 'hai vinto';
    document.getElementById('esitoPc').innerHTML = 'hai perso';
  } else {
    document.getElementById('esitoUser').innerHTML = 'hai perso';
    document.getElementById('esitoPc').innerHTML = 'hai vinto';
  }



};



//









// function lancioDadi() {
//   var numeroUser = Math.floor((Math.random() * 5) + 1);
//   document.getElementById("esitoUser").innerHTML = numeroUser;
// }
//
// function lancioDadi() {
//   var numeroPC = Math.floor((Math.random() * 5) + 1);
//   document.getElementById("esitoPc").innerHTML = numeroPC;
// }
