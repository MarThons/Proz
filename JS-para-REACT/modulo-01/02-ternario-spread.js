//3° Operador ternário
const idade = 8;

let bebida = idade >= 18 ? 'Vinho' : 'Suco';

// if (idade >= 18) {
//     bebida = 'Vinho'
// } else {
//     bebida = 'Suco'
// }
//console.log(bebida);

//4° Operador spread
let numerosIpares = [1, 3, 5, 7, 9];
let numerosPares = [2, 4, 6, 8]
let numeros = [...numerosIpares, ...numerosPares]

//console.log(numeros);

let info = {
    nome: 'Maria',
    idade: 30
}

let login = {
    login: 'maria.al',
    senha: '1234'
}

let usuario = {
    ...info,
    ...login
}

console.log(usuario);