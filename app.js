// Simulador de compra de productos para limpieza de autos.

// Declaro mi constructor Producto
class Producto {
  constructor(id, nombre, precio) {
    this.id = id;
    this.nombre = nombre;
    this.precio = precio;
  }
  // Método para realizar el listado
  mostrarProductos() {
    return this.id + " - " + this.nombre + " - Precio: $" + this.precio;
  }
}
// Declaro mi "base de datos" de productos en el array stock
let stock = [];
stock.push(new Producto(1, "Shampoo Meguiars NXT Generation Car Wash (1.89 L.)", 8000));
stock.push(new Producto(2, "Shampoo Mothers California Gold Car Wash (1.89 L.)", 7500));
stock.push(new Producto(3, "Shampoo Sonax Xtreme wash & Dry (1 L.)", 6000));
stock.push(new Producto(4, "Shampoo 3D Pink Car Soap (4 L.)", 6400));
stock.push(new Producto(5, "Cera Mothers California Gold Synthetic Paste Wax (311 gr.)",6500));
stock.push(new Producto(6, "Cera rápida Sonax High Speed Wax (500 mL.)", 6500));
stock.push(new Producto(7, "Cera Meguiars NXT Generation Tech Wax (311 gr.)", 9000));
stock.push(new Producto(8, "Cera rápida 3M Quick Wax (473 mL.)", 3800));
stock.push(new Producto(9, "Cepillo 3M para llantas y fundas", 1000));
stock.push(new Producto(10, "Cepillo 3M duro para alfombras", 1500));
stock.push(new Producto(11, "Cepillo 3M de cerdas de caballo", 1200));
stock.push(new Producto(12, "Cepillo 3M para pasaruedas", 3000));
stock.push(new Producto(13, "Guante de lavado premium", 3800));
stock.push(new Producto(14, "Microfibra Waffle de secado (60x40 cm.)", 2500));
stock.push(new Producto(15, "Microfibra amarilla gold pelo corto (40x40 cm.)", 1000));
stock.push(new Producto(16, "Microfibra amarilla pulido (40x40 cm.)", 1400));

// Declaro mis variables: array carrito, listado, cantidad y selección vacíos
let carrito = [];
let listado = "";
let cantidad = "";
let seleccion = "";
let listadoCarrito = "";

// Recorro el array stock y voy agregando al listado los productos
// con el formato del método mostrarProducto de la clase Producto
stock.forEach((el) => (listado += el.mostrarProductos() + "\n"));

// Función para elegir el producto
function elegirProducto() {
    seleccion = Number(
    prompt("Elija el producto que desea comprar: \n" + listado));
  // Reviso que la opción sea correcta
    while (seleccion < 1 || seleccion > stock.length) {
      alert("Opción incorrecta, intente nuevamente");
      seleccion = Number(prompt(listado));
  }
    alert(`El usuario seleccionó: ${stock[seleccion - 1].nombre}`);
    cantidad = Number(prompt("Ingrese la cantidad deseada del producto seleccionado: " + "(" +stock[seleccion - 1].nombre +" - Precio: $" +stock[seleccion - 1].precio +" c/u" +")"));
}

// Función para agregar un producto al carrito y calcular el total acumulado
function agregarAlCarrito(prod, cantidad) {
    let producto = stock.find((producto) => producto.id === prod);
    producto.cantidad = cantidad;
    producto.total = producto.precio * cantidad;
    carrito.push(producto);
    alert("El monto total del producto seleccionado es de: $" + producto.total);
}

// Función para calcular el total del carrito
function calcularTotal(carrito) {
    let total = 0;
    carrito.forEach((producto) => (total += producto.total));
    return total;
}

// Función para ver el carrito
function verCarrito(carrito){
    listadoCarrito="";
    carrito.forEach((el) => (listadoCarrito += el.nombre + "\n"));
    alert(listadoCarrito)
}

// Menú para interactuar con el usuario
let opcion = prompt(
    "Bienvenidos a Detail Garage, elija la opción deseada: \n 1 - Comprar productos \n 2 - Finalizar compra \n 4 - Salir"
);
while (opcion != "4") {
    switch (opcion) {
      case "1":
        elegirProducto();
        agregarAlCarrito(seleccion, cantidad);
      break;
      case "2":
        if (calcularTotal(carrito) == 0) {
          alert("Lo esperamos para su próxima compra.");
        }else {
          alert("Muchas gracias por su compra, el total de su compra es de: $" + calcularTotal(carrito));
        }
      break;
      case "3":
        verCarrito(carrito);
      break;
      default:
        break;
  }
  opcion = prompt("¿Qué otra acción desea realizar? \n 1 - Comprar productos \n 2 - Finalizar compra \n 3 - Ver carrito \n 4 - Salir");
}

alert("Muchas gracias. Saludos!");
