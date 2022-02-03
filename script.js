
const puodelioKaina = 1.5;
const puodeliuKiekis = prompt("Kiek puodeliu kavos?");
let suma = 0;

for (let cup = 1; cup <= puodeliuKiekis; cup++) {
    const cukrausKiekis = prompt(`Kiek sauksteliu cukraus ${cup} puodelyje?`);

    for (let cukrus = 1; cukrus <= cukrausKiekis; cukrus++) {
        const sakinys = `Pilu ${cukrus} sauksteli cukraus i ${cup} puodeli`;
    }

    const sakinys = `Pilu 1 sauksteli cukraus i ${cup} puodeli`;

    suma = suma + puodelioKaina;
}

alert(`Suma ${suma} eur`);