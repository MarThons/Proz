// Definição de variáveis ou Captura de elementos do DOM
let quantidadeSubtotal = document.getElementById("quantidade-subtotal");

let valorSubtotal = document.getElementById("valor-subtotal");

let subtotalInfo = {
    quantidade: 1,
    valor: 11.66
};

//Funções /Atualizar DOM

// quantidadeSubtotal.innerText = subtotalInfo.quantidade + " itens";
// valorSubtotal.innerText = subtotalInfo.valor;

function atualizarDOM(){
    quantidadeSubtotal.innerText = subtotalInfo.quantidade + " itens";
    valorSubtotal.innerText = subtotalInfo.valor.toFixed(2);
}
atualizarDOM();
//Eventos



//Capturar elementos para aumentar a quantidade
let btnAdicionarUm = document.getElementById("btn-adicionar-produto-01");

let quantidadeProdutoUm = document.getElementById("quantidade-produto-01");

let valorProduto01 = 11.66;

//Função
function adicionarUm(){
    //Incrementando a quantidade do produto
    quantidadeProdutoUm.value = Number(quantidadeProdutoUm.value) + 1;
        // Obtenha o valor atual do campo de entrada como um número
    
    //Incremetadoo a quantidade do subtotal
    subtotalInfo.quantidade = subtotalInfo.quantidade + 1;

    //Atualizar valor do subtotal
    subtotalInfo.valor = subtotalInfo.valor + valorProduto01;

    //Atualizar DOM
    atualizarDOM();
};

// Capturar elementos para diminuir a quantiidade
let btnSubitrairUm = document.getElementById("btn-subtrair-produto-01");

//Funçao
function diminuirUm(){
     //Incrementando a quantidade do produto
     quantidadeProdutoUm.value = Number(quantidadeProdutoUm.value) - 1;
     // Obtenha o valor atual do campo de entrada como um número
 
 //Incremetadoo a quantidade do subtotal
 subtotalInfo.quantidade = subtotalInfo.quantidade - 1;

 //Atualizar valor do subtotal
 subtotalInfo.valor = subtotalInfo.valor - valorProduto01;

 //Atualizar DOM
 atualizarDOM();
};

// Eventos
btnAdicionarUm.addEventListener("click", adicionarUm);
btnSubitrairUm.addEventListener("click", diminuirUm);