//T I P A G E M  D E  O B J E T O S

type Usuario = {
    nome: string,
    idade: number,
    admin: boolean,
    endereco: {
        cidade: string,
        estado: string
    }
}

let usuario: Usuario;

usuario = {
    nome: 'Thon',
    idade: 35,
    admin: true,
    endereco: {
        cidade: 'Araçatuba',
        estado: 'São Paulo'
    }
}

let usuario02: Usuario = {
    nome: 'Alexandre',
    idade: 40,
    admin: false,
    endereco: {
        cidade: 'Campo Grande',
        estado: 'Mato Grosso do Sul'
    }
}


//T I P A G E M  D E  A R R A Y S
let nomes = ['Thon', 'Marthons', 'Marchetti'] //implicito

let numeros: number[] = [1, 5, 9, 16] //explicito

type Aluno = {
    nome: string,
    idade: number
}

let alunos: Aluno[] = [
    {
        nome: 'Paulo',
        idade: 10
    },
    {
        nome: 'Matheus',
        idade: 11
    },
    {
        nome: 'Jorge',
        idade: 13
    },
    {
        nome: 'Vitor',
        idade: 14
    },
    {
        nome: 'Priscila',
        idade: 12
    }
]

// T I P A G E M  D E  F U N Ç Õ E S

function subtrair(a: number, b: number){
    return a - b;
}

function retornarPrimeiro(lista: Aluno[]): string{
    let primeiro = lista[0];
    return `O aluno ${primeiro.nome} tem ${primeiro.idade} anos` 
}

function maiorIdade(lista: Aluno[]): boolean{
    let primeiro = lista[0];
    if(primeiro.idade >= 18){
        return true
    }else{
        return false
    }
}

//P A R A M E T R O  O P C I O N A I S
function calcularPagamento(valor: number, parcela: number, desconto?: number){
    const parcelaComValor: number[] = []
    for( let i = 1; i <= parcela; i++){
        let valorNovo = valor
        if(desconto){
            valorNovo = valor - (valor * desconto)
        }
        parcelaComValor.push(valorNovo/parcela)
    }
    return parcelaComValor
}

console.log(calcularPagamento(100, 3, 0.1))

//G E N E R I C O S  C O M  A R R A Y S

type Lista<T> = T[] // Esse T pode ser qualquer nome mas usualmente se faz assim

let listaNumeros: Lista<number> = []
listaNumeros.push(10) // aqui só aceita numeros