import PromptSync from "prompt-sync";
const prompt = PromptSync();
class Mesa {
  constructor(numero) {
    this.numero = numero;
    this.pedidos = [];
    this.total = 0;
  }
  set agregarPedido(opcion) {
    switch (opcion) {
      case 1:
        this.pedidos.push("Hamburguesa sencilla");
        this.total += 15;
        break;

      case 2:
        this.pedidos.push("Hamburguesa con queso");
        this.total += 18;
        break;

      case 3:
        this.pedidos.push("Hamburguesa especial");
        this.total += 20;
        break;

      case 4:
        this.pedidos.push("Papas fritas");
        this.total += 8;
        break;

      case 5:
        this.pedidos.push("Refresco");
        this.total += 5;
        break;

      case 6:
        this.pedidos.push("Postre");
        this.total += 6;
        break;

      default:
        console.log("Opcion invalida");
    }
  }
  get obtenerTotal() {
    return this.total;
  }
  mostrarCuenta() {
    console.log("\n==================");
    console.log("Mesa: " + this.numero);
    console.log("Pedidos:");
    for (let pedido of this.pedidos) {
      console.log("- " + pedido);
    }
    console.log("Cantidad: " + this.pedidos.length);
    console.log("TOTAL: $" + this.total);
    console.log("==================");
  }
}
const mesas = [new Mesa(1), new Mesa(2), new Mesa(3), new Mesa(4), new Mesa(5)];
try {
  let mesaSeleccionada = parseInt(prompt("Seleccione numero de mesa (1-5): "));
  let opcion;
  do {
    console.log("\n===== MENU =====");
    console.log("1. Hamburguesa sencilla - $15");
    console.log("2. Hamburguesa con queso - $18");
    console.log("3. Hamburguesa especial - $20");
    console.log("4. Papas fritas - $8");
    console.log("5. Refresco - $5");
    console.log("6. Postre - $6");
    console.log("0. Terminar");
    opcion = parseInt(prompt("Seleccione una opcion: "));
    if (opcion !== 0) {
      mesas[mesaSeleccionada - 1].agregarPedido = opcion;
    }
  } while (opcion !== 0);
  mesas[mesaSeleccionada - 1].mostrarCuenta();
} catch (error) {
  console.log("Error:", error.message);
}