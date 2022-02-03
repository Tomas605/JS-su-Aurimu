
const puodelioKaina = 1.5;
const puodeliuKiekis = prompt("Kiek puodeliu kavos?");
let suma = 0;

for (let i = 0; i < puodeliuKiekis; i++) {
    suma = suma + puodelioKaina;
    }

alert(`Suma ${suma}`);