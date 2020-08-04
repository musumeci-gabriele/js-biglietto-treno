// INSERIMENTO ETA'
var eta = prompt("Quanti anni hai ?");

// INSERIMENTO KM
var km = prompt("Quanti km vuoi percorrere ?");

// PREZZO BIGLIETTO 0,21 CEN / KM
var prezzo = (km * 0.21);

// SCONTO
if (eta<18){
  var prezzoMin = (prezzo - ((prezzo / 100)* 20));
  document.getElementById("prezzo-bit").innerHTML = prezzoMin;

}
else if (eta>65){
  var prezzoOver = (prezzo - ((prezzo / 100)* 40));
  document.getElementById("prezzo-bit").innerHTML = prezzoOver;

}
else {
  document.getElementById("prezzo-bit").innerHTML = prezzo;

}
