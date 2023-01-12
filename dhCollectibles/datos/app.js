// file system
// json

const importar = require('./collectibles');

let hotToys = importar ("Hot Toys");
let bandai = importar ("Bandai");
let starWars = importar ("Star Wars");

console.log(importar ("Star Wars"));

let unifiedCollectibles = [...hotToys, ...bandai, ...starWars];

let collectibles = {

}

//console.log("deberiamos ");