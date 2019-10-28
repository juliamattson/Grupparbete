
function initSite() {
    addProductsToWebpage();   
    showNumbers()
    // This would also be a good place to initialize other parts of the UI
}

/** Uses the loaded products data to create a visible product list on the website */
function addProductsToWebpage() {
    var main = document.getElementsByTagName("main")[0]
    main.innerHTML = ""
    var listOfProducts = JSON.parse(localStorage.getItem("cartList"))
    
    var container = document.createElement("div") 
    container.classList = "container"

    function createHeader() {
        var headerDiv = document.createElement("div")
        headerDiv.classList = "headerDiv"

        var cartHeader = document.createElement("h1")
        cartHeader.classList = "cartSiteHeader"
        cartHeader.innerText = "Kundvagn"

        var headerIcon = document.createElement("i")
        headerIcon.classList = "fas fa-shopping-cart"

        headerDiv.appendChild(headerIcon)
        headerDiv.appendChild(cartHeader)

        main.appendChild(headerDiv)
    }
    createHeader()

    for(var i = 0; i < listOfProducts.length; i++) {
        var selectedProduct = listOfProducts[i]

        var productContainer = document.createElement("div")
        productContainer.classList = "productContainer"

        var productName = document.createElement("h2")
        productName.innerText = selectedProduct.title

        var image = document.createElement("img")
        image.src = "/assets/" + selectedProduct.image

        var price = document.createElement("p")
        price.classList = "price"
        price.innerText = selectedProduct.price

        var button = document.createElement("div")
        button.classList = "button2"
        button.data = i
        button.onclick = function() {
            removeProductFromCart(this.data)
        }

        var icon = document.createElement("i")
        icon.classList = "far fa-trash-alt"

        var buttonText = document.createElement("p")
        buttonText.innerText = "Ta bort"
        button.appendChild(icon)
        button.appendChild(buttonText)

        productContainer.appendChild(image)
        productContainer.appendChild(productName)
        productContainer.appendChild(price)
        productContainer.appendChild(button)


        container.appendChild(productContainer)
        showNumbers()  

        var bottomDiv = document.createElement("div")
        bottomDiv.classList = "bottomDiv"
        var confirmButton = document.createElement("div")
        confirmButton.classList = "confirmButton"
        
        var confirmText = document.createElement("p")
        confirmText.innerText = "Slutför ditt köp"
        confirmText.classList = "confirmText"

        var confirmIcon = document.createElement("i")
        confirmIcon.classList = "fas fa-check"
        confirmButton.appendChild(confirmIcon) 
        confirmButton.appendChild(confirmText) 
        bottomDiv.appendChild(confirmButton)  

    }

    main.appendChild(container)
    main.appendChild(bottomDiv)
    
    // Check your console to see that the products are stored in the listOfProducts varible.
    console.log(listOfProducts);
    

    // Add your code here, remember to brake your code in to smaller function blocks
    // to reduce complexity and increase readability. Each function should have
    // an explainetory comment like the one for this function, see row 22.
    
    // TODO: Remove the console.log and these comments when you've read them.
    
}

function removeProductFromCart(index){
    console.log(index)

    var cart = JSON.parse(localStorage.getItem("cartList"))

    cart.splice(index, 1)    
    
    // spara cart till localstorage
    localStorage.setItem("cartList", JSON.stringify(cart))
    showNumbers()
    addProductsToWebpage() 
    emptyCart()
}


function showNumbers() {
    var cart = JSON.parse(localStorage.getItem("cartList"))
    if (cart){
        document.getElementById("numberOfProducts").innerText = cart.length   
    }
      
}  

function emptyCart() {
var cart = JSON.parse(localStorage.getItem("cartList"))

if(cart == 0) {
     var empty = document.createElement("p")
     empty.innerText = "Kundvagnen är tom"
    }
    main.appendChild(empty)
}


    

