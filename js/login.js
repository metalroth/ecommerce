const boton = document.getElementById('boton'),
    usuario = document.getElementById('usuario'),
    pass = document.getElementById('password')
boton.addEventListener('click', submitCheck)

document.onkeyup = enter
function enter(e) {
    if (e.which === 13) submitCheck()
}

function submitCheck() {
    localStorage.setItem('userID', usuario.value)
    if (usuario.value === '') {
        document.getElementById('usuario').style.border = '1px solid red'
    }
    if (pass.value === '') {
        document.getElementById('password').style.border = '1px solid red'
    } else if (!(usuario.value === '') || pass.value === '') {
        window.location.href = './front.html'
    }
}

usuario.addEventListener('click', () => {
    usuario.style.border = '1px solid gray'
})

pass.addEventListener('click', () => {
    pass.style.border = '1px solid gray'
})
