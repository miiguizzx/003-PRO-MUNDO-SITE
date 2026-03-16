function goPage(page){

document.getElementById("loading").style.display="flex"

setTimeout(function(){

window.location = page

},800)

}

function goHome(){

goPage("index.html")

}

var date = new Date("Oct 18, 2026 00:00:00").getTime()

setInterval(function(){

    var now = new Date().getTime()

    var distance = date - now

    var days = Math.floor(distance / (1000*60*60*24))

    document.getElementById("countdown").innerHTML =
    days + " DAYS"

},1000)