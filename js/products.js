const container = document.getElementById('test')
const catID = document.getElementById('productID')
let datos = {}

async function catJson() {
    datos = await fetch(PRODUCTS_URL + localStorage.getItem('catID') + EXT_TYPE)
    datos = await datos.json()
    mostrarProds(datos.products)
    mostrarCats(datos.catName)
}

catJson()

function mostrarProds(dataArray) {
    for (const item of dataArray) {
        container.innerHTML +=
            ` 
    <div class="container-1">
    <img src="` +
            item.image +
            `" class="img-thumbnail" >
    <p class="precio-auto"> ${item.cost} ${item.currency} </p> 
    <div class="cajita">
    <h3 class="name-auto">` +
            item.name +
            `</h3> 
    <p class="p-auto"> ` +
            item.description +
            `</p> 
      </div>
    </div>  
    `
    }
}

function mostrarCats() {
    catID.innerHTML += datos.catName
}
