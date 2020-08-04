// INSERIMENTO ETA'
var eta = prompt("Quanti anni hai ?");
console.log(eta);

// INSERIMENTO KM
var km = prompt("Quanti km vuoi percorrere ?");
console.log(km);

// PREZZO BIGLIETTO 0,21 CEN / KM
var prezzo = (km * 0,21);
console.log(prezzo);
// SCONTO
if (eta<18){
  var prezzoMin = parseInt(prezzo - ((prezzo / 100)* 20));
  document.getElementById("prezzo-bit").innerHTML = prezzoMin;
  console.log(prezzoMin);
}
else if (eta>65){
  var prezzoOver = parseInt(prezzo - ((prezzo / 100)* 40));
  document.getElementById("prezzo-bit").innerHTML = prezzoOver;
  console.log(prezzoOver);
}
else {
  document.getElementById("prezzo-bit").innerHTML = prezzo;
  console.log(prezzo);
}
