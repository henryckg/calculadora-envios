// Calculadora de envíos

//Declaro variable global
let resultado


//Funciones

function calcularEnvio(tarifaEnvio){    

    do{
        //Se solicitan dimensiones y peso del paquete
        let alto = parseFloat(prompt("Ingrese el alto del paquete (cm)"))
        let ancho = parseFloat(prompt("Ingrese el ancho del paquete (cm)"))
        let largo = parseFloat(prompt("Ingrese el largo del paquete (cm)"))
        let peso = parseFloat(prompt("Ingrese el peso del paquete (kg)"))

        let pesoVolumetrico = (alto * ancho * largo) / 5000

        //Para el cáculo de envío se toma en cuenta el número mayor entre peso y peso volumétrico
        if (peso >= pesoVolumetrico){
            resultado = peso * parseFloat(tarifaEnvio)
        } else if (peso < pesoVolumetrico){
            resultado = pesoVolumetrico * tarifaEnvio
        } else{
            alert("Hay alguna medida que no corresonde a un valor númerico. Haga la operación nuevamente")
        }
    } while (isNaN(resultado))
}

const suma = function (a, b) { return a + b}
const seguro = function (x) { return x * 10/100 }


//Inicio del simulador

let tipoEnvio = prompt("Ingrese el tipo de envío que desee: \nTerrestre o Aéreo")

while (tipoEnvio != "terrestre" && tipoEnvio != "Terrestre" && tipoEnvio != "aéreo" && tipoEnvio != "Aéreo" && tipoEnvio != "aereo" && tipoEnvio != "Aereo"){
    tipoEnvio = prompt("Tipo de envío no válido. Reintente entre: terrestre / aéreo")
}

switch (tipoEnvio) {
    case "terrestre":
        calcularEnvio(5)
        break;
    case "Terrestre":
        calcularEnvio(5)
        break;
    case "aéreo":
        calcularEnvio(8)
        break;
    case "Aéreo":
        calcularEnvio(8)
        break;
    case "aereo":
        calcularEnvio(8)
        break;
    case "Aereo":
        calcularEnvio(8)
        break;
    default:
        console.log("No se ha definido ningún envío")
        break;
}


//Opción para asegurar el envío

let asegurar = prompt("Desea asegurar el envío?. \nIngrese: Y ó N")

if (asegurar == "Y" || asegurar == "y"){   
    let precioProducto = parseInt(prompt("Ingrese el valor del producto en USD"))
    let nuevoPrecio = suma(resultado, seguro(precioProducto))
    alert("El valor del envío, incluyendo el seguro, es: USD " + nuevoPrecio + "\n(Monto sin seguro: USD " + resultado + ")")
    
} else if (asegurar == "N" || asegurar == "n"){
    alert("El valor del envío es: USD " + resultado + ". (Sin seguro)")
} else{
    alert("No ha ingresado una opción de seguro válida.\nEl valor del envío es USD " + resultado + ". (Sin seguro) ")
}