/*

*Quali campi inserire nel form:
// Una casella di testo per il form del passeggero
// Una casella numerica per i km
Una tendina per selezionare la fascia d'età (Maggiorenne, Minorenne, Over65)
NON E' NECESSARIA ALCUNA VALIDAZIONE

*Come calcolare  il prezzo:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali,

*Cosa stampare sul biglietto:
Nome passeggero
Codice treno (inseriamo una stringa a caso, per ora)
Numero carrozza (randomizziamo una carrozza da 1 a 12)
Prezzo (stampato con due decimali)
Tariffa applicata all'utente (Tariffa minori, Tariffa ordinaria, Tariffa Over65)

*Per la parte grafica
Facciamola solo se tutto il resto della logica è funzionante, vi allego uno screen dell'esercizio fatto in classe senza stile e una da prendere come esempio per la parte visiva. Sentitevi liberi di personalizzare ulteriormente la grafica se vi va.

*Bonus
Nascondiamo la sezione del biglietto se non è ancora stato generato il biglietto stesso.
Aggiungiamo una funzione che ci permetta di resettare i campi del form ai valori originali.

*/


// ! Chiediamo il numero di chilometri che l'utente ha intenzione di percorrere

// var x = prompt("Quanti chilometri vuoi fare?");
var userKm = parseFloat(x);
console.log(userKm);


// ! Chiediamo l'età del passeggero
// var y = prompt("Quanti hanni hai?");
var userAge = parseFloat(y);
console.log(userAge)

// ! Calcoliamo il prezzo del biglietto (0.21€ al km)
var initialPrice = (0.21 * userKm);
console.log(initialPrice);

// ! Controlliamo l'età dell'utente
var discountedPrice;
var finalPrice;
// Se Minorenne
if (userAge < 18) {
    discountedPrice = initialPrice - (initialPrice * 0.2);
    // Se over 65
} else if (userAge >= 65) {
    discountedPrice = initialPrice - (initialPrice * 0.4);
} else if (userAge >= 18 && userAge < 65) {
    discountedPrice = initialPrice;
}

discountedPrice = discountedPrice.toFixed(2);

finalPrice = document.getElementById("price");
finalPrice.innerText = discountedPrice;
console.log(discountedPrice);