const celsius = prompt("Iveskite laipsnius: ");

const atsakymas = celsiusToFarengheit(celsius)



function celsiusToFarengheit(celsius){
    return celsius * 1.8 + 32;
}