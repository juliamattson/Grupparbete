
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

    if(listOfProducts && listOfProducts.length) {

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
            price.innerText = selectedProduct.price + " " + "kr"
    
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

            var summa = document.createElement("div")
            summa.classList = "summa"
            var summaText = document.createElement("p")
            summaText.classList = "summaText"
            summaText.innerText = "Totalt pris: " + totalCart() +  " " + "kr"
            
            summa.appendChild(summaText)
        }

        
        var bottomDiv = document.createElement("div")
        bottomDiv.classList = "bottomDiv"
        var confirmButton = document.createElement("div")
        confirmButton.classList = "confirmButton"
        confirmButton.onclick = function() {
            alert("Tack för ditt köp!")
        }
        
        var confirmText = document.createElement("p")
        confirmText.innerText = "Slutför ditt köp"
        confirmText.classList = "confirmText"

        var confirmIcon = document.createElement("i")
        confirmIcon.classList = "fas fa-check"
        confirmButton.appendChild(confirmIcon) 
        confirmButton.appendChild(confirmText) 
        bottomDiv.appendChild(confirmButton)
        
        main.appendChild(container)
        main.appendChild(summa)
        main.appendChild(bottomDiv)
        
    } else  {
        var emptyCartFeedback = document.createElement("h4")
        emptyCartFeedback.innerText = "Din kundvagn är tom"
        emptyCartFeedback.classList = "emptyCart"
        main.appendChild(emptyCartFeedback)
    }   
}

function removeProductFromCart(index){
    console.log(index)

    var cart = JSON.parse(localStorage.getItem("cartList"))

    cart.splice(index, 1)    
    
    // spara cart till localstorage
    localStorage.setItem("cartList", JSON.stringify(cart))
    showNumbers()
    addProductsToWebpage() 
}

function totalCart() {
    var cart = JSON.parse(localStorage.getItem("cartList"))
    var total = 0;
    for (var i = 0; i < cart.length; i++){
        total += cart[i].price;
    }
    return total
}

function showNumbers() {
    var cart = JSON.parse(localStorage.getItem("cartList"))
    if (cart){
        document.getElementById("numberOfProducts").innerText = cart.length   
    }
      
}  


    

