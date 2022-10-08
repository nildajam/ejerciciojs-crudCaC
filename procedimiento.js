// Las opciones deben ser ingresadas por el prompt, una vez ingresadas deben realizar las operaciones pertinentes.

console.clear();

let encontrado = false;

while (!datosCorrectos) {
  let a = Number(
    prompt(`Ingrese una opcion:
1- Ver productos
2- Agregar un producto
3- Modificar un producto
4- Eliminar un producto
5- Cerrar`)
  );

  let id;

  switch (a) {
    case 1:
      // Ver productos
      verProductos();
      finalizar();
      break;

    case 2:
      // Agregar producto
      const nombre = prompt("Ingrese el nombre del producto: ");
      const precio = prompt("Ingrese el precio del producto: ");
      agregarProducto(nombre, precio);
      verProductos();
      finalizar();
      break;

    case 3:
      // Modificar producto
      id = Number(prompt("Ingrese el ID del producto: "));

      for (let i = 0; i < productos.length; i++) {
        if (productos[i].id === id) {
          modificarProducto(i, id);
          verProductos();
          encontrado = true;
          finalizar();
        }
      }

      !encontrado && alert("El ID que ingresó no existe");
      break;

    case 4:
      // Eliminar producto:
      id = Number(prompt("Ingrese el ID del producto: "));

      for (let i = 0; i < productos.length; i++) {
        if (productos[i].id === id) {
          eliminarProducto(i);
          verProductos();
          encontrado = true;
          finalizar();
          break;
        }
      }

      !encontrado && alert("El ID que ingresó no existe");
      continue;

    case 5:
      // Salir
      window.close();
      finalizar();
      break;

    default:
      // Opción inválida
      alert("Opción inválida, intente de nuevo");
      break;
  }
}
