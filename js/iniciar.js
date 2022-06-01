const iniJuego = document.querySelector("#iniJuego");
const agrePalabra = document.querySelector("#agrePalabra")

iniJuego.addEventListener("click",function(event){
    event.preventDefault()
    location.assign("file:///D:/Escritorio/curso%20oracle%20latam/challenge_2/index.html")
})

agrePalabra.addEventListener("click", function(event){
    event.preventDefault()
    location.assign("file:///D:/Escritorio/curso%20oracle%20latam/challenge_2/nuePalabra.html")
})