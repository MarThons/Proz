const titulo = document.getElementById("titulo");
const ul = document.querySelector("ul");
const link = document.querySelector("a");
const ol = document.getElementById("lista-ordenada");

titulo.innerText = "Título da Página";
link.innerText = "Visite o site da Proz Educação";
link.href = "https://prozeducacao.com.br";


ul.innerHTML = `
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
`;

ol.innerHTML = `
    <li><a href="https://facebook.com">Facebook</a></li>
    <li><a href="https://instagran.com">Instagran</a></li>
    <li><a href="https://linkedin.com">Linkedin</a></li>
`;
