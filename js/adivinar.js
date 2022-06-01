const abandonar = document.querySelector("#abandonar");
const letrasErroneas = [];
let contador = 0;
let numImagen = 0;                                                           //numero de imagen
let conGanaste = 0;
let acertadas = [];
let palabraAleatoria = ["HTML","JAVASCRIPT","SINTAXIS","WHILE","DELETE","ALURA","ARRAY","DEFAULT","FUNCTION","SWITCH","CONTINUE","BREAK"];
let resultadoAleatoria = null

let insertarPalabra = localStorage.getItem("pal");
if(insertarPalabra == ""){
    let aleatorio = Math.round(Math.random()*(palabraAleatoria.length-1));
    resultadoAleatoria = palabraAleatoria[aleatorio];
}else{
    let arrayInserPalabra = insertarPalabra.split(",");
    let concatenar = palabraAleatoria.concat(arrayInserPalabra)
    let aleatorio = Math.round(Math.random()*(concatenar.length-1));
    resultadoAleatoria = concatenar[aleatorio];
    console.log(concatenar)
}



for(let i = 0; i < resultadoAleatoria.length; i++){                            
    const crearSpan = document.createElement("span");                           //crea los span correspondiente al numero de letras
    crearSpan.className = "letras";                                             //les asigna la clase letras
    crearSpan.textContent = resultadoAleatoria[i];                              //les ingesa la letra a cada span
    document.querySelector("#contenedor").appendChild(crearSpan);               //le dice que sea hijo del contenedor
}


const spanLetras = document.querySelectorAll(".letras");                        //busca todos las clases letras y trae un array
const mayusculas = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","Ñ","O","P","Q","R","S","T","U","V","W","X","Y","Z"];


window.addEventListener("keydown",function(event){                             //funcion escuchar al teclado
    for(let i = 0; i < mayusculas.length; i++){                                //
        if(String(event.key) === mayusculas[i]){                               //condicional para que la letra sea mayuscula
            aparecerLetras();
        }
    }
    aparecerLetraError();   
})


function aparecerLetras(){
    for(let i = 0; i < resultadoAleatoria.length; i++){ 
        if(numImagen < 8){                                                         //comprieba que la cantidad de errores sea menor que 8
            if(String.fromCharCode(event.keyCode) == resultadoAleatoria[i]){       //compara si lo ingresado en el teclado es igual a la letra de la palabra
                contador += 1;                                                      //cuenta cuantas veces puede entrar al condicional
                if(spanLetras[i].style.color !== "red"){                          //pregunta si el color de la letra ya es azul
                    spanLetras[i].style.color = "red";                              //si es igual le cambia el color a la letra
                    conGanaste += 1;
                    if(conGanaste === resultadoAleatoria.length){                  //pregunta si la cantidad de letras azul es igual al largo de letras de la palabra a adivinar
                        document.querySelector("#perdio").textContent = "FELICITACIONES GANASTE";
                        document.querySelector("#perdio").style.background = "#F05D5E"
                    }
                }
            }
        }
    }

    if(contador == 0){                                                         //si condicional es 0 ingresa la letra al array
        letrasErroneas.push(String(event.key));
    }else{
        contador = 0;                                                           //reinicia el contador
    }
       
}

function aparecerLetraError(){                                                 
    let result = letrasErroneas.filter((item,index)=>{                         //elimina los elementos repetidos del array
        return letrasErroneas.indexOf(item) === index;
    })
    let erroneas = result.join("")                                           //elimina la coma
    
    if(erroneas.length < 9 && conGanaste !== resultadoAleatoria.length){                                                  //comprueba que la cantidad de letras erroneas sean menor que 9
        numImagen = erroneas.length                                           //le asigna a la variable el numero de errores que ha tenido
        document.querySelector("#errores").textContent = erroneas             //le asigna el valor del array al input                                                                            
        imagenes()
    }if(erroneas.length === 8 && conGanaste !== resultadoAleatoria.length){
        document.querySelector("#perdio").textContent = "FIN DEL JUEGO"             //muestra letrero de perdio
        document.querySelector("#perdio").style.background = "#F05D5E"
        for(let i = 0; i < resultadoAleatoria.length; i++){
            spanLetras[i].style.color = "blue";
        }
    }
}

abandonar.addEventListener("click",function(event){
    event.preventDefault();
    location.assign("https://kamilo1000.github.io/challenge_2/iniciar.html")  
})

function imagenes(){
    const imagen = document.querySelector("#imag")                                //captura la imagen
    imagen.src = "imagenes/img"+numImagen+".png"                    //cambia la direccion dependiendo del numero que tenga asignada la variable numImagen
}

