function initSite() {  
    showNumbers()
}

/* Funktion som räknar och visar antalet produkter som är tillagda i kundvagnen */
function showNumbers() {
    var cart = JSON.parse(localStorage.getItem("cartList"))
    if (cart){
        document.getElementById("numberOfProducts").innerText = cart.length   
    }      
} 

/* Funktion för att logga in om användaren redan är skapad och finns i localstorage */    
function logIn() {
    var userList = JSON.parse(localStorage.getItem("userList"))
    var username = document.getElementById("username").value 
    var password = document.getElementById("password").value 

    if(!userList) {
        alert("Registrera användare!")
    } else {
            for (var i = 0; i < userList.length; i++) {
                if(userList && username == userList[i].userName && password == userList[i].password){
                    localStorage.setItem("loggedInUser", JSON.stringify(userList[i]))
                    alert("Du är inloggad!")
                    window.location = "myside.html"
                    return
                }else {
                    alert("Fel användarnamn eller lösenord! Försök igen.")
                } 
            }    
        }
}
    
/* Funktion för att skapa ny användare och spara till en lista i localstorage över användare */
function createUser() { 
    var username = document.getElementById("createUser").value 
    var password = document.getElementById("createPassword").value 

    var user = {
        userName: username,
        password: password,
        orders: []
    }

    var userList = JSON.parse(localStorage.getItem("userList"))

    if(userList) {
        userList.push(user)
        alert("Registrering lyckades!")
    } else {
        userList = []
        userList.push(user)
        alert("Registrering lyckades!")
    } 
    localStorage.setItem("userList", JSON.stringify(userList))
}

/* Funktion för att vid inloggning ska man hamna på "mina sidor" och om man inte är inloggad måste man göra det först och hamnar då på logga-in-sidan */
function loginIcon() {
    var loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"))
    console.log(loggedInUser)
    if(loggedInUser){
        window.location = "myside.html"
    } else {
        window.location = "login.html"
    }
}
