let quality = 0;
let qualityResult = 0;
let length = 0;
let lengthResult = 0;
let rank = 0;
let rankResult = 0;
//Varovani, pokud je cena 0 nebo nizsi, finalni castka nejde do minusu
function varovani() {
  if (document.getElementById("finalValue").textContent <= 0) {
    document.getElementById("warning").textContent = "Pokud je video kratší než 5 minut, bude zveřejněno zdarma. Pokud je kvalita videa nižší než 540p, nebude v;bec schváleno.";
    document.getElementById("finalValue").textContent = "0"
  } else {
    document.getElementById("warning").textContent = " ";
  }}
//funkce pro vypocet ceny.
function qualityAndLengthResult() {
  document.getElementById("qualityValue").textContent = " - " + qualityResult;
  document.getElementById("lengthValue").textContent = " - " + lengthResult;
  document.getElementById("finalValue").textContent = 100 - qualityResult - lengthResult;
  varovani();
}
//funkce pro kliknuti na radek kvality = ridi barvy a vyvola vypocet
function qualityColor() {
for (let i = 1; i < 5; i++) {
  if (quality == i) {
  document.getElementById("quality"+i).style.backgroundColor = "#1b570f";
  } else {
    document.getElementById("quality"+i).style.backgroundColor = "#353535";
    qualityAndLengthResult();
    // document.getElementById("quality"+i).addEventListener("mouseover", function(){
    //   document.getElementById("quality"+i).style.backgroundColor = "#1b570f";
    //   });
    //   document.getElementById("quality"+i).addEventListener("mouseout", function() {
    //   document.getElementById("quality"+i).style.backgroundColor = "#353535";
    //   });
    // document.getElementById("qualityValue").textContent = " - " + qualityResult;
    // document.getElementById("finalValue").textContent = 100 - qualityResult - lengthResult;
  }}}
//funkce pro kliknuti na radek delky - ridi barvy a vyvola vypocet
function lengthColor() {
  for (let i = 1; i < 5; i++) {
    if (length == i) {
    document.getElementById("length"+i).style.backgroundColor = "#1b570f";
    } else {
      document.getElementById("length"+i).style.backgroundColor = "#353535";
      qualityAndLengthResult();
      // document.getElementById("length"+i).addEventListener("mouseover", function(){
      //   document.getElementById("length"+i).style.backgroundColor = "#1b570f";
      //   });
      //   document.getElementById("length"+i).addEventListener("mouseout", function() {
      //   document.getElementById("length"+i).style.backgroundColor = "#353535";
      //   });
    // document.getElementById("lengthValue").textContent = " - " + lengthResult;
    // document.getElementById("finalValue").textContent = 100 - qualityResult - lengthResult;
    }}}
//funkce pro kliknuti na radek hodnosti
function rankColor() {
  for (let i = 1; i < 5; i++) {
    if (rank == i) {
    document.getElementById("rank"+i).style.backgroundColor = "#1b570f";
    } else {
      document.getElementById("rank"+i).style.backgroundColor = "#353535";
      // document.getElementById("rank"+i).addEventListener("mouseover", function(){
      //   document.getElementById("rank"+i).style.backgroundColor = "#1b570f";
      //   });
      //   document.getElementById("rank"+i).addEventListener("mouseout", function() {
      //   document.getElementById("rank"+i).style.backgroundColor = "#353535";
      //   });
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
  qualityResult = 100;
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
  lengthResult = 100;
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


// if (quality == 1) {
//   document.querySelector("#quality1").style.backgroundColor = "#1b570f";
//   } else if (quality == 2) {
//     document.querySelector("#quality2").style.backgroundColor = "#1b570f";
//   }


//     $( '#quality1' ).css( "background-color", "#1b570f" );
//     $( '#quality2, #quality3, #quality4' ).css( "background-color", "#353535" );
// $( '#quality1' ).click(() => {
//     quality = 0;
//       $( '#quality1' ).css( "background-color", "#1b570f" );
//       $( '#quality2, #quality3, #quality4' ).css( "background-color", "#353535" );
      
// });
// $( '#quality2' ).click(() => {
//     quality = -10;
//       $( '#quality2' ).css( "background-color", "#1b570f" );
//       $( '#quality1, #quality3, #quality4' ).css( "background-color", "#353535" );
// });
// $( '#quality3' ).click(() => {
//     quality = -30;
//       $( '#quality3' ).css( "background-color", "#1b570f" );
//       $( '#quality1, #quality2, #quality4' ).css( "background-color", "#353535" );
// });
// $( '#quality4' ).click(() => {
//     quality = -100;
//       $( '#quality4' ).css( "background-color", "#1b570f" );
//       $( '#quality1, #quality2, #quality3' ).css( "background-color", "#353535" );
// });
//