// ---------- VALIDAÇÃO USERNAME ---------- //
const usernameInput = document.getElementById("username");
const usernameLabel = document.querySelector('label[for="username"]');
const usernameHelper = document.getElementById("username-helper");

// Mostrar popup de campo obrigatório
// Ocultar popup de campo obrigatório
function popup(input, label){
    //mostrar popup de campo obrigatório
    input.addEventListener("focus", () => {
        label.classList.add("required-popup");
    });

    // ocultar popup obrigatório
    input.addEventListener("blur", () => {
        label.classList.remove("required-popup");
    });
}

// Validar valor do input
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
popup(usernameInput, usernameLabel);

usernameInput.addEventListener("blur", (e) => {
    let valor = e.target.value

    if(valor.length < 3){
        //adicionar estilos dinamicos se o valor possuir menos de tres   caracteres
        usernameHelper.innerText = "Seu username precisa ter três ou mais caracteres";
        estilizarInputIncorreto(usernameInput, usernameHelper)
    } else{
        //adcionar estilos dinamicos se os valores estiverem corretos
        estilizarInputCorreto(usernameInput, usernameHelper)

    }
})

//--------------Validação de e-mail-------------------//
const emailInput = document.getElementById("email");
const emailLabel = document.querySelector('label[for="email"]');
const emailHelper = document.getElementById("email-helper");

// Mostrar popup de campo obrigatório
// Ocultar popup de campo obrigatório
popup(emailInput, emailLabel);

emailInput.addEventListener("change", (e) => {
    let valor = e.target.value

    if(valor.includes("@") && valor.includes(".com")){
         //adcionar estilos dinamicos se os valores estiverem corretos
         estilizarInputCorreto(emailInput, emailHelper)
    } else{
          //adicionar estilos dinamicos se o valor não possuir @ e .com
        emailHelper.innerText = "Precisa incluir um e-mail válido!"
        estilizarInputCorreto(emailInput, emailHelper)
    }
})

//--------------Validação de senha-------------------//
const senhaInput = document.getElementById("senha");
const senhaLabel = document.querySelector('label[for="senha"]');
const senhaHelper = document.getElementById("senha-helper");

// Mostrar popup de campo obrigatório
// Ocultar popup de campo obrigatório
popup(senhaInput, senhaHelper);

senhaInput.addEventListener("blur", (e) => {
    let valor = e.target.value

    if(valor == ""){
        senhaHelper.innerText = "O campo senha não pode ficar vazio"
        estilizarInputIncorreto(senhaInput, senhaHelper)
    } else {
        estilizarInputCorreto(senhaInput, senhaHelper)
    }
})

//--------------Validação de confirma senha-------------------//
const confirmaSenhaInput = document.getElementById("confirma-senha");
const confirmaSenhaLabel = document.querySelector('label[for="confirma-senha"]');
const confirmaSenhaHelper = document.getElementById("confirma-senha-helper");

// Mostrar popup de campo obrigatório
// Ocultar popup de campo obrigatório
popup(confirmaSenhaInput, confirmaSenhaLabel);

confirmaSenhaInput.addEventListener("change", (e) => {
    let valor = e.target.value

    if(valor === senhaInput.value){
        estilizarInputCorreto(confirmaSenhaInput, confirmaSenhaHelper)
    } else {
        estilizarInputIncorreto(confirmaSenhaInput, confirmaSenhaHelper)
    }
})