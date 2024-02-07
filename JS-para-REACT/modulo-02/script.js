let app = document.getElementById('app');

function renderizarBotao(texto){
    return `
        <button>
            ${texto}
        </button>
    `
}

app.innerHTML = `
    <h1>Premissa do React ${renderizarBotao('Outra matéria')}</h1>
    <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit.${renderizarBotao('Verificar site')} Vel velit, praesentium similique autem a, repudiandae eos possimus dolore, omnis harum officiis. Ullam ab modi deserunt natus laboriosam officia nesciunt, provident recusandae et sapiente, qui labore?
    ${renderizarBotao('Concorda?')}${renderizarBotao('Discorda?')}
    </p>
    <footer>
        Esse é o footer!!!
        ${renderizarBotao('Instagram')}
        ${renderizarBotao('Linkedin')}
        ${renderizarBotao('Github')}
    </footer>
`