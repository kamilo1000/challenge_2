const guarEmpezar = document.querySelector("#guarEmpezar");
const cancelar = document.querySelector("#cancelar");
const agregarPalabra = document.querySelector("#agregarPalabra");
const otraPalabra = document.querySelector("#otra");
const palabrasNuevas = [];


guarEmpezar.addEventListener("click", function(event){
    event.preventDefault()
    capturar()
    localStorage.setItem("pal",palabrasNuevas)
    
    location.assign("https://kamilo1000.github.io/challenge_2/index.html")
})

cancelar.addEventListener("click", function(event){
    event.preventDefault()
    location.assign("https://kamilo1000.github.io/challenge_2/iniciar.html")
})

otraPalabra.addEventListener("click", function(event){
    event.preventDefault()
    capturar()
    console.log(palabrasNuevas)
})

function capturar(){
    let mayus = agregarPalabra.value.toUpperCase()
    if(agregarPalabra.value !== ""){
        palabrasNuevas.push(mayus)
        agregarPalabra.value = ""
    }
    
}

function soloLetras(e) {
    key = e.keyCode || e.which;
    tecla = String.fromCharCode(key).toLowerCase();
    letras = "áéíóúabcdefghijklmnñopqrstuvwxyz";
    especiales = [8, 37, 39, 46];

    tecla_especial = false
    for(var i in especiales) {
        if(key == especiales[i]) {
            tecla_especial = true;
            break;
        }
    }

    if(letras.indexOf(tecla) == -1 && !tecla_especial){
        return false;
    }    
}

