const biudzetas = Number(prompt("koks tavo vardas")); //stringas
const prekesKaina = 500;// number
if (biudzetas > prekesKaina) {
    alert("Galim pirkti");
} else if (biudzetas === prekesKaina) {
  alert ("Nepareikes susiverzti dirzus, bet iperkam"); 
} else if (biudzetas == prekesKaina) {
    alert ("nezinau, turbut iperkama"); 
} else {
    alert ("neiperkama")
}



/* Pirma uzduotis
Deklaruoti savo biudzeta
Deklaruoti produkto kaina
Jeigu turite daugiau pinigu nei prekes kaina
alerkinti, kad turit pakankamai
jeigu ne, alerkinkit priesinga zinute */

/* Antra uzduotis
Papildyti salyga
Jeigu yra lygiai tiek biudzetas, kiek kainuoja preke
alerkinti reikes susispausti dirzus*/