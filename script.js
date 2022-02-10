const vardas = "Tomas Uzpurvis";

const raidziuSkaicius = vardas.length;

const fullName = vardas.split(" "); // dalina varda su pavarde

const vardasMazosiomis = vardas.toLowerCase();// mazosiomis raidemis 
const vardasDidziosiomis = vardas.toUpperCase();// didziosiomis raidemis 
const apkeistaRaide = vardasMazosiomis.replace(/s/g, "");// regular expressions 

console.log(apkeistaRaide);

const transliacija = `
 32   36   44 16  22      18     8   30   12      86   44
  54   10  64       6         60    84         2       98
40 20     32  44   10        4   172       4   108
     12 120 168    0 10   24        4 196     44   9 188 4
 7 16    18  22    8    11 9   4 15 6 43 22
27 5       32              3 30 42 1       49 20

10     16    22      5  2 86
2 54    6    60 84  0   5    12      2  98 22 40     74 4
`;


function masyvoValytuvas(masyvasKuriReikiaIsvalyt) {
  const tikSkaiciai = [];

  for (let i = 0; i < masyvasKuriReikiaIsvalyt.length; i++) {
    if (masyvasKuriReikiaIsvalyt[i] === '') {
      //nedarom nieko
    } else {
      tikSkaiciai.push(masyvasKuriReikiaIsvalyt[i]);
    }
  }

  return tikSkaiciai;
}
// Pirma uzduotis
const transliacijaBeNewLine = transliacija.replaceAll('\n', ' ');
const masyvasSuTarpais = transliacijaBeNewLine.split(' ');
const skaiciuMasyvas = masyvoValytuvas(masyvasSuTarpais);
// Antra uzduotis
const paskutiniaiSkaiciai = skaiciuMasyvas.slice(-40);

console.log(paskutiniaiSkaiciai);

// Trecia uzduotis
const vartoniniSkaiciai = [];

for (let i = 0; i < paskutiniaiSkaiciai.length; i += 2) {
  if (paskutiniaiSkaiciai[i] !== "6") {
    vartoniniSkaiciai.push(paskutiniaiSkaiciai[i]);
  }
}
// Ketvirta uzduotis
const sprendimas = [];

for (let i = 0; i < vartoniniSkaiciai.length; i++) {
  let skaiciuokle = 0;


  for (let j = 0; j < vartoniniSkaiciai.length; j++) {
    if (vartoniniSkaiciai[i] === vartoniniSkaiciai[i] {
      skaiciuokle++;
    }
  }
  if (skaiciuokle > 1) {
    if (sprendimas.includes(vartoniniSkaiciai[i])) {
      sprendimas.push(vartoniniSkaiciai[i]);
    }
  }
}
const penktaUzduotis = [
  sprendimas[0],
  sprendimas[2],
  sprendimas[1],
]
penktosUzduotiesMasyvas.join("-")


/*let arr = [1, 0, false];
console.log( arr.indexOf(0) ); // 1
console.log( arr.indexOf(false) ); // 2
console.log( arr.indexOf(null) ); // -1
console.log( arr.includes(1) ); // true*/