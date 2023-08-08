//Variables

let edad= 18;
let login= false;

//Función de ingreso

function validacion() {
    let ingresoEdad= parseInt(prompt("Ingrese su edad"));
    let mayor= ingresoEdad >=18;
    while (isNaN(ingresoEdad)) {
        alert("Debe ingresar un número")
        ingresoEdad= parseInt(prompt("Ingrese su edad"))
    }
    if (mayor) {
        login= true
        alert("Usted puede operar");
    }else{
        alert("Usted no puede operar");
    }
}
validacion()

//Estructura
if (login) {
    let cotizacionDolarCompra= parseFloat(591.00);
    let cotizacionDolarVenta= parseFloat(596.00);
    let cotizacionEuroCompra= parseFloat(303.00);
    let cotizacionEuroVenta= parseFloat(316.00);
    let cambio= parseInt(prompt("Elija el tipo de cambio que desea operar: \n1 - Dólar \n2 - Euro \n3 - Salir \nIngrese una opción"));
    while (cambio != 3) {
    switch (cambio) {
        case 1:
            dolar= parseInt(prompt("1 - Cotización \n2 - Compra \n3 - Venta \n4 - Salir \nIngrese una opción "));
            while (dolar != 4) {
                switch (dolar) {
                    case 1:
                        alert("La cotizacón del día es: "+ "\n$ " + cotizacionDolarCompra + " para la compra\n" + "$ " + cotizacionDolarVenta + " para la venta");
                        break;
                    case 2:
                        compra= parseInt(prompt("Ingrese un monto en dólares"));
                        if (isNaN(compra)) {
                            alert("El monto a ingresar debe ser numérico");
                        }else{
                          let resultadoCompra= compra * cotizacionDolarCompra
                          alert("El importe para la compra de u$s" + compra + " es: $" + resultadoCompra);
                        }
                        break;
                    case 3:
                        venta= parseInt(prompt("Ingrese un monto en pesos"));
                        if (isNaN(venta)) {
                            alert("El monto a ingresar debe ser numérico");
                        }else{
                          let resultadoVenta= venta / cotizacionDolarVenta
                          alert("El importe para la compra de $" + venta + " es: u$s" + resultadoVenta);
                        }
                        break;

                    default:
                        alert("Opción no válida")
                        break;
                }
                dolar= parseInt(prompt("1 - Cotización \n2 - Compra \n3 - Venta \n4 - Salir \nIngrese una opción "));
            }
            break;
        
        case 2:
            euro= parseInt(prompt("1 - Cotización \n2 - Compra \n3 - Venta \n4 - Salir \nIngrese una opción "));
            while (euro != 4) {
                switch (euro) {
                    case 1:
                        alert("La cotizacón del día es: "+ "\n$ " + cotizacionEuroCompra + " para la compra\n" + "$ " + cotizacionEuroVenta + " para la venta");
                        break;
                    case 2:
                        compra= parseInt(prompt("Ingrese un monto en Euros"));
                        if (isNaN(compra)) {
                            alert("El monto a ingresar debe ser numérico");
                        }else{
                          let resultadoCompra= compra * cotizacionEuroCompra
                          alert("El importe para la compra de €" + compra + " es: $" + resultadoCompra);
                        }
                        break;
                    case 3:
                        venta= parseInt(prompt("Ingrese un monto en pesos"));
                        if (isNaN(venta)) {
                            alert("El monto a ingresar debe ser numérico");
                        }else{
                          let resultadoVenta= venta / cotizacionEuroVenta
                          alert("El importe para la compra de $" + venta + " es: €" + resultadoVenta);
                        }
                        break;
                    case 4:
                        cambio= parseInt(prompt("Elija el tipo de cambio que desea operar: \n1 - Dólar \n2 - Euro \n3 - Salir \nIngrese una opción"));
                        break;
                    default:
                        alert("Opción no válida")
                        break;
                }
                euro= parseInt(prompt("1 - Cotización \n2 - Compra \n3 - Venta \n4 - Salir \nIngrese una opción "));
            }
            break;        
    }
    cambio= parseInt(prompt("Elija el tipo de cambio que desea operar: \n1 - Dólar \n2 - Euro \n3 - Salir \nIngrese una opción"));
    alert("Gracias por su visita");
}

}else{
    alert("Gracias por su visita");
}
//Fin del Script