const iniJuego = document.querySelector("#iniJuego");
const agrePalabra = document.querySelector("#agrePalabra")

iniJuego.addEventListener("click",function(event){
    event.preventDefault()
    location.assign("http://127.0.0.1:5500/index.html")
})

agrePalabra.addEventListener("click", function(event){
    event.preventDefault()
    location.assign("http://127.0.0.1:5500/nuePalabra.html")
})