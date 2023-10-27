const arrayPostagens = [
    {
        titulo: "Pop Vegan",
        subtitulo: "Comida vegana para todos!",
        data: "06/07/2022",
        texto: "Restaurante em Consolação com comida por kilo no almoço e rodízio de pizzas à noite, tudo 100% vegano. Vale muito a pena conhecer :)"
    },
    {
        titulo: "Make Hommus. Not War",
        subtitulo: "Só delivery, para curtir em casa!",
        data: "18/08/2022",
        texto: "Neste restaurante não só pode, como é encorajado comer o antepasto como prato principal. Recomendamos os kibes e a kafta bonina."
    },
    {
        titulo: "Churrascada do Mar",
        subtitulo: "Melhor do que estar na praia!",
        data: "30/08/2022",
        texto: "Todos conhecemos e amamos um bom churrasco, mas o que você acha de experimentar um churrasco focado em frutos do mar? Nós gostamos, experimente e nos conte  o que você achou!"
    },
]



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