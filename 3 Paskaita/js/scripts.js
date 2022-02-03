const automobilioMarkes = ["Audi", "BMW", "VW", /* 4 el. 3 Indeksas */];
console.log(automobilioMarkes[1])
console.log("ilgis", automobilioMarkes.length);

automobilioMarkes[3] = "Saab";
console.log(automobilioMarkes);
console.log("ilgis", automobilioMarkes.length);

automobilioMarkes[4] = "Peugeot";
console.log(automobilioMarkes);
console.log("ilgis", automobilioMarkes.length);

// paskutinio "daikto" sarase indeksas  === ilgis - 1

// const kitosMarkes = ["BMW", "Audi", "VW" /**,"Saab", "Peugeot" */];
// kitosMarkes[kitosMarkes.length] = "Saab";
// kitosMarkes[kitosMarkes.length] = "Peugeot";

// console.log(kitosMarkes);
// kitosMarkes[3] = "Citroen";
// console.log(kitosMarkes);


// let kintamasis = 1;
// kintamasis = 12;

// const inicijuotasSarasas = [];

// let kintamasisSarasas = ["asd", "asd"];
// kintamasisSarasas = ["zxc", "zxc"];



// Patikrinti 

let arYraBmw = false;

for (let i = 0; i < automobilioMarkes.length; i++) {

    if (automobilioMarkes[i] === "BMW") {
        arYraBmw = true;

        break;
    }

}

console.log(arYraBmw);

// const arYraViduje = automobilioMarkes.includes("BMW")
