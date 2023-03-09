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
    // Resettare il risultato
    result.className = "";

    // Prendere il valore degli input.
    const kmNumberInput = document.getElementById("km-number");
    const kmNumber = parseInt (kmNumberInput.value);

    const userAgeInput = document.getElementById("user-age");
    const userAge = parseInt (userAgeInput.value);

    console.log(kmNumber, userAge);

    //LOGICA
    //Prezzo biglietto

    const basePrice = kmPrice * kmNumber;
    console.log(basePrice);

    let ticketPrice = basePrice;
    if (userAge < 18) {
        ticketPrice = basePrice - (basePrice * 20 / 100);
    } else if (userAge >= 65) {
        ticketPrice = basePrice - (basePrice * 40 / 100)
    }
    console.log(ticketPrice);

    const message = "Il prezzo del tuo biglietto è di €" + ticketPrice.toFixed (2)
    console.log (message)

    // Ripulisco i campi di input
    kmNumberInput.value = "";
    userAgeInput.value = "";

    // OUTPUT
    document.getElementById('result').innerHTML = message;
});
    


   