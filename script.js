let quality = 0;
let qualityResult = 0;
let length = 0;
let lengthResult = 0;
let rank = 0;
let rankResult = 85;
let warningQuality = " Pokud je kvalita videa nižší než 540p, nebude vůbec schváleno. ";
let warningLength = " Pokud je video kratší než 5 minut, bude zveřejněno zdarma. ";
let maxPrice = 100;
let calculatePrice = maxPrice;
let calculatePoints = 0;
document.getElementById("pointsValue").textContent = rankResult + " %";
document.getElementById("finalValue").textContent = maxPrice + " = " + maxPrice + ",- Kč";

//Varovani, pokud je cena 0 nebo nizsi, finalni castka nejde do minusu
function warning() {
  if ((calculatePrice) <= 0 && quality == 4 && length == 4) {
    calculatePrice = 0;
    document.getElementById("warning").textContent = warningQuality + warningLength;
    document.getElementById("finalValue").textContent = maxPrice + " - " + maxPrice + " = 0,- Kč";
  } else if ((calculatePrice) <= 0 && quality == 4) {
    calculatePrice = 0;
    document.getElementById("warning").textContent = warningQuality;
    document.getElementById("finalValue").textContent = maxPrice + " - " + maxPrice + " = 0,- Kč";
  } else if ((calculatePrice) <= 0 && length == 4) {
    calculatePrice = 0;
    document.getElementById("warning").textContent = warningLength;
    document.getElementById("finalValue").textContent = maxPrice + " - " + maxPrice + " = 0,- Kč";
  } else {
    document.getElementById("warning").textContent = " ";
  }}


  //funkce pro vypocet ceny.
function qualityAndLengthResult() {
  calculatePrice = maxPrice - qualityResult - lengthResult;
  document.getElementById("finalValue").textContent = maxPrice + " - " + qualityResult + " - " + lengthResult + " = " + (calculatePrice) + ",- Kč";
  warning();
  pointsResult();
}

function pointsResult() {
  calculatePoints = calculatePrice / 100 * rankResult;
  document.getElementById("pointsValue").textContent = rankResult + " % ze " + calculatePrice + " = " + (calculatePoints).toFixed(2) + "bodů";
  
}


//funkce pro kliknuti na radek kvality = ridi barvy a vyvola vypocet
function qualityColor() {
for (let i = 1; i < 5; i++) {
  if (quality == i) {
  document.getElementById("quality"+i).style.backgroundColor = "#1b570f";
  } else {
    document.getElementById("quality"+i).style.backgroundColor = "#353535";
    qualityAndLengthResult();
  }}}


  //funkce pro kliknuti na radek delky - ridi barvy a vyvola vypocet
function lengthColor() {
  for (let i = 1; i < 5; i++) {
    if (length == i) {
    document.getElementById("length"+i).style.backgroundColor = "#1b570f";
    } else {
      document.getElementById("length"+i).style.backgroundColor = "#353535";
      qualityAndLengthResult();
    }}}


    //funkce pro kliknuti na radek hodnosti - spusti vypocet ceny, botom bodů.
function rankColor() {
  for (let i = 1; i < 5; i++) {
    if (rank == i) {
    document.getElementById("rank"+i).style.backgroundColor = "#1b570f";
    } else {
      document.getElementById("rank"+i).style.backgroundColor = "#353535";
      qualityAndLengthResult();
      pointsResult();
    }}}      


    //Klikani radek s kvalitou
document.getElementById("quality1").addEventListener("click",function () {
  quality = 1;
  qualityResult = 0;
  qualityColor()
})
document.getElementById("quality2").addEventListener("click",function () {
  quality = 2;
  qualityResult = 10;
  qualityColor()
})
document.getElementById("quality3").addEventListener("click",function () {
  quality = 3;
  qualityResult = 40;
  qualityColor()
})
document.getElementById("quality4").addEventListener("click",function () {
  quality = 4;
  qualityResult = maxPrice;
  qualityColor()
})


//Klikani radek s delkou
document.getElementById("length1").addEventListener("click",function () {
  length = 1;
  lengthResult = 0;
  lengthColor()
})
document.getElementById("length2").addEventListener("click",function () {
  length = 2;
  lengthResult = 10;
  lengthColor()
})
document.getElementById("length3").addEventListener("click",function () {
  length = 3;
  lengthResult = 30;
  lengthColor()
})
document.getElementById("length4").addEventListener("click",function () {
  length = 4;
  lengthResult = maxPrice;
  lengthColor()
})


//Klikani radek s hodnosti
document.getElementById("rank1").addEventListener("click",function () {
  rank = 1;
  rankResult = 85;
  rankColor()
})
document.getElementById("rank2").addEventListener("click",function () {
  rank = 2;
  rankResult = 75;
  rankColor()
})
document.getElementById("rank3").addEventListener("click",function () {
  rank = 3;
  rankResult = 65;
  rankColor()
})
document.getElementById("rank4").addEventListener("click",function () {
  rank = 4;
  rankResult = 50;
  rankColor()
})
