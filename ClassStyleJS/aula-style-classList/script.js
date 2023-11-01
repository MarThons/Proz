//const
const usernameInput = document.getElementById('login-usuario');

const errorText = document.querySelectorAll('.error-text');


const senhaInput = document.getElementById('login-senha');


//Usuário errou o Username

usernameInput.classList.add('error');
errorText[0].classList.add('visible');



//remover o erro

usernameInput.classList.remove('error');
errorText[0].classList.remove('visible');

//acertar username

usernameInput.classList.add('correct');

//errar senha



senhaInput.classList.add('error');
errorText[1].classList.add('visible');