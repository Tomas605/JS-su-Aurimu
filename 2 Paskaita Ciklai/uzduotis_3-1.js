const tiesa = 42;
let spejimas = prompt('Atspek skaiciu: ');

while (spejimas != tiesa) {
    if (spejimas < tiesa) {
        alert('per zemai');
    } else {
        alert('per aukstai');
    }

    spejimas = prompt('Atspek skaiciu: ');
}

alert('Atspejai!');

/*  
Papildyti koda:
    - Alert'inti, jei spejimas yra "per zemai";
    - Alert'inti kita teksta, jei spejimas yra "per aukstai";
*/