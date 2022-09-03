const boton = document.getElementById('boton')
const usuario = document.getElementById('usuario')
const pass = document.getElementById('password')
boton.addEventListener('click', submitCheck)

function submitCheck() {
    const usuario = document.getElementById('usuario').value
    const pass = document.getElementById('password').value
    localStorage.setItem('userID', usuario)
    if (!(usuario === '' || pass === '')) {
        window.location.href = './front.html'
    } else if (usuario === '') {
        document.getElementById('usuario').classList.remove('input-incial')
        document.getElementById('usuario').classList.add('failed')
    } else if (pass === '') {
        document.getElementById('password').classList.remove('input-incial')
        document.getElementById('password').classList.add('failed')
    }
}

document.onkeyup = enter
function enter(e) {
    if (e.which === 13) submitCheck()
}

/* function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile()
    console.log('ID: ' + profile.getId()) // Do not send to your backend! Use an ID token instead.
    console.log('Name: ' + profile.getName())
    console.log('Image URL: ' + profile.getImageUrl())
    console.log('Email: ' + profile.getEmail()) // This is null if the 'email' scope is not present.
}
 */
