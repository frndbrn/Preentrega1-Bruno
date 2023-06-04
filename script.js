// Código creado por Fernando Bruno - Comisión 52235
console.log("Inicio del programa")  // mensaje interno 

let opcion // declaración de variable global

function validarDatos(dato) { // función para validar el número ingresado por el usuario
    while (dato <= 0 || isNaN(dato)) { // mientras sea incorrecto, que vuelva a preguntar hasta que sea un número válido
        dato = prompt("ERROR, ingrese un número y que sea mayor a 0") // reingreso del dato
    }
    return dato // devuelvo el dato validado a mi programa
}

do {
    let precio = Number(prompt("Bienvenido a nuestro negocio! Por favor ingrese el precio del producto para consultar los descuentos y financiación: ")) // Ingreso un número
    precio = validarDatos(precio) // llamo y envío el número a la función para validar que esté bien, hecho eso, guardo el número correcto en la variable
    console.log("Dato validado") // mensaje interno 
    opcion = Number(prompt("Ingrese 1 para saber el descuento y precio final con el 15%, ingrese 2 para saber con el 30%, ingrese 3 para saber la financiación en 3 cuotas sin interés, ingrese 4 para salir")) // Ingreso la opcion a elegir
    switch (opcion) {
        case 1: // caso 1 para el 15%
            let descuento = precio * 0.15
            let precioFinal = precio - descuento
            alert("El descuento es de: $" + descuento + " y el precio final es de: $" + precioFinal)
            break
        case 2:// caso 2 para el 30%
            let descuento2 = precio * 0.3
            let precioFinal2 = precio - descuento2
            alert("El descuento es de: $" + descuento2 + " y el precio final es de: $" + precioFinal2) // muestro mensaje con los resultados de ambas variables
            break
        case 3:// caso 3 para las tres cuotas
            let cuota = precio / 3
            alert("Usted puede financiar el producto en 3 coutas de $" + cuota.toFixed(2) + " sin interés") // el toFixed() para que solo muestre dos decimales
            break
        case 4: // mensaje al usuario de que finalizó el programa
            alert("Gracias por usar nuestro servicio, que tenga un buen dia!")
            break
        default: // en caso de que no se haya ingresado una opcion válida
            alert("ERROR, por favor eliga una opción válida")
            break
    }
} while (opcion !== 4) // mientras opcion sea distinto a 4, que se repita el programa

console.log("Fin del programa")  // mensaje interno 