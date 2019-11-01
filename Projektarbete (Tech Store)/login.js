function initSite() {  
    showNumbers()
}

function showNumbers() {
    var cart = JSON.parse(localStorage.getItem("cartList"))
    if (cart){
        document.getElementById("numberOfProducts").innerText = cart.length   
    }
      
}  
    var userName = document.getElementById("username").value 
    var password = document.getElementById("password").value 

    /* Funktion för att logga in om användaren redan är skapad och finns i localstorage */    
    function logIn() {
        
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

/* var users = [
    {
        userName: "",
        password: "",
        orders: [
            {
                date: "14/03/20", 
                products: [
                    {

                    }
                ]
            }
        ]
    }
]


var loggedInUser = {

} */