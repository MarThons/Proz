// let linkProz = document.getElementById("link-proz");

// let btnSubmit = document.querySelector("button[type=submit]");

// linkProz.addEventListener("click", (e) => {

//     e.preventDefault()
//     alert("Não foi possível acessar o link");

// })

// btnSubmit.addEventListener("click", (e) => {

//     e.preventDefault()
//     alert("Não foi possível enviar os dados do formulário");

// })

let inputEmail = document.getElementById("email");

let inputIdade = document.getElementById("idade");

let formulario = document.querySelector("form");

inputEmail.addEventListener("focus", () => {
    inputEmail.style.backgroundColor = "lightgreen"
});

inputEmail.addEventListener("blur", (e) => {

    e.target.style.backgroundColor = ""

});

inputIdade.addEventListener("change", ()=> {

    alert("Certeza que dejesa alterar esses dados?")

});


formulario.addEventListener("submit", ()=> {

    alert("Dados enviados com sucesso!")

});