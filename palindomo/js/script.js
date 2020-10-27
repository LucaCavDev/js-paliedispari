// Palidroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma



// 1-step. chiedo all'utente una parola
var parola = prompt("Inserisci una parola, scopriamo se è palindroma!");

console.log(parola);


//2-step. costruisco una funzione per trovare il reverse della parola inserita.
function ReverseString(parola) {

    // Check input
    if(!parola || parola.length < 2 ||
            typeof parola!== 'string') {
        return 'Not valid';
    }

    // Take empty array revArray
    const revArray = [];
    const length = parola.length - 1;

    // Looping from the end
    for(let i = length; i >= 0; i--) {
        revArray.push(parola[i]);
    }

    // Joining the array elements
    return revArray.join('');
}

// document.write(ReverseString(parola));
document.getElementById('parolaInserita').innerHTML = parola;
document.getElementById('parolaReversed').innerHTML = ReverseString(parola);


if (ReverseString(parola) == parola) {
  document.getElementById('risultato').innerHTML = 'La parola che hai inserito è un palindromo, complimenti!';
}
else {
  document.getElementById('risultato').innerHTML = 'Mi di spiace, ritenta e sarai più fortunato';
}
//
//
