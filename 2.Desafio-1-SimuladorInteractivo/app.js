

const alfombras = [
    { nombre: "Alfombra 30x30", color: "Rojo", precio: 15.0 },
    { nombre: "Alfombra 60x60", color: "Verde", precio: 20.0 },
    { nombre: "Alfombra 120x120", color: "Azul", precio: 40.0 },
    { nombre: "Alfombra XXL", color: "Amarillo", precio: 60.0},
    { nombre: "Alfombra Personalizada", color: "Gris", precio: 80.0 },
];

let listaNombres = alfombras.map((alfombra) => alfombra.nombre);
let listaColor = alfombras.map((alfombra) => alfombra.color);
let listaPrecios = alfombras.map((alfombra) => alfombra.precio);
let menuPrincipal;
let seleccion;
let ventaFinal = 0;

while (menuPrincipal != "s" && menuPrincipal != "n") {
    menuPrincipal = prompt("Bienvenido a  >>Crazy Rugs<<" + "\n\n ¿Desea realizar una compra? (S/N):");
    menuPrincipal = menuPrincipal.toLowerCase();

    if (menuPrincipal === "s") {
        while (seleccion != "6") {
        seleccion = prompt(
            "                    >>Crazy Rugs<<\nEstos son las alfombras que tenemos disponibles.\n>> Inserte el número del producto que desea llevar:\n\n" +
            "1. " +
            JSON.stringify(listaNombres[0]) +
            "\n     Color: " +
            JSON.stringify(listaColor[0]) +
            "\n     Precio: $" +
            JSON.stringify(listaPrecios[0]) +
            "\n2. " +
            JSON.stringify(listaNombres[1]) +
            "\n     Color: " +
            JSON.stringify(listaColor[1]) +
            "\n     Precio: $" +
            JSON.stringify(listaPrecios[1]) +
            "\n3. " +
            JSON.stringify(listaNombres[2]) +
            "\n     Color: " +
            JSON.stringify(listaColor[2]) +
            "\n     Precio: $" +
            JSON.stringify(listaPrecios[2]) +
            "\n4. " +
            JSON.stringify(listaNombres[3]) +
            "\n     Color: " +
            JSON.stringify(listaColor[3]) +
            "\n     Precio: $" +
            JSON.stringify(listaPrecios[3]) +
            "\n5. " +
            JSON.stringify(listaNombres[4]) +
            "\n     Color: " +
            JSON.stringify(listaColor[4]) +
            "\n     Precio: $" +
            JSON.stringify(listaPrecios[4]) +
            "\n\n6. Finalizar compra"
        );
        switch (seleccion) {
            case "1":
            ventaFinal += listaPrecios[0];
            alert(`Articulo agregado al carrito, el subtotal es: $${ventaFinal}`);
            break;
            case "2":
            ventaFinal += listaPrecios[1];
            alert(`Articulo agregado al carrito, el subtotal es: $${ventaFinal}`);
            break;
            case "3":
            ventaFinal += listaPrecios[2];
            alert(`Articulo agregado al carrito, el subtotal es: $${ventaFinal}`);
            break;
            case "4":
            ventaFinal += listaPrecios[3];
            alert(`Articulo agregado al carrito, el subtotal es: $${ventaFinal}`);
            break;
            case "5":
            ventaFinal += listaPrecios[4];
            alert(`Articulo agregado al carrito, el subtotal es: $${ventaFinal}`);
            break;
            case "6":
            alert(`El total de su compra es: $${ventaFinal} \n\nGracias su compra, vuelva pronto a >>Crazy Rugs<<`);
            break;

            default:
            alert("Opción inválida, elija nuevamente.");
        }
        }
    } else if (menuPrincipal === "n") {
        alert("Gracias por visitar >>Crazy Rugs<<");
    } else {
        alert("Opción inválida, elija nuevamente.");
    }
}