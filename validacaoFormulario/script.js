// ------ FUNÇÕES GERAIS ----- //
function tooglePopup(input, label){
    //mostrar popup de campo obrigatório
    input.addEventListener("focus", () => {
        label.classList.add("required-popup");
    });

    // ocultar popup obrigatório
    input.addEventListener("blur", () => {
        label.classList.remove("required-popup");
    });
}

function estilizarInputCorreto(input, helper){
    helper.classList.remove("visible");
    input.classList.remove("error");
    input.classList.add("correct");
}

function estilizarInputIncorreto(input, helper){
    helper.classList.add("visible");
    input.classList.add("error");
    input.classList.remove("correct");
}

// VAlidação username
let usernameInput = document.getElementById("username");
let usernameLabel = document.querySelector('label[for="username"]');
let usernameHelper = document.getElementById("username-helper");
console.log(usernameHelper, usernameInput, usernameLabel);

tooglePopup(usernameInput, usernameLabel)

//Validar valor do input
usernameInput.addEventListener("change", (e) => {
    let valor = e.target.value

    if(valor.length < 3){
        //adicionar estilos dinamicos se o valor possuir menos de tres   caracteres
        usernameHelper.innerText = "Seu username precisa ter três ou mais caracteres";
        estilizarInputIncorreto(usernameInput, usernameHelper)
        inputCorretos.username = false
    } else{
        //adcionar estilos dinamicos se os valores estiverem corretos
        estilizarInputCorreto(usernameInput, usernameHelper);
        inputCorretos.username = true
    }
})

//--------------Validação de e-mail-------------------//
let emailInput = document.getElementById("email");
let emailLabel = document.querySelector('label[for="email"]');
let emailHelper = document.getElementById("email-helper");

tooglePopup(emailInput, emailLabel)

//validar vaçlor do imput
emailInput.addEventListener("change", (e) => {
    let valor = e.target.value

    if(valor.includes("@") && valor.includes(".com")){
         //adcionar estilos dinamicos se os valores estiverem corretos
        estilizarInputCorreto(emailInput, emailHelper)
        inputCorretos.email = true
    } else{
          //adicionar estilos dinamicos se o valor não possuir @ e .com
        emailHelper.innerText = "Precisa incluir um e-mail válido!"
        estilizarInputIncorreto(emailInput, emailHelper)
        inputCorretos.email = false
    }
})

//--------------Validação de senha-------------------//
let senhaInput = document.getElementById("senha");
let senhaLabel = document.querySelector('label[for="senha"]');
let senhaHelper = document.getElementById("senha-helper");

tooglePopup(senhaInput, senhaLabel)

senhaInput.addEventListener("blur", (e) => {
    let valor = e.target.value

    if(valor == ""){
        senhaHelper.innerText = "O campo senha não pode ficar vazio"
        estilizarInputIncorreto(senhaInput,senhaHelper)
        inputCorretos.senha = false
    } else {
        estilizarInputCorreto(senhaInput, senhaHelper)
        inputCorretos.senha = true
    }
})
console.log(senhaInput, senhaHelper, senhaLabel)
//--------------Validação de confirma senha-------------------//
let confirmaSenhaInput = document.getElementById("confirma-senha");
let confirmaSenhaLabel = document.querySelector('label[for="confirma-senha"]');
let confirmaSenhaHelper = document.getElementById("confirma-senha-helper");

tooglePopup(confirmaSenhaInput, confirmaSenhaLabel)

confirmaSenhaInput.addEventListener("change", (e) => {
    let valor = e.target.value

    if(valor === senhaInput.value){
        estilizarInputCorreto(confirmaSenhaInput, confirmaSenhaHelper)
        inputCorretos.confirmaSenha = true
    } else {
        confirmaSenhaHelper.innerText = "As senhas não são iguais"
        estilizarInputIncorreto(confirmaSenhaInput,confirmaSenhaHelper)
        inputCorretos.confirmaSenha= false
    }
})

//------------------------Evitar envio do fomulário-----------------//
let btnSubmit = document.querySelector('button[type="submit"]')
let inputCorretos = {
    username: false,
    email: false,
    senha: false,
    confirmaSenha: false
}

btnSubmit.addEventListener("click", (e) => {
    if(inputCorretos.username == false || inputCorretos.email == false || inputCorretos.senha == false || inputCorretos.confirmaSenha == false){
        e.preventDefault()
        alert("Preencha todos os campos obrigatório!")

    }else{
        alert("Formulário enviado com sucesso")
    }
})