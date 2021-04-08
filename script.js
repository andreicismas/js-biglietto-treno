// km cliente
var numberKm = parseInt(prompt("Quanti Chilometri Vuolete Percorrere?"));
console.log ("vuole percorrere" ," ", + numberKm ,"km");

// age client
var yourAge = parseInt(prompt("la tua eta?"))
console.log ("eta" ," ", + yourAge ,"");


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

if(Number.isNaN(numberKm) || Number.isNaN(yourAge)){
   document.getElementById("real_cost").innerHTML= "I valori inseriti non corretti";
}else if (numberKm === 0 || yourAge === 0 ){
    document.getElementById("real_cost").innerHTML= "I valori inseriti non corretti";
}else{
    if(yourAge < 18){
        document.getElementById("real_cost").innerHTML="il tuo prezzo e " + totalKidsPrice.toFixed(2) + " "+ "€ con 20% di sconto"
    }else if (yourAge > 18){
        document.getElementById("real_cost").innerHTML="il tuo prezzo e " + totalOver_65.toFixed(2) + " "+ "€ con 40% di sconto"
    }
}