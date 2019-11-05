
function initSite() {
    addProductsToWebpage();   
    showNumbers()
}

/** Funktion för att göra produkterna synliga på hemsidan */
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
        confirmButton.onclick = function() { /* Funktion för att tömma kundvagnen vid slutfört köp */
            var loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"))
            console.log(loggedInUser)
            if(loggedInUser) {
                addCartToUser(loggedInUser)
            }
            alert("Tack för ditt köp!")
            localStorage.removeItem("cartList")
            return window.location = "cart.html"    
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

function addCartToUser(loggedInUser) {
    var cart = JSON.parse(localStorage.getItem("cartList"))
    var userList = JSON.parse(localStorage.getItem("userList"))

    console.log(cart)

    var orderToSave = {
        date: new Date(),
        products: cart
    }

    loggedInUser.orders.push(orderToSave)

    var indexToRemove
    
    userList.forEach((user, i) => {
        if(user.username == loggedInUser.username) {
            indexToRemove = i
        }    
    });
    
    userList[indexToRemove] = loggedInUser
    
    localStorage.setItem("userList", JSON.stringify(userList))
    localStorage.setItem("loggedInUser", JSON.stringify(loggedInUser))
}

/* Funktion för att ta bort produkt från kundvagn */
function removeProductFromCart(index){
    var cart = JSON.parse(localStorage.getItem("cartList"))
    cart.splice(index, 1)    
    localStorage.setItem("cartList", JSON.stringify(cart))
    showNumbers()
    addProductsToWebpage() 
}

/* Funktion för att räkna ut totalbeloppet av kundvagnens innehåll */
function totalCart() {
    var cart = JSON.parse(localStorage.getItem("cartList"))
    var total = 0;
    for (var i = 0; i < cart.length; i++){
        total += cart[i].price;
    }
    return total
}

/* Funktion som räknar och visar antalet produkter som är tillagda i kundvagnen */
function showNumbers() {
    var cart = JSON.parse(localStorage.getItem("cartList"))
    if (cart){
        document.getElementById("numberOfProducts").innerText = cart.length   
    }
}  
