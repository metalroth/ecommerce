const container = document.getElementById('test')


async function autosJson() {
    let datos = await fetch(CARS_CATEGORIES_URL)
    datos = await datos.json()
    mostrarAutos(datos.products)
}

autosJson()




function mostrarAutos(dataArray) {
    for (const item of dataArray) {
    container.innerHTML +=` 
  
    
    <div class="container-1">
    <img src="` + item.image + `" class="imagen-auto">
    <p class="precio-auto"> ${item.cost} ${item.currency} </p> 
    <div class="cajita">
    <h3 class="name-auto">`+ item.name + `</h3> 
    <p class="p-auto"> `+ item.description +`</p> 
    </div>
    </div>
    ` 
    }
}