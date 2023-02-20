// step 1 chiedo variabile nome
// step 2 chiedo variabile cognome
// step 3 chiedo variabile colore preferito
// step 4 creo variabile password unendo le 3 variabili precedenti piu testo
// step 5 stampo la variabile dello step 4 nella console
// step 6 stampo la variabile dello step 4 in un div con id su html
// step 7 profit

"use strict";

// step 1

const userName = prompt ('inserisci nome');

// step 2

const userSecondName = prompt ('inserisci cognome');

// step 3

const userPrefColor = prompt ('inserisci colore preferito');

// step 4

const safePass = `${userName}${userSecondName}${userPrefColor}89`;

// step 5

console.log (safePass);

// step 6

document.getElementById('verySafePass').innerHTML = `${safePass}`