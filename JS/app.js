const listaProductos = []

class Productos {
    constructor (nombre, medida, descripcion, precio, vendidos, montoVendido) { 
        this.nombre = nombre;
        this.medida = medida;
        this.descripcion = descripcion;
        this.precio = precio;
        this.vendidos = 0;
        this.montoVendido = 0;
    }
    incluirEnLista() {
        listaProductos.push(this);
        console.log(this);
    }
    sumarIva() {
        return this.precio * 1.21;
    }
}

const cinturato1 = new Productos("cinturato1", "175/65R14", "175/65R14 82T P1cint", 68352, 0, 0)
cinturato1.incluirEnLista();

const cinturato2 = new Productos("cinturato2", "185/65R14", "185/65R14 86T P1cint", 81548, 0, 0)
cinturato2.incluirEnLista();

const pzero1 = new Productos("pzero1", "255/35R18", "255/35ZR18 94Y XL P-ZERO(MO RO1)", 300259, 0, 0)
pzero1.incluirEnLista();

const pzero2 = new Productos("pzero2", "225/40R18", "225/40ZR18 92Y XL P ZERO (MO)", 201667, 0, 0)
pzero2.incluirEnLista();

const scorpion1 = new Productos("scorpion1", "205/60R16", "205/60R16 92H SCORPN", 153348, 0, 0)
scorpion1.incluirEnLista();

const scorpion2 = new Productos("scorpion2", "215/55R18", "215/55R18 95H SCORPN", 232533, 0, 0)
scorpion2.incluirEnLista();

const chrono1 = new Productos("chrono1", "205/70R15", "205/70R15C 106R CHRONO", 194715, 0, 0)
chrono1.incluirEnLista();

const chrono2 = new Productos("chrono2", "195/75R16", "195/75R16C 107R CHRONO(MO)", 169558, 0, 0)
chrono2.incluirEnLista();

const deseaComprar = () => {
    let preguntaCliente = prompt("Desea realizar una compra? (SI/NO)");
    while ((preguntaCliente === null) || (preguntaCliente.trim() === "") || (!/^(SI|NO|si|no)$/i.test(preguntaCliente))) {
        alert ("Por favor responda SI o NO")
        preguntaCliente = prompt("Desea realizar una compra? (SI/NO)");
    }
    if (preguntaCliente.toLowerCase() === "si") {
        vender ();
    } else {
        alert ("Bien, conozca nuestros productos y servicios, y no dude en consultarnos")
    }
}

const carritoCompras = []

const vender = () => {
    let productoElegido = prompt("Estimado cliente, elija de la lista el producto que desea e ingrese el NOMBRE");
    productoElegido = productoElegido.toLowerCase();
    let productoBuscado = listaProductos.find ((producto) => producto.nombre === productoElegido);
    while (!productoBuscado) {
        alert ("Por favor ingresa un producto correcto")
        productoElegido = prompt("Estimado cliente, elija de la lista el producto que desea e ingrese el NOMBRE");
        productoBuscado = listaProductos.find ((producto) => producto.nombre === productoElegido);
    }

    let cantidadDeseada = parseInt(prompt("Por favor indique la cantidad deseada"));
    while (isNaN (cantidadDeseada) || (cantidadDeseada === "")) {
        alert ("Por favor ingrese un número")
        cantidadDeseada = parseInt(prompt("Por favor indique la cantidad deseada"))
    }
    const precioConIva = productoBuscado.sumarIva();
    const totalProducto = precioConIva * cantidadDeseada;
    productoBuscado.montoVendido = totalProducto;
    productoBuscado.vendidos = productoBuscado.vendidos + cantidadDeseada;
    carritoCompras.push(productoBuscado);
    comprarMas ();
}

const comprarMas = () => {
    const nuevaPregunta = prompt("Desea añadir un nuevo producto? (SI/NO)");
    while ((nuevaPregunta === "") || (!isNaN(nuevaPregunta))) {
        alert ("Por favor responda SI o NO)")
        nuevaPregunta = prompt("Desea añadir un nuevo producto? (SI/NO");
    }
    if ((nuevaPregunta === "SI") || (nuevaPregunta === "Si") || (nuevaPregunta === "si")) {
        vender ();
    } else if ((nuevaPregunta === "NO") || (nuevaPregunta === "No") || (nuevaPregunta === "no")) {
        mostrarTotal ();
    } else {
        alert ("Por favor responda SI o NO");
        nuevaPregunta = prompt("Desea añadir un nuevo producto? (SI/NO");
    }
}

const mostrarTotal = () => {
    const totalCompra = carritoCompras.reduce((acumulador, producto) => acumulador + producto.montoVendido, 0);
    alert ("El total de su compra es de $" + totalCompra);
}
    
deseaComprar();