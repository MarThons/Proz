let elementoJavScript = document.createElement("li");

elementoJavScript.innerText = "JavaScript";
elementoJavScript.id = "ling-js";

console.log(elementoJavScript);

let listaLinguagens = document.querySelector(".lista-linguagens");
listaLinguagens.appendChild(elementoJavScript);

const postagemJavaScript = document.createElement("div");
postagemJavaScript.innerHTML =
    `<h2 class="post-titulo">JavaScript</h2>
    <p class="post-texto">
    JavaScript é uma linguagem de programação22
    </p>`;

const postagens = document.querySelector(".postagens");
postagens.appendChild(postagemJavaScript);
