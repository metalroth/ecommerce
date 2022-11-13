const cartProd = CART_INFO_URL + 25801 + EXT_TYPE

async function cart() {
    let datos = await fetch(cartProd)
    let cartInfo = await datos.json()
    info = cartInfo.articles
    showCart(info)
}

cart()

function showCart(cartInfo) {
    let name = document.getElementById('name')
    let unitPrice = document.getElementById('unitPrice')
    let imagen = document.getElementById('imagen')

    for (const info of cartInfo) {
        name.innerText += info.name
        unitPrice.innerText += info.unitCost + info.currency
        imagen.innerHTML += `<img src="${info.image}" class="w-25 h-25 image-thumbnail">`
        subtotal.innerText += info.unitCost + info.currency
        subtotal2.innerText += info.unitCost + info.currency
    }
}

function calc(info) {
    let inputVal = parseInt(document.getElementById('inputVal').value, 10)
    if (isNaN(inputVal)) {
        inputVal = 1
    }
    let result = inputVal * info[0].unitCost
    if (result === 0) {
        document.getElementById('inputVal').classList.add('border-danger')
    } else {
        document.getElementById('inputVal').classList.remove('border-danger')
    }
    subtotal2.innerText = result + 'USD'
    const radio1 = document.getElementById('flexRadioDefault1')
    const radio2 = document.getElementById('flexRadioDefault2')
    const radio3 = document.getElementById('flexRadioDefault3')
    let test = result * radio1.value
    let test2 = result * radio2.value
    let test3 = result * radio3.value
    radio1.addEventListener('click', () => {
        env.innerHTML = `<small> ${Math.floor(test)}USD </small>`
        total.innerText = test + result + '' + 'USD'
    })
    radio2.addEventListener('click', () => {
        env.innerHTML = `<small> ${Math.floor(test2)}USD </small>`
        total.innerText = test2 + result + '' + 'USD'
    })
    radio3.addEventListener('click', () => {
        env.innerHTML = `<small> ${Math.floor(test3)}USD </small>`
        total.innerText = test3 + result + '' + 'USD'
    })

    if (radio1.checked) {
        total.innerText = test + result + '' + 'USD'
        env.innerHTML = `<small> ${Math.floor(test)}USD </small>`
    }

    if (radio2.checked) {
        total.innerText = test2 + result + '' + 'USD'
        env.innerHTML = `<small> ${Math.floor(test2)}USD </small>`
    }

    if (radio3.checked) {
        total.innerText = test3 + result + '' + 'USD'
        env.innerHTML = `<small> ${Math.floor(test3)}USD </small>`
    }
}

let forms = document.querySelectorAll('.needs-validation')

Array.prototype.slice.call(forms).forEach(function (form) {
    form.addEventListener('submit', function (event) {
        if (!form.checkValidity() || inputVal.value < 1) {
            event.preventDefault()
            event.stopPropagation()
            btnForm.classList.add('btn-danger')
            btnForm.classList.remove('btn-primary')
            form.classList.add('was-validated')
            botonAc.classList.add('bg-danger')
        } else {
            alert('Compra con éxito!')
        }
    })
})

document.getElementById('flexRadioDefault4').addEventListener('click', () => {
    document.getElementById('cuentaID').disabled = true
    document.getElementById('numbID').disabled = false
    document.getElementById('vencID').disabled = false
    document.getElementById('codID').disabled = false
    btnForm.classList.remove('btn-danger')
    btnForm.classList.add('btn-success')
    document.getElementById('flexRadioDefault5Label').classList.add('text-muted')
    document.getElementById('flexRadioDefault4Label').classList.remove('text-muted')
})

document.getElementById('flexRadioDefault5').addEventListener('click', () => {
    document.getElementById('numbID').disabled = true
    document.getElementById('vencID').disabled = true
    document.getElementById('codID').disabled = true
    document.getElementById('cuentaID').disabled = false
    btnForm.classList.remove('btn-danger')
    btnForm.classList.add('btn-success')
    document.getElementById('flexRadioDefault4Label').classList.add('text-muted')
    document.getElementById('flexRadioDefault5Label').classList.remove('text-muted')
})
