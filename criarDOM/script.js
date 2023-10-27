import {arrayPostagens} from'./postagem.js'



//Criar um elemento
//let article = document.createElement("article");

//console.log(article); 

//Manipular o elemento

// article.innerHTML = `
//     <h3>Pop Vegan</h3>
//     <p class="subititulo">Comida vegana para todos!</p>
//     <div class="data">06/07/2022</div>
//     <p>Restaurante em Consolação com comida por kilo no almoço e rodízio de pizzas à noite, tudo 100% vegano. Vale muito a pena conhecer :)</p>
//  `;

// article.id = "post-2"

//console.log(article);


// article.innerHTML = `
// <h3>${arrayPostagens[0].titulo}</h3>
// <p class="subtitulo">${arrayPostagens[0].subtitulo}</p>
// <div class="data">${arrayPostagens[0].data}</div>
// <p>${arrayPostagens[0].texto}</p>
// `;

// article.id = "post-1"
// console.log(article);

// //Adicionar o elemento na página
// let main = document.querySelector("main");
// main.appendChild(article);

for (let i = 0; i < arrayPostagens.length; i++) {
    let article = document.createElement("article");

    article.innerHTML = `
     <h3>${arrayPostagens[i].titulo}</h3>
     <p class="subititulo">${arrayPostagens[i].subtitulo}</p>
     <div class="data">${arrayPostagens[i].data}</div>
     <p>${arrayPostagens[i].texto}</p>
     `;

    article.id = `post-${i + 1}`

    let main = document.querySelector("main");
    main.appendChild(article);

}