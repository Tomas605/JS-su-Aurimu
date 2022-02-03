const tiesa = 10;
let spejimas = prompt('Atspek skaiciu: ');

while (spejimas != tiesa) {
    spejimas = prompt('Spek dar karta: ');
}

alert('Atspejai!');

/*  
Deklaruoti kintamaji (skaiciu | Number)

Sukurkite cikla, kuris:
    - Papraso vartotojo atspeti skaiciu; (prompt)
    - kartoti cikla, kol vartotojas irasys 
    pries tai deklaruota skaiciu;

Sekmes atveju ciklas nutruksta 
ir pasimato alert'as: "Atspejai!";
*/