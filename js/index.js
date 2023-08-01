////// CALCULADORA DE ENVIOS 

////// Declaracion de variables y constantes
let resultado
let tarifaEnvio 

const milisegundosPorDia = 86400000
const plazoTerrestre = 5 * milisegundosPorDia
const plazoAereo = 3 * milisegundosPorDia

////// Array vacio donde se van ingresando los productos

const productos = []

////// Clase para productos

class Producto{
    constructor (nombre, valor, alto, ancho, largo, peso){
        this.nombre = nombre;
        this.valor = valor;
        this.alto = alto;
        this.ancho = ancho;
        this.largo = largo;
        this.peso = peso;
        this.pesoVol = (this.alto * this.ancho * this.largo) / 5000;
    }
}

////// Funciones

function ingresarProducto(){
//Función para ingresar productos, se solicita el nombre, valor, alto, largo y peso
    let newValor
    let newAlto
    let newLargo
    let newPeso
    let newNombre = prompt("Ingrese nombre del producto")
    
    do {
        newValor = parseFloat(prompt("Ingrese el valor del producto en USD"));
        if (isNaN(newValor)){
            alert("No ha ingresado un valor númerico. Reintente")
        }
    } while (isNaN(newValor))
    do {
        newAlto = parseFloat(prompt("Ingrese el alto del paquete (cm)"))
        if (isNaN(newAlto)){
            alert("No ha ingresado un valor númerico. Reintente")
        }
    } while (isNaN(newAlto))
    do {
        newAncho = parseFloat(prompt("Ingrese el ancho del paquete (cm)"))
        if (isNaN(newAncho)){
            alert("No ha ingresado un valor númerico. Reintente")
        }
    } while (isNaN(newAncho))
    do {
        newLargo = parseFloat(prompt("Ingrese el largo del paquete (cm)"))
        if (isNaN(newLargo)){
            alert("No ha ingresado un valor númerico. Reintente")
        }
    } while (isNaN(newLargo))
    do {
        newPeso = parseFloat(prompt("Ingrese el peso del paquete (kg)"))
        if (isNaN(newPeso)){
            alert("No ha ingresado un valor númerico. Reintente")
        }
    } while (isNaN(newPeso))
//Mediante una clase se van ingresando los productos nuevos al array vacío "productos"
    productos.push(new Producto(newNombre, newValor, newAlto, newAncho, newLargo, newPeso))
}

////// Funciones flecha para operaciones básicas
const suma = (a, b) => a + b
const seguro =  (x) => x * 10/100


function calcularFechaEnvio(plazo){
//Función para generar fecha de entrega según el tipo de envío. El parámetro "plazo" será definido por las constantes "plazoTerrestre" y "plazoAereo"
    const hoy = new Date
    const fechaFutura = new Date (hoy.getTime() + plazo)

    return fechaFutura.toLocaleDateString()
}


/////// INICIO DEL SIMULADOR

//Se pide el tipo de envío: terrestre o aéreo, de acuerdo al tipo se definirá la tarifa de envío y se llama la función para ingresar productos
let tipoEnvio = prompt("Ingrese el tipo de envío que desee: \nTerrestre o Aéreo").toLowerCase()

while (tipoEnvio != "terrestre" && tipoEnvio != "aéreo" && tipoEnvio != "aereo"){
    tipoEnvio = prompt("Tipo de envío no válido. Reintente entre: terrestre / aéreo")
}

switch (tipoEnvio) {
    case "terrestre":
        tarifaEnvio = 5
        ingresarProducto()
        break;
    case "aéreo":
        tarifaEnvio = 8
        ingresarProducto()
        break;
    case "aereo":
        tarifaEnvio = 8
        ingresarProducto()
        break;
    default:
        console.log("No se ha definido ningún envío")
        break;
}

//Se pregunta si se quiere ingresar otro producto
let otroProducto = prompt("Quieres ingresar otro producto? Ingrese: Y\nDe lo contrario, oprima 'Cancelar'")

while(otroProducto == "y" || otroProducto == "Y"){
    ingresarProducto()
    otroProducto = prompt("Quieres ingresar otro producto? Ingrese: Y\nDe lo contrario, oprima 'Cancelar'")
}

//Console para mostrar el array de productos ingresados.
console.log(productos)


//Se utilizan métodos para sumar parámetros de los objetos y utilizarlos después.
const totalPeso = productos.reduce((acumulador, prod) => acumulador + prod.peso, 0)
console.log(`El peso total es: ${totalPeso.toFixed(2)} kg`)

const totalPesoVol = productos.reduce((acumulador, prod) => acumulador + prod.pesoVol, 0)
console.log(`El peso volumétrico total es: ${totalPesoVol.toFixed(2)} kg`)

const totalValor = productos.reduce((acumulador, prod) => acumulador + prod.valor, 0)
console.log(`El valor total de los productos es: USD $${totalValor.toFixed(2)}`)

//Condicional para definir si se utiliza el peso o el volumen para la tarifa de envío.
if (totalPeso >= totalPesoVol){
    resultado = totalPeso * tarifaEnvio
} else {
    resultado = totalPesoVol * tarifaEnvio
}


//Se solicita si se desea asegurar el envío.
let asegurado = prompt("Desea asegurar el envío?. \nIngrese: Y ó N")

//Cadena de condicionales para mostrar resultado final (valor de envío, seguro y fecha de entrega)
let valorAsegurado = suma(resultado, seguro(totalValor))

if ((asegurado == "Y" || asegurado == "y") && tipoEnvio == "terrestre"){   
    
    alert(`El valor del envío, incluyendo el seguro, es: USD $${valorAsegurado.toFixed(2)}
(Monto sin seguro: USD $${resultado.toFixed(2)})    
Fecha máxima de entrega: ${calcularFechaEnvio(plazoTerrestre)}`)

} else if ((asegurado == "Y" || asegurado == "y") && (tipoEnvio == "aereo" || tipoEnvio =="aéreo")){   
    
    alert(`El valor del envío, incluyendo el seguro, es: USD $${valorAsegurado.toFixed(2)}
(Monto sin seguro: USD $${resultado.toFixed(2)})    
Fecha máxima de entrega: ${calcularFechaEnvio(plazoAereo)}`)

} else if ((asegurado == "N" || asegurado == "n" || asegurado == null) && tipoEnvio == "terrestre"){
    
    alert(`El valor del envío es: USD $${resultado.toFixed(2)}. (Sin seguro)
Fecha máxima de entrega: ${calcularFechaEnvio(plazoTerrestre)}`)

} else if ((asegurado == "N" || asegurado == "n" || asegurado == null) && (tipoEnvio == "aereo" || tipoEnvio == "aéreo")){
    
    alert(`El valor del envío es: USD $${resultado.toFixed(2)}. (Sin seguro)
Fecha máxima de entrega: ${calcularFechaEnvio(plazoAereo)}`)

} else{

    alert(`No ha ingresado una opción de seguro válida. 
El valor del envío es USD $${resultado.toFixed(2)}. (Sin seguro) `)

}