let nome = 'Marthons';
let frase = `Olá ${nome}! Implementemos Typescript`

console.log(frase)

// usando DOM
let inputNome: HTMLInputElement | null = document.querySelector('#nome') // melor forma de corrigir o erro mas tem opção ´any´

let titulo = document.querySelector('h1')
let link = document.querySelector('a')

// COMO A CAPTURA DO ELEMENTO NÃO GARANTE QUE HAJA O ELEMENTO EM TYPE

            // if(inputNome){
            //     inputNome.value
            // }

// MAS O MELHOR JEITO É ESSE

inputNome?.value