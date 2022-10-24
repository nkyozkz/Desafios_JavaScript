let precioTotal = 0;
let ropa = "";

alert("Aprovecha las nuestras ofertas de liquidacion")

function venta() {
    while (ropa != "6") {
    ropa = prompt(
        "¿Que prenda deseas llevar? Ingrese el numero que desee: \n \n 1. Polera polo - $11.00 \n 2. Polera Nike - $12.00 \n 3. Pack X2 pantalon invierno - $18.00 \n 4. Zapatillas urbanas - $20.00 \n 5. Pack X5 medias de invierno - $12.00 \n \n 6. Terminar de Comprar \n"
    );

    switch (ropa) {
        case "1":
        precioTotal += 11;
        alert("El subtotal de su compra es de: $" + precioTotal);
        break;
        case "2":
        precioTotal += 12;
        alert("El subtotal de su compra es de: $" + precioTotal);
        break;
        case "3":
        precioTotal += 18;
        alert("El subtotal de su compra es de: $" + precioTotal);
        break;
        case "4":
        precioTotal += 20;
        alert("El subtotal de su compra es de: $" + precioTotal);
        break;
        case "5":
        precioTotal += 12;
        alert("El subtotal de su compra es de: $" + precioTotal);
        break;
        case "6":
        alert(
            "Gracias por su compra, el total de su compra es: $" + precioTotal
        );
        break;
        default:
        alert("Opción incorrecta, elija nuevamente...");
        break;
    }
    }
}

venta();