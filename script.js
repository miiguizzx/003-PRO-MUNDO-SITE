function goPage(page){

document.getElementById("loading").style.display="flex"

setTimeout(function(){

window.location = page

},100)

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

function openSearch(){
var s = document.getElementById("searchBar")
if(s.style.display == "block"){
s.style.display = "none"
}else{
s.style.display = "block"
}
}

function searchSite(event){

if(event.key === "Enter"){

let text = document
.getElementById("searchInput")
.value
.toLowerCase()



if(text.includes("hoodie")){

goPage("hoodie.html")

}

else if(text.includes("shirt")){

goPage("tshirt.html")

}

else if(text.includes("merch")){

goPage("merch.html")

}

else if(text.includes("album")){

goPage("album.html")

}

else if(text.includes("miigui")){

goPage("miigui.html")

}

else if(text.includes("trigueiroo")){

goPage("trigueiroo.html")

}

else{

alert("Nada encontrado")

}

}

}