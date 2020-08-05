// INSERIMENTO ETA'
var eta = prompt("Quanti anni hai ?");

// CONTROLLO INSERIMENTO
if (isNaN(eta)) {
  alert("Inserisci un numero !")
  var eta = prompt("Quanti anni hai ?");
}

// INSERIMENTO KM
var km = prompt("Quanti km vuoi percorrere ?");

// CONTROLLO INSERIMENTO
if (isNaN(km)) {
  alert("Inserisci un numero !")
  var eta = prompt("Quanti km vuoi percorrere ?");
}

// PREZZO BIGLIETTO 0,21 CEN / KM
var prezzo = (km * 0.21);

// SCONTO PER MINORENNI
if (eta<18){
  var prezzoMin = (prezzo - ((prezzo / 100)* 20));
  document.getElementById("prezzo-bit").innerHTML = prezzoMin.toFixed(2) + ", ed e' stato applicato uno sconto del 20%.";
}
// SCONTO PRE ANZIANI
else if (eta>65){
  var prezzoOver = (prezzo - ((prezzo / 100)* 40));
  document.getElementById("prezzo-bit").innerHTML = prezzoOver.toFixed(2) + ", ed e' stato applicato uno sconto del 40%.";
}
// NESSUNO SCONTO
else {
  document.getElementById("prezzo-bit").innerHTML = prezzo.toFixed(2);
}
