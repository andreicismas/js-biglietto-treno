
// km cliente
var numberKm = parseInt(prompt("Quanti Chilometri Vuolete Percorrere"));
console.log ("vuole percorrere" ," ", + numberKm ,"km");


// price km kids
var priceKm = 0.21 ;
var kidsPrice =  (priceKm * 20 / 100);
var totalKidsPrice = kidsPrice * numberKm;

console.log ("prezzo per Km",priceKm);
console.log ("prezzo per minorenni sconto del 20% al km =",kidsPrice , "€");
console.log ("prezzo totale km per minorenni ",totalKidsPrice, "€");



// var totalOver_65 = over_65 + priceKm;
var over65 =  (priceKm * 40 / 100);
var totalOver_65 =( over65 * numberKm);

console.log ("prezzo per Km",priceKm);
console.log ("prezzo per over 65 sconto del 40% al km =",over65 );
console.log ("prezzo totale km per over 65 ",over65, "€");