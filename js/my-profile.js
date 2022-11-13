const nombre = document.getElementById('nombre'),
    segundoNombre = document.getElementById('segundoNombre'),
    apellido = document.getElementById('apellido'),
    segundoApellido = document.getElementById('segundoApellido'),
    telefono = document.getElementById('telefono'),
    email = document.getElementById('email'),
    boton = document.getElementById('botonCredentials'),
    profileImage = document.getElementById('profileImage'),
    imageUpload = document.getElementById('imageUpload')

function checkCredentials() {
    if (!(nombre.value === '') && !(apellido.value === '') && !(email.value === '')) {
        localStorage.setItem('userName', nombre.value)
        localStorage.setItem('userLastName', apellido.value)
        localStorage.setItem('userLastName2', segundoApellido.value)
        localStorage.setItem('userName2', segundoNombre.value)
        localStorage.setItem('userEmail', email.value)
        localStorage.setItem('userPhone', telefono.value)
    }
}

boton.addEventListener('click', checkCredentials)

//agregado despues de hecha la defensa, es para que la tecla enter tambien lance el check
document.onkeyup = enter
function enter(e) {
    if (e.which === 13) checkCredentials()
}

nombre.value = localStorage.getItem('userName')
apellido.value = localStorage.getItem('userLastName')
segundoApellido.value = localStorage.getItem('userLastName2')
segundoNombre.value = localStorage.getItem('userName2')
email.value = localStorage.getItem('userEmail')
    ? (email.value = localStorage.getItem('userEmail'))
    : (email.value = window.localStorage.getItem('userID') + '@ejemplo.com')
telefono.value = localStorage.getItem('userPhone')
profileImage.src = localStorage.getItem('profilePic')
    ? (profileImage.src = localStorage.getItem('profilePic'))
    : (profileImage.src = 'img/img_perfil.png')

profileImage.addEventListener('click', () => {
    imageUpload.click()
})

imageUpload.addEventListener('change', () => {
    let file = imageUpload.files[0]
    let reader = new FileReader()
    reader.onload = function () {
        profileImage.src = reader.result
        localStorage.setItem('profilePic', reader.result)
    }
    reader.readAsDataURL(file)
})
