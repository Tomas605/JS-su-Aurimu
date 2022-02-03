const automobiliai = ["Saab", "BMW", "Audi", "VW", "Pegueot", "Citroen", 12];


for (let indeksas = 0; indeksas < automobiliai.length; indeksas = indeksas + 1) {
    const automobilis = automobiliai[indeksas];
    console.log(automobilis)
}
console.log(automobiliai)
console.log(automobiliai.length)


const sarasas = [];
sarasas[1] = "asd";
console.log(sarasas);



// function arYraBmw(automobiliuSarasas) {

//     let arYraBmwMarke = false

//     for (let indeksas = 0; indeksas < automobiliuSarasas.length; indeksas++) {
//         const automobilis = automobiliuSarasas[indeksas];
//         arYraBmwMarke = automobilis === "BMW"
//         if (arYraBmwMarke) {
//             break
//         }
//     }

//     return arYraBmwMarke

// }

// console.log(arYraBmw(automobiliai))