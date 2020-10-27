// Palidroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma



// 1-step. chiedo all'utente una parola
var parola = prompt("Inserisci una parola, scopriamo se è palindroma!");

console.log(parola);


//2-step. costruisco una funzione per trovare il reverse della parola inserita.
function ReverseString(parola) {

    // controllo che l'input sia valido, ovvero con 2 o piu lettere
    if(!parola || parola.length < 2 ||
            typeof parola!== 'string') {
        return 'Not valid';
    }

    // uso un array
    const revArray = [];
    const lunga = parola.length - 1;

    // si fa un loop
    for(let i = lunga; i >= 0; i--) {
        revArray.push(parola[i]);
    }

    // unisco gli elementi nell'array
    return revArray.join('');
}

// stapo la parola inserita e quella reversed
document.getElementById('parolaInserita').innerHTML = parola;
document.getElementById('parolaReversed').innerHTML = ReverseString(parola);

// se sono uguali tra loro viene stampato un messaggio, se no un altro
if (ReverseString(parola) == parola) {
  document.getElementById('risultato').innerHTML = 'La parola che hai inserito è un palindromo, complimenti!';
}
else {
  document.getElementById('risultato').innerHTML = 'Mi di spiace, ritenta e sarai più fortunato';
}
//
//
