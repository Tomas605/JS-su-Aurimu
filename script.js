const vardas ="Tomas Uzpurvis" ;

const raidziuSkaicius = vardas.length;

const fullName = vardas.split(" "); // dalina varda su pavarde

const vardasMazosiomis = vardas.toLowerCase();// mazosiomis raidemis 
const vardasDidziosiomis = vardas.toUpperCase();// didziosiomis raidemis 
const apkeistaRaide = vardasMazosiomis.replace(/s/g, "");// regular expressions 

console.log(apkeistaRaide);