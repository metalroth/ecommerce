const boton = document.getElementById('btn')
boton.addEventListener('click', submitCheck)

function submitCheck() {
    const usuario = document.getElementById('usuario').value
    const pass = document.getElementById('password').value
console.log(usuario, pass)
    if (!(usuario ==='' || pass === '')) {
       window.location.href = './front.html'
    } else {
         alert('Campos Vacíos')
    }

}