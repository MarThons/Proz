const inputEmail = document.getElementById('input-email');
const btnEmail = document.getElementById('btn-email');

inputEmail.addEventListener('keyup', (e) => {
    if (e.target.value == '') {
        btnEmail.setAttribute('disabled', 'true')
    } else {
        btnEmail.removeAttribute('disabled')
    }
})