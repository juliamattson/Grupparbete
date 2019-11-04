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

    for (var i = 0; i < userList.length; i++) { 
        if(username == userList[i].userName && password == userList[i].password){
            localStorage.setItem("loggedInUser", JSON.stringify(userList[i]))
            alert("Du är inloggad!")
            setTimeout(() => {
                window.location = "myside.html"
            }, 2000);
            return
        } 
    }
    
    alert("Fel användarnamn eller lösenord! Försök igen.")
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
    } else {
        userList = []
        userList.push(user)
    } 

    console.log(userList)
    localStorage.setItem("userList", JSON.stringify(userList))
}
createUser()

function loginIcon() {
    var loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"))
    console.log(loggedInUser)
    if(loggedInUser){
        window.location = "myside.html"
    } else {
        alert("Du måste logga in!")
        window.location = "login.html"
    }
}
