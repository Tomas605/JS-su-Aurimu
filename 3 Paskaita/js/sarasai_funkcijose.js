const skaiciai = [12, 24, 56, 42, 35, 8, 155, 65, 89, 65, 23, 12, 24, 56, 42, 35, 8, 155, 65, 89, 65, 23, 12, 24, 56, 42, 35, 8, 155, 65, 89, 65, 23, 12, 24, 56, 42, 35, 8, 155, 65, 89, 65, 23, 12, 24, 56, 42, 35, 8, 155, 65, 89, 65, 23, 12, 24, 56, 42, 35, 8, 155, 65, 89, 65, 23, 12, 24, 56, 42, 35, 8, 155, 65, 89, 65, 23, 12, 24, 56, 42, 35, 8, 155, 65, 89, 65, 23, 12, 24, 56, 42, 35, 8, 155, 65, 89, 65, 23];


// function add(a, b) {
//     return a + b
// }

// add(12, 23)

function daugintiIsDvieju(kazkoksSkaiciuSarasas) {

    const atsakymuSarasas = [];

    /**
     * Pabandyti rašyti į kazkoksSkaiciuSarasas atsakymus ir į atsakymuSarasas 
     * ir pažiūrėti kaip kiekvienas atvejis keičia orginalųjį "skaiciai"
    */

    for (let i = 0; i < kazkoksSkaiciuSarasas.length; i++) {

        const sarasoSkaiciusKuriDauginti = kazkoksSkaiciuSarasas[i];

        atsakymuSarasas[i] = sarasoSkaiciusKuriDauginti * 2;
    }

    return atsakymuSarasas
}

const apskaiciuotasSarasas = daugintiIsDvieju(skaiciai)
//  kitaFunkcija(skaiciai)
//  kitaFunkcija2(skaiciai)
//  kitaFunkcija3(skaiciai)
//  kitaFunkcija4(skaiciai)
// console.log(apskaiciuotasSarasas);
// console.log(skaiciai)








// const kitiSkaiciai = skaiciai;
// kitiSkaiciai[0] = 20;

// console.log(skaiciai[0], kitiSkaiciai[0]);


// const numeris = 10;
// let kitasNumeris = numeris; // string, boolean, number

// console.log("numeris", numeris)
// console.log("kitasNumeris", kitasNumeris)

// kitasNumeris = kitasNumeris + 1;
// console.log("kitasNumeris + 1")
// console.log("numeris", numeris)
// console.log("kitasNumeris", kitasNumeris)


// function pridetiVienaIrLoginti(x) {
//     x = x + 1
//     console.log("x", x)
// }

// pridetiVienaIrLoginti(numeris)


/* Kompiuterio atmintis

"adadad46ad6z1xc65z1c65as1d65a1sd6":  ["E", "C"]
"adadad46ad6z1xc65z1c65as1d65a1sd7": "adadad46ad6z1xc65z1c65as1d65a1sd6"

*/