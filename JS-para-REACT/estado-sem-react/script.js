//1. Capturar elemento
const usuario = document.querySelectorAll('li');
const escolhido = document.getElementById('escolhido');

//2. Definir comportamento
function selecionarUsuario(usuario) {
    escolhido.innerText = usuario
}

//3. Adicionar evento
for (const elemento of usuario) {
    elemento.addEventListener('click', () => {
        selecionarUsuario(elemento.innerText)
    })
}