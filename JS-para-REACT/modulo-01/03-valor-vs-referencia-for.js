//5° Valor vs Referencia
let idade = 35
let nome = 'thon'

// console.log(idade == 35);
// console.log(nome == 'thon');

let numeros = [1, 2, 3];

let outrosNumeros = [1, 2, 3];

let usuario = {
    nome: 'Thon',
    idade: 30
}

// for (let i = 0; i < numeros.length; i++) {
//     return numeros[i] = outrosNumeros[i];
    
// }
//console.log(numeros == [1, 2, 3]);
// console.log(usuario == {
//     nome: 'Thon',
//     idade: 30
// });

//6° for...in e for...out
let numeros02 = [19, 38, 57];
            // for (let i = 0; i < numeros02.length; i++) {
            //          console.log(numeros02[i]);
                    
            //      }
//Aqui o in imprime o indice e forçamos pra mostra o valor registrado
// for(let indice in numeros02){
//     console.log(numeros02[indice]);
// }


//Aqui ele já imprime o elemento
// for(let elemento of numeros02){
//     console.log(elemento);
// }

let filme = {
    titulo: 'Toy Story',
    ano: 1995,
    genero: 'Animação'
}

for(let chave in filme){
    console.log(`${chave}:  ${filme[chave]}`);
}