const CATEGORIES_URL = 'https://japceibal.github.io/emercado-api/cats/cat.json'
const PUBLISH_PRODUCT_URL = 'https://japceibal.github.io/emercado-api/sell/publish.json'
const PRODUCTS_URL = 'https://japceibal.github.io/emercado-api/cats_products/'
const PRODUCT_INFO_URL = 'https://japceibal.github.io/emercado-api/products/'
const PRODUCT_INFO_COMMENTS_URL = 'https://japceibal.github.io/emercado-api/products_comments/'
const CART_INFO_URL = 'https://japceibal.github.io/emercado-api/user_cart/'
const CART_BUY_URL = 'https://japceibal.github.io/emercado-api/cart/buy.json'
const EXT_TYPE = '.json'
const contenedor = document.getElementById('usuarioID')

let showSpinner = function () {
    document.getElementById('spinner-wrapper').style.display = 'block'
}

let hideSpinner = function () {
    document.getElementById('spinner-wrapper').style.display = 'none'
}

let getJSONData = function (url) {
    let result = {}
    showSpinner()
    return fetch(url)
        .then((response) => {
            if (response.ok) {
                return response.json()
            } else {
                throw Error(response.statusText)
            }
        })
        .then(function (response) {
            result.status = 'ok'
            result.data = response
            hideSpinner()
            return result
        })
        .catch(function (error) {
            result.status = 'error'
            result.data = error
            hideSpinner()
            return result
        })
}

contenedor.innerText = window.localStorage.getItem('userEmail')
    ? window.localStorage.getItem('userEmail')
    : window.localStorage.getItem('userID')

function setProdID(id) {
    localStorage.setItem('prodID', id)
    window.location = 'product-info.html'
}

function deleteID() {
    localStorage.clear()
}

if (!window.localStorage.getItem('userID')) {
    window.location = 'index.html'
}
