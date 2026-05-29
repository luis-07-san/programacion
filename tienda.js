class Producto {
    constructor(nombre, precio, categoria) {
        this.nombre = nombre;
        this.precio = precio;
        this.categoria = categoria;
    }

    calcularPrecioFinal() {
        return this.precio;
    }

    mostrarInfo() {
        return `Nombre: ${this.nombre}, Categoría: ${this.categoria}, Precio Final: ${this.calcularPrecioFinal()}`;
    }
}

class Electronico extends Producto {
    constructor(nombre, precio, garantia) {
        super(nombre, precio, "Electronico");
        this.garantia = garantia;
    }

    calcularPrecioFinal() {
        return this.precio * 1.16;
    }
}

class Ropa extends Producto {
    constructor(nombre, precio, tipo, costoCostura = 0) {
        super(nombre, precio, "Ropa");
        this.tipo = tipo;
        this.costoCostura = costoCostura;
    }

    calcularPrecioFinal() {
        return this.precio * 1.10 + this.costoCostura;
    }
}

class Tienda {
    constructor() {
        this.productos = [];
    }

    agregarProducto(producto) {
        this.productos.push(producto);
    }

    mostrarProductos() {
        this.productos.map(p => {
            console.log(p.mostrarInfo());
        });
    }
}

const tienda = new Tienda();
const celular = new Electronico("Celular Samsung", 5000, "1 año");
const pantalon = new Ropa("Pantalon", 800, "Pantalon", 150);

tienda.agregarProducto(celular);
tienda.agregarProducto(pantalon);
tienda.mostrarProductos();
