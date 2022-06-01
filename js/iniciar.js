const iniJuego = document.querySelector("#iniJuego");
const agrePalabra = document.querySelector("#agrePalabra")

iniJuego.addEventListener("click",function(event){
    event.preventDefault()
    location.assign("https://kamilo1000.github.io/challenge_2/index.html")
})

agrePalabra.addEventListener("click", function(event){
    event.preventDefault()
    location.assign("https://kamilo1000.github.io/challenge_2/nuevaPalabra.html")
})