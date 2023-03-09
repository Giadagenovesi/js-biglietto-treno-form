// Scrivere un programma che chieda all’utente:
// - Il numero di chilometri da percorrere
// - Età del passeggero
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
// - il prezzo del biglietto è definito in base ai km (0.21 € al km)
// - va applicato uno sconto del 20% per i minorenni
// - va applicato uno sconto del 40% per gli over 65.


//INPUT E DICHIARAZIONE DEI DATI
const kmPrice = 0.21;

// Chiedere all'utente il numero di kilometri che vuole percorrere e la sua età

const sumbitBtn = document.getElementById("submit-btn");
sumbitBtn.addEventListener("click", function() {
    const result = document.getElementById("result");
    // Ripulire il result
    result.className = "";

    // Prendere il valore del input.
    const kmNumberInput = document.getElementById("km-number");
    const kmNumber = parseInt (kmNumberInput.value);

    const userAgeInput = document.getElementById("user-age");
    const userAge = userAgeInput.value;

    console.log(kmNumber, userAge);


    // Ripulisco i campi di input
    kmNumberInput.value = "";
    userAgeInput.value = "";
});