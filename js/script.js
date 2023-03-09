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

    const userNameInput = document.getElementById("user-name");
    const userName = userNameInput.value;

    const cabinNumber = Math.floor(Math.random() * 9) + 1;
    console.log(cabinNumber);

    const codeNumber = Math.floor(Math.random() * (9000 - 1000 + 1)) + 1000;
    console.log(codeNumber);
    

    console.log(kmNumber, userAge, userName);

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

    const name = "Benvenuto/a a bordo " + userName;
    console.log(name)

    const cabin = "La tua cabina è la numero " + cabinNumber;
    console.log(cabin)

    const code = "Codice biglietto: " + codeNumber;
    console.log(code)

    // Ripulisco i campi di input
    kmNumberInput.value = "";
    userAgeInput.value = "";

    // OUTPUT
    document.getElementById('result').innerHTML = message;
    document.getElementById('passenger').innerHTML = name;
    document.getElementById('cabin-number').innerHTML = cabin;
    document.getElementById('code').innerHTML = codeNumber;



});
    


   