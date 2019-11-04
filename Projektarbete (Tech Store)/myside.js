var main = document.getElementById("main")

var header = document.createElement("p")
header.classList = "mysideHeader"
header.innerText = "Dina beställningar"
var orders = document.createElement("div")
orders.classList = "orders"

var logOutDiv = document.createElement("div")
logOutDiv.classList = "logOutDiv"

var logOut = document.createElement("p")
logOut.classList = "logOut"
logOut.innerText = "Logga ut"
logOutDiv.appendChild(logOut)

main.appendChild(header)
main.appendChild(logOutDiv)


