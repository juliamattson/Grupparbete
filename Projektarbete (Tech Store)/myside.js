addOrdersToWebpage()

function addOrdersToWebpage(){
    var main = document.getElementById("main")

    var header = document.createElement("p")
    header.classList = "mysideHeader"
    header.innerText = "Dina beställningar"


    var logOutDiv = document.createElement("div")
    logOutDiv.classList = "logOutDiv"
    /* Funktion för att logga ut inloggad användare */
    logOutDiv.onclick = function(){
        localStorage.removeItem("loggedInUser")
        alert("Du är nu utloggad!")
        window.location = "login.html"
    }
    var logOut = document.createElement("p")
    logOut.classList = "logOut"
    logOut.innerText = "Logga ut"
    logOutDiv.appendChild(logOut)
    
    main.appendChild(header)
    
    var userOrders = JSON.parse(localStorage.getItem("loggedInUser")).orders

    userOrders.forEach(order => {

        // loop för att printa ut datum
        var orderDay = document.createElement("div")
        var orderDiv = document.createElement("div")
        var productDiv = document.createElement("div")
        orderDiv.classList = "orderDiv"
        orderDay.classList = "orderDay"
        productDiv.classList = "productDiv"
        var date = new Date(order.date)
        orderDay.innerHTML = "Datum:" + " " + date.toLocaleDateString()
        productDiv.appendChild(orderDay)
        productDiv.appendChild(orderDiv)
        main.appendChild(productDiv)
        order.products.forEach(product => {
            // loop för att printa ut produkterna
            var orderProduct = document.createElement("div")
            orderProduct.classList = "orderProduct"

            var title = document.createElement("h3")
            title.innerText = product.title
            
            var image = document.createElement("img")
            image.src = "./assets/" + product.image
            image.classList = "orderImage"

            var price = document.createElement("p")
            price.innerText = product.price + " " + "kr"

            orderProduct.appendChild(title)
            orderProduct.appendChild(image)            
            orderProduct.appendChild(price)
            orderDiv.appendChild(orderProduct)
        });
    });
    main.appendChild(logOutDiv)
}

