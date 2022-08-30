const boton = document.getElementById('btn');
const input = document.getElementById('usuario');
boton.addEventListener('click', submitCheck);

function submitCheck() {
    const usuario = document.getElementById('usuario').value;
    const pass = document.getElementById('password').value;
    localStorage.setItem('userID', usuario);
    if (!(usuario === '' || pass === '')) {
        window.location.href = './front.html';
    } else {
        alert('Campos Vacíos');
    }
}

document.onkeyup = enter;
function enter(e) {
    if (e.which === 13) submitCheck();
}
