/*

*Quali campi inserire nel form:
// Una casella di testo per il form del passeggero
// Una casella numerica per i km
// Una tendina per selezionare la fascia d'età (Maggiorenne, Minorenne, Over65)
NON E' NECESSARIA ALCUNA VALIDAZIONE

*Come calcolare  il prezzo:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali)

*Cosa stampare sul biglietto:
// Nome passeggero
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


// ?FORM
var nameField = document.getElementById("full-name");
var kmsField = document.getElementById("kms");
var ageField = document.getElementById("age");
var generate = document.getElementById("generate");
var reset = document.getElementById("reset");


// ?ELEMENTS
var userNameElement = document.getElementById("user-name");
var discountElement = document.getElementById("discount");
var carElement = document.getElementById("car");
var codeCPElement = document.getElementById("code-cp");
var ticketPriceElement = document.getElementById("ticket-price");

// ?TICKET-PRICE
var discountedPrice = 0;
var finalPrice = 0;
var tariffa = "";

// ?CLICK
generate.addEventListener('click',
    function () {
        var nameValue = nameField.value;
        var ageValue = ageField.value;
        var kmsValue = kmsField.value;
        var initialPrice = (0.21 * kmsValue);

        if (ageValue == "Minorenne") {
            discountedPrice = initialPrice - (initialPrice * 0.2);
            tariffa = "Tariffa Minorenne";

        } else if (ageValue == "Over-65") {
            discountedPrice = initialPrice - (initialPrice * 0.4);
            tariffa = "Tariffa Over-65";
        } else {
            discountedPrice = initialPrice;
            tariffa = "Tariffa Ordinaria";
        }

        discountedPrice = discountedPrice.toFixed(2);
        userNameElement.innerHTML = nameValue;
        discountElement.innerText = tariffa;
        carElement.innerHTML = Math.floor(Math.random() * 12) + 1;
        codeCPElement.innerText = "95876";
        ticketPriceElement.innerHTML = discountedPrice;
    });


