console.log("Trabalhado com JSON");

const objetoJS = {
    nome: 'Luis',
    idade: 28,
    estrangeiro: true
}

console.log(objetoJS)
console.log(typeof(objetoJS))

//falsa string json
const falsaStringJSON = {
    "nome": "Luis",
    "idade": 28,
    "estrangeiro": true
}

console.log(falsaStringJSON)
console.log(typeof(falsaStringJSON))

//String JSON VERDADEIRA
const stringJSON = JSON.stringify(objetoJS)
console.log(stringJSON)
console.log(typeof(stringJSON))


const parsedJSON = JSON.parse(stringJSON)
console.log(parsedJSON)
console.log(typeof(parsedJSON))
console.log(parsedJSON.estrangeiro)