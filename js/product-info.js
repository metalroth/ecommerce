const URL_PROD = PRODUCT_INFO_URL + localStorage.getItem('prodID') + EXT_TYPE,
    container = document.getElementById('infoContainer'),
    URL_COMS =
        PRODUCT_INFO_COMMENTS_URL + localStorage.getItem('prodID') + EXT_TYPE,
    combox = document.getElementById('comments'),
    picContainer = document.getElementById('picContainer'),
    stars = document.getElementsByClassName('fa fa-star')

async function prodJson() {
    let datos = await fetch(URL_PROD)
    item = await datos.json()
    pics = item.images
    mostrarFotos()
    mostrarInfo()
}
prodJson()

function mostrarInfo() {
    const { name, description, cost, currency, soldCount } = item
    container.innerHTML += ` <div class="list-group-item list-group-item-action cursor-active">
    <div class="">
        <div class="d-flex w-100 justify-content-between">
            <h4 class="mb-1">${name}</h4>
            <small class="precio-auto"> Precio: ${cost} ${currency}</small>
            <small class="precio-auto">${soldCount} Vendidos hasta ahora!</small>
        </div>
        <p class="mb-1 "><b> ${description}</p> 
    </div>`
}

function mostrarFotos() {
    pics.forEach((element) => {
        picContainer.innerHTML += ` <div class="col-3">
        <img src="${element}" class="img-thumbnail info-desc"> 
    </div> `
    })
}

async function comsJson() {
    let datos = await fetch(URL_COMS)
    coms = await datos.json()
    showComments()
}
comsJson()

function showComments() {
    for (let item of coms) {
        combox.innerHTML += `
        <div class="list-group-item list-group-item-action cursor-active">
        <div class="">
            <div class="d-flex w-100 justify-content-between">
                <h4 class="precio-auto">${item.user}</h4> 
                <div class="mb-1"> <b> Fecha de publicación: </b> ${item.dateTime}</div>
                <div  class="precio-auto punt">Puntuación: ${item.score}
                <span class="fa fa-star"></span>
                <span class="fa fa-star"></span>
                <span class="fa fa-star"></span>
                <span class="fa fa-star"></span>
                <span class="fa fa-star"></span>
                </div>
                
                
            </div>
            <div class=""> ${item.description}</div>
        </div>
        `
    }
}
