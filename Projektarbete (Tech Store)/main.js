var listOfProducts;

function loadProducts() {
    fetch("./products.json")
    .then(function(response) {
        return response.json();
    })
    .then(function(products) {
        listOfProducts = products;
        addProductsToWebpage();
    });
}

function initSite() {
    loadProducts();   
    showNumbers() 
}

/** Funktion för att göra produkterna synliga på hemsidan */
function addProductsToWebpage() {

    var body = document.getElementsByTagName("body")[0] /* Plockar ut det första ur listan */
    
    var container = document.createElement("div") 
    container.classList = "container"

    for(var i = 0; i < listOfProducts.length; i++) {
        var selectedProduct = listOfProducts[i]

        var productContainer = document.createElement("div")
        productContainer.classList = "productContainer"

        var productName = document.createElement("h2")
        productName.innerText = selectedProduct.title

        var productDescription = document.createElement("div")
        productDescription.classList = "description"
        productDescription.innerText = selectedProduct.description

        var image = document.createElement("img")
        image.src = "/assets/" + selectedProduct.image

        var price = document.createElement("div")
        price.classList = "price"
        price.innerText = selectedProduct.price + " " + "kr"

        var button = document.createElement("div")
        button.classList = "button"
        button.data = selectedProduct
        button.onclick = function() {
            addProductToCart(this.data)
        }

        var icon = document.createElement("i")
        icon.classList = "fas fa-cart-arrow-down"

        var buttonText = document.createElement("p")
        buttonText.innerText = "Lägg till i kundvagnen"
        button.appendChild(icon)
        button.appendChild(buttonText)

        productContainer.appendChild(productName)
        productContainer.appendChild(productDescription)
        productContainer.appendChild(image)
        productContainer.appendChild(price)
        productContainer.appendChild(button)


        container.appendChild(productContainer)
        showNumbers()
    }
    
    var main = document.getElementsByTagName("main")[0]
    main.appendChild(container)
}

/* Funktion för att lägga till produkter i kundvagnen i localstorage */
function addProductToCart(product){

    var cart = JSON.parse(localStorage.getItem("cartList"))

    if(cart) {
        // Här finns carten
        cart.push(product)
    } else {
        // Här finns inte carten
        cart = []
        cart.push(product)
    }


    // spara cart till localstorage
    localStorage.setItem("cartList", JSON.stringify(cart))
    showNumbers() 
}

/* Funktion som räknar och visar antalet produkter som är tillagda i kundvagnen */
function showNumbers() {
    var cart = JSON.parse(localStorage.getItem("cartList"))
    if (cart){
        document.getElementById("numberOfProducts").innerText = cart.length   
    } 
}  



