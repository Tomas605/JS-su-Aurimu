const eur = prompt("Iveskite eurus: ")

function eurToRub(eur) {
    return eur * 88.05;
}
const atsakymas = eurToRub(eur);
alert(atsakymas);