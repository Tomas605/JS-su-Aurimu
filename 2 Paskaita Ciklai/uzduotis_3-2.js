const tiesa = 42;
let spejimas;

do {
    spejimas = prompt('Atspek skaiciu: ');

    if (spejimas < tiesa && spejimas != tiesa) {
        alert('per zemai');
    } else {
        alert('per aukstai');
    }
} while (spejimas != tiesa);

alert('Atspejai!');

/*  
Papildyti koda:
    - Alert'inti, jei spejimas yra "per zemai";
    - Alert'inti kita teksta, jei spejimas yra "per aukstai";
*/