function goPage(page)
{
    document.getElementById("loading").style.display = "flex"
    setTimeout(function()
    {
        window.location = page}, 700)
}

function goHome()
{
    goPage("index.html")
}

function openSearch()
{
    var s = document.getElementById("searchBar")
    if(s.style.display == "block")
        {
            s.style.display = "none"
        }else{
            s.style.display = "block"}
}

function searchSite(event)
{
    if(event.key === "Enter")
        {
            let text = document
            .getElementById("searchInput")
            .value
            .toLowerCase()
            if(text.includes("hoodie"))
                {
                    goPage("hoodie.html")
                }
                else if(text.includes("shirt")){
                    goPage("tshirt.html")
                }
                else if(text.includes("merch"))
                    {
                        goPage("merch.html")
                    }
                    else if(text.includes("album"))
                        {
                            goPage("album.html")
                        }
                        else if(text.includes("miigui"))
                            {
                                goPage("miigui.html")
                            }
                            else if(text.includes("trigueiroo"))
                                {
                                    goPage("trigueiroo.html")
                                }
                                else
                                    {
                                        alert("Nada encontrado")
                                    }
                                }
}

var date = new Date("May 30, 2026 16:00:00").getTime()

setInterval(function()
{
    var now = new Date().getTime()
    var distance = date - now
    var days = Math.floor(distance / (1000 * 60 * 60 * 24))
    let countdown = document.getElementById("countdown")
    if(countdown)
        {
            countdown.innerHTML = days + " DIAS"
        }
},1000)

/* ========================= */
/* INSTAGRAM BUY */
/* ========================= */

function buyInstagram()
{
    const appLink = "instagram://user?username=do003promundo"
    const webLink = "https://www.instagram.com/do003promundo/"
    
    /* MOBILE */
    if(/Android|iPhone|iPad|iPod/i.test(navigator.userAgent))
        {
            window.location = appLink
            setTimeout(function()
            {
                window.location = webLink
            },1000)
        }
        /* PC */
        else
            {
                window.open(webLink, "_blank")
            }
}
