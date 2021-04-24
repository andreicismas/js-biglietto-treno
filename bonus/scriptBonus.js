alert("CIAO! Calcoliamo  il tuo biglietto?");


//chiedi al utente quani km vuole percorere quanti km vuoi percorrere
var passengerKm = parseInt(prompt("quanti km vuoi percorere"));
if (Number.isNaN(passengerKm) || passengerKm === "") {
    alert("Devi inserire dei numeri ");
} else {
    // devi inserire la tua eta
    var passengerEge = parseInt(prompt("Quanti anni hai?"));

    if ((Number.isNaN(passengerEge) || passengerEge === "")) {
        alert("Hai sbagliato inserire l'eta (prova dei nr)");
    } else {
        console.log("lutente vuole percorrere" + " " + passengerKm + " " + "e ha l'eta di " + passengerEge + " " + "anni ");
    }

}

// dobbiamo calcolare il costo del biglietto in base alle condizioni e costi

//  il biglietto costa 0.21 cc al km 
var ticketPrice = 0.21 * passengerKm

// discount 40 % sul prezzo totale
var over65 = ticketPrice * 60 / 100;

// discount 40 % sul prezzo totale
var kids = ticketPrice * 80 / 100;

// condizioni discount
if ((passengerEge < 18) && (passengerEge >= 1)) {
    // si deve aplicare uno sconto del 20% ai minorenni
    console.log("20% discount" + kids.toFixed(2));
    document.getElementById("real_cost").innerHTML = "Sei minorennee e pagi" + " " + ticketPrice.toFixed(2) + " " + "€ con 20% di sconto  per " + " " + passengerKm + " " + "km"
} else if (passengerEge > 65) {
    // si deve aplicare uno sconto del 40% ai over 65
    console.log("40% discount" + over65.toFixed(2));
    document.getElementById("real_cost").innerHTML = "Sei over65 e pagi" + " " + ticketPrice.toFixed(2) + " " + "€ con 40% di sconto  per " + " " + passengerKm + " " + "km"
} else {
    console.log("prezzo intero " + ticketPrice.toFixed(2));
    document.getElementById("real_cost").innerHTML = "Sei maggiorenne e pagi" + " " + ticketPrice.toFixed(2) + " " + "€  per " + " " + passengerKm + " " + "km"

}

// dobbiamo usate il metodo (Fixed()togli i decimali e mi lascia quanti decido io  .che io lo cercato si w3school)










