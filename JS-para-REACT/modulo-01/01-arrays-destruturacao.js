// 1° Metodo de arrays
const numeros = [11, 22, 33, 55, 88]
numeros.push(143)
//console.log(numeros)

const numeroMaiores = numeros.filter((elemento) => {
    return elemento > 50
})
//console.log(numeroMaiores);

const nomes = ['Monica', 'Cebolinha']
const nomesComCaracteres = nomes.map((e) => {
    return {
        nome: e,
        caracteres: e.length
    }
})

//console.log(nomesComCaracteres);

//2° Desestruturação
const produto = {
    nome: 'Leite',
    preco: 3.55
}

// let nome = produto.nome;
// let valor = produto.preco;

// console.log(nome, valor);

let { nome, preco } = produto
//console.log(preco, nome);

const produtos = ['Bolacha', 'Arroz', 'Guaraná']

// const elemento01 = produtos[0];
// const elemento02 = produtos[1];
// const elemento03 = produtos[2];

const [elemento01, elemento02, elemento03] = produtos

//console.log(elemento02, elemento03, elemento01);

