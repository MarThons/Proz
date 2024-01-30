
const tituloElemento = document.createElement("h1");
tituloElemento.id = "titulo";
tituloElemento.textContent = "Você mais inteligente!!!";


const body = document.querySelector("body");


body.appendChild(tituloElemento);

const produtoElemento = document.createElement("div");
produtoElemento.classList.add("produto");


produtoElemento.innerHTML = `
    <h2>Inteligência Artificial</h2>
    <p>Chip de inteligência para você adiquirir seu potencial máximo!</p>
    <p>Preço: R$ 99,99</p>
    <img src="./chip.png" alt="Produto">
`;

document.body.appendChild(produtoElemento);