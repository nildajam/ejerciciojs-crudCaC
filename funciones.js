// Realizar 4 funciones, que realicen las siguientes operaciones:
// Agregar producto, Eliminar producto, Modificar el producto y Ver por consola todos los productos.
// Todas las funciones deben mostrarse por consola (una vez finalizados los procedimientos) el listado completo de los productos, y de esta manera graficarnos el mismo con las modificaciones hechas.

let datosCorrectos = false;

function finalizar() {
  datosCorrectos = true;
}

// Ver productos:
function verProductos() {
  console.log(productos);
}

// Agregar producto:
function agregarProducto(nombre, precio) {
  const producto = {
    id: 6,
    nombre: nombre,
    precio: precio,
  };
  productos.push(producto);
}

// Modificar producto:
function modificarProducto(posicion, id) {
  const nombre = prompt("Ingrese el nombre del producto: ");
  const precio = prompt("Ingrese el precio del producto: ");

  productos[posicion] = {
    id,
    nombre,
    precio,
  };
}

function getData() {
  const nombre = prompt("Ingrese el nombre del producto: ");
  const precio = prompt("Ingrese el precio del producto: ");
  return [nombre, precio];
}

// Eliminar producto:
function eliminarProducto(posicion) {
  productos.splice(posicion, 1);
}
