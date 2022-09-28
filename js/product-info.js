const URL_PROD = PRODUCT_INFO_URL + localStorage.getItem('prodID') + EXT_TYPE,
    container = document.getElementById('infoContainer'),
    URL_COMS =
        PRODUCT_INFO_COMMENTS_URL + localStorage.getItem('prodID') + EXT_TYPE,
    combox = document.getElementById('comments'),
    picContainer = document.getElementById('picContainer'),
    container2 = document.getElementById('test2')

async function prodJson() {
    let datos = await fetch(URL_PROD)
    let item = await datos.json()
    let pics = item.images
    mostrarFotos(pics)
    mostrarInfo(item)
    showRelated(item)
}
prodJson()

function mostrarInfo(item) {
    const { name, description, cost, currency, soldCount } = item
    container.innerHTML += ` <div class="list-group-item list-group-item-action">
    <div class="">
        <div class="d-flex w-100 justify-content-between">
           <h4 class="mb-1">${name}</h4>
            <small class="precio-auto"> Precio: ${cost} ${currency}</small>
            <small class="precio-auto">${soldCount} Vendidos hasta ahora!</small>
        </div>
        <p class="mb-1"><b> ${description}</p> 
    </div>`
}

function mostrarFotos(pics) {
    console.log(pics[0])
    let htmlContentToAppend = ''
    htmlContentToAppend += `
    <div class="container ">
        <div class="carousel-item active">
        <img src="${pics[0]}" class="img-thumbnail" alt="...">
      </div>
        <div class="carousel-item ">
        <img src="${pics[1]}" class="img-thumbnail" alt="...">
      </div>
        <div class="carousel-item ">
        <img src="${pics[2]}" class="img-thumbnail" alt="...">
      </div>
        <div class="carousel-item ">
        <img src="${pics[3]}" class="img-thumbnail" alt="...">
      </div>
      </div>
        `
    picContainer.innerHTML += htmlContentToAppend
}

async function comsJson() {
    let datos = await fetch(URL_COMS)
    let coms = await datos.json()
    showComments(coms)
}
comsJson()

function showComments(coms) {
    for (let item of coms) {
        combox.innerHTML += `
          <div class="card text-center list-group-item">
          <h5 class="card-header">${item.user}</h5>
            <div class="card-body">
              <h6 class="card-subtitle mb-2 text-muted"> ${item.dateTime}</h6>
              <p class="card-text">${item.description}</p>
            </div>
            <div> ${loadStarRating(item.score)} </div>
          </div>
      
        `
    }
}

function showRelated(rel) {
    let htmlContentToAppend = ''
    const { relatedProducts } = rel
    for (const item of relatedProducts) {
        htmlContentToAppend += `<div class="card" style="width: 18rem;">
        <img class="card-img-top" src="${item.image}" alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title">${item.name}</h5>
          <a onclick="setProdID(${item.id})" class="btn btn-primary">Ver producto</a>
        </div>
      </div>
                            `
    }
    container2.innerHTML = htmlContentToAppend
}

function loadStarRating(rating) {
    let checkedStarCount = rating
    let uncheckedStarCount = 5 - rating

    let checkedStarSymbol = `<span class="fa fa-star checked"></span>`
    let uncheckedStarSymbol = `<span class="fa fa-star"></span>`

    let htmlContentToAppend = ''

    htmlContentToAppend +=
        checkedStarSymbol.repeat(checkedStarCount) +
        uncheckedStarSymbol.repeat(uncheckedStarCount)

    return htmlContentToAppend
}
/* 
<div class="col-2">
        <img src="${pic}" class="img-thumbnail info-desc"> 
    </div> */
