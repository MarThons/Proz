let elementoH1 = document.querySelector("h1");
console.log(elementoH1);
console.log(elementoH1.innerText);
elementoH1.innerText = "Novo título com JS"

let elementoMain = document.querySelector("main");
console.log(elementoMain);
console.log(elementoMain.innerText);
console.log(elementoMain.innerHTML);

elementoMain.innerHTML = `
    <h2>Novo Subtítulo</h2>
    <ul>
        <li>Elemento da lista 01</li>
        <li>Elemento da lista 02</li>
        <li>Elemento da lista 03</li>
    </ul>
`;
