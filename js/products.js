const ORDER_ASC_BY_COST = 'AZ',
    ORDER_DESC_BY_COST = 'ZA',
    ORDER_BY_PROD_COUNT = 'Cant.'
let currentProdsArray = []
/* let prods = {} */
let currentSortCriteria = undefined
let minCount = undefined
let maxCount = undefined
const URL = PRODUCTS_URL + localStorage.getItem('catID') + EXT_TYPE,
    sortInput = document.getElementById('sortFast'),
    container = document.getElementById('test'),
    catID = document.getElementById('productID')

async function catJson() {
    let datos = await fetch(URL)
    prods = await datos.json()
    currentProdsArray = prods.products
    mostrarProds()
    catID.innerText += `${prods.catName}`
}
catJson()

function mostrarProds() {
    let htmlContentToAppend = ''
    for (let item of currentProdsArray) {
        if (
            (minCount == undefined ||
                (minCount != undefined && parseInt(item.cost) >= minCount)) &&
            (maxCount == undefined ||
                (maxCount != undefined && parseInt(item.cost) <= maxCount))
        )
            htmlContentToAppend += `
            <div onclick="setProdID(${item.id})" class="list-group-item list-group-item-action cursor-active">
                <div class="row">
                    <div class="col-3">
                        <img src="${item.image}" alt="${item.description}" class="img-thumbnail">
                    </div>
                    <div class="col">
                        <div class="d-flex w-100 justify-content-between">
                            <h4 class="mb-1">${item.name}</h4>
                            <small class="precio-auto">${item.cost} ${item.currency}</small>
                        </div>
                        <p class="mb-1">${item.description}</p>
                    </div>
                </div>
            </div>
            `
    }
    container.innerHTML = htmlContentToAppend
}

sortInput.addEventListener('input', (event) => {
    const filtrado = prods.products.filter((value) =>
        value.name.toLowerCase().includes(event.target.value.toLowerCase())
    )
    currentProdsArray = filtrado
    mostrarProds()
})

document
    .getElementById('clearRangeFilter')
    .addEventListener('click', function () {
        document.getElementById('rangeFilterCountMin').value = ''
        document.getElementById('rangeFilterCountMax').value = ''

        minCount = undefined
        maxCount = undefined

        mostrarProds()
    })

document
    .getElementById('rangeFilterCount')
    .addEventListener('click', function () {
        minCount = document.getElementById('rangeFilterCountMin').value
        maxCount = document.getElementById('rangeFilterCountMax').value

        if (
            minCount != undefined &&
            minCount != '' &&
            parseInt(minCount) >= 0
        ) {
            minCount = parseInt(minCount)
        } else {
            minCount = undefined
        }

        if (
            maxCount != undefined &&
            maxCount != '' &&
            parseInt(maxCount) >= 0
        ) {
            maxCount = parseInt(maxCount)
        } else {
            maxCount = undefined
        }
        mostrarProds()
    })

document.getElementById('sortAsc').addEventListener('click', function () {
    sortAndShowProds(ORDER_ASC_BY_COST)
})

document.getElementById('sortDesc').addEventListener('click', function () {
    sortAndShowProds(ORDER_DESC_BY_COST)
})

document.getElementById('sortAmount').addEventListener('click', () => {
    sortAndShowProds(ORDER_BY_PROD_COUNT)
})

/**
 * It sorts the products by name, by number of sales, and by cost
 * @param criteria - ORDER_ASC_BY_NAME, ORDER_DESC_BY_NAME, ORDER_BY_PROD_COUNT
 * @param array - the array of products to be sorted
 * @returns The result of the sort function.
 */
function sortProds(criteria, array) {
    let result = []
    if (criteria === ORDER_ASC_BY_COST) {
        result = array.sort(function (a, b) {
            if (a.cost < b.cost) {
                return -1
            }
            if (a.cost > b.cost) {
                return 1
            }
            return 0
        })
    } else if (criteria === ORDER_DESC_BY_COST) {
        result = array.sort(function (a, b) {
            if (a.cost > b.cost) {
                return -1
            }
            if (a.cost < b.cost) {
                return 1
            }
            return 0
        })
    } else if (criteria === ORDER_BY_PROD_COUNT) {
        result = array.sort(function (a, b) {
            let aCount = parseInt(a.soldCount)
            let bCount = parseInt(b.soldCount)

            if (aCount > bCount) {
                return -1
            }
            if (aCount < bCount) {
                return 1
            }
            return 0
        })
    }

    return result
}

function sortAndShowProds(sortCriteria) {
    currentSortCriteria = sortCriteria
    currentProdsArray = sortProds(currentSortCriteria, currentProdsArray)

    mostrarProds()
}
