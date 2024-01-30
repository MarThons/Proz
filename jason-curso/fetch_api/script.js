// -------- Gerador de usuarios -------- //
// 1. Captura de elementos
const btnUsuario = document.getElementById('btn-usuario');
const usuariosContainer = document.getElementById('usuarios-container');
const helperTextUsuario = document.getElementById('helper-text-usuario');

// 2. Funções
function gerarUsuario() {
    //   const resposta =  fetch('https://random-data-api.com/api/v2/users');
    //   console.log(resposta);

    //   const tratamentoResposta = resposta.then((res) => {
    //     console.log(res);
    //     return res.json(); //JSON.parse(res)
    //   })

    //   tratamentoResposta.then((data) => {
    //     console.log(data);
    //   })
    helperTextUsuario.innerText = 'Carregando. . . '

    fetch('https://random-data-api.com/api/v2/usersdd')
        .then((res) => res.json())
        .then((data) => {
            const usuario = document.createElement('div')
            usuario.innerHTML = `
                <img src= "${data.avatar}">
                <span><strong>Username:</strong>${data.username}</span>
            `
            usuario.classList.add('usuario')
            usuariosContainer.appendChild(usuario)
            helperTextUsuario.innerText = ''
            console.log(data)    

        })
        .catch((error) => {
            helperTextUsuario.innerText = ''
            alert('Não foi possível gerar um usuário')
            console.log(error)
            
        })
}

// 3. Eventos
btnUsuario.addEventListener('click', gerarUsuario);

// -------- Gerador de postagens -------- //
// 1. Captura de elementos
const postTitle = document.getElementById("post-title")
const postBody = document.getElementById("post-body")
const btnPost = document.getElementById("btn-post")
const postsContainer = document.getElementById("posts-container")
const helperTextPost = document.getElementById("helper-text-post")

// 2. Funções
function gerarPost(evento){
    helperTextPost.innerText = ''
    evento.preventDefault()

    

    const jssonBody = JSON.stringify({
        titulo: postTitle.value,
        mensagem: postBody.value
    })

    console.log(jssonBody)

    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: jssonBody
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        const post = document.createElement('div')
        post.classList.add('postagem')
        post.innerHTML = `
                <h3>"${data.id} - ${data.titulo}"</h3>
                <p>${data.mensagem}</p>
            `
            
            // postsContainer.appendChild(post) primeiro post é o mais antigo
            postsContainer.prepend(post) // primeiro post é o mais novo

            //limpar formulario
            postTitle.value = ''
            postBody.value = ''
      })
      .catch((error) => {
        console.log(error)
        helperTextPost.innerText = 'Não foi possível gerar a postagem!'

      })
}
// 3. Eventos
btnPost.addEventListener('click', (evento) => gerarPost(evento))