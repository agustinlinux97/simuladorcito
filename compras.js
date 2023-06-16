const itemsComprados = [];

function agregarItem() {
    let nombreProducto = document.getElementById("nombreProducto").value;
    let precioProducto = document.getElementById("precioProducto").value;
    let cantidadProducto = document.getElementById("cantidadProducto").value;

    if (nombreProducto && precioProducto && cantidadProducto) {
        document.getElementById("listaCompras").style.display = "block";
        let nuevoItem = {
            nombre: nombreProducto,
            precio: parseFloat(precioProducto),
            cantidad: parseInt(cantidadProducto)
        };
        
        itemsComprados.push(nuevoItem);

        let tabla = document.getElementById("listaCompras");

        let fila = tabla.insertRow();
        let celdaNombre = fila.insertCell(0);
        let celdaPrecio = fila.insertCell(1);
        let celdaCantidad = fila.insertCell(2);
        let celdaEliminar = fila.insertCell(3);

        celdaNombre.textContent = nuevoItem.nombre;
        celdaPrecio.textContent = `$${nuevoItem.precio}`;
        celdaCantidad.textContent = nuevoItem.cantidad;

        let botonEliminar = document.createElement("button");
        botonEliminar.textContent = "Eliminar";
        botonEliminar.addEventListener('click', function() {
        eliminarItem(nuevoItem, fila);
    });

        celdaEliminar.appendChild(botonEliminar);

        document.getElementById("nombreProducto").value = "";
        document.getElementById("precioProducto").value = "";
        document.getElementById("cantidadProducto").value = "";
    }
}

function eliminarItem(item, fila) {
    let i = itemsComprados.indexOf(item);
    if (i !== -1) {
        itemsComprados.splice(i, 1);
    let tabla = document.getElementById("listaCompras");
    tabla.deleteRow(fila.rowIndex);
}
}