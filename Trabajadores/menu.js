import PromptSync from "prompt-sync";
import { Trabajador } from "./Trabajadores.js";

const prompt = PromptSync();
const trabajadores = [];
let opcion;

do {
  console.log("\n=================menu==================");
  console.log("1. Registrar trabajadores");
  console.log("2. Mostrar trabajadores");
  console.log("3. Salir");

  opcion = parseInt(prompt("Seleccione una opcion: "));

  switch (opcion) {
    case 1:
      try {
        const nombre = prompt("Ingrese el nombre: ");
        const horas = parseFloat(prompt("Ingrese las horas trabajadas: "));
        const pago = parseFloat(prompt("Ingrese el pago por hora: "));

        const trabajador = new Trabajador(nombre, horas, pago);
        trabajadores.push(trabajador);

        console.log("Trabajador agregado correctamente");
      } catch (error) {
        console.log("\nError:", error.message);
      }
      break;

    case 2:
      if (trabajadores.length === 0) {
        console.log("\nAun no hay registros de trabajadores");
      } else {
        console.log("\n========== lista de trabajadores ==========");
        trabajadores.forEach((trabajador, index) => {
          console.log(`Trabajador ${index + 1}:`);
          console.log(`Nombre: ${trabajador.getNombre}`);
          console.log(`Horas trabajadas: ${trabajador.getHorasTrabajadas}`);
          console.log(`Pago por hora: ${trabajador.getPagoXHora}`);
          console.log(`Sueldo bruto: ${trabajador.calcularSueldoBruto()}`);
          console.log(`Descuento: ${trabajador.calcularDescuento()}`);
          console.log(`Sueldo final: ${trabajador.calcularSueldoFinal()}`);
        });
      }
      break;

    case 3:
      console.log("\nSaliendo del programa...");
      break;

    default:
      console.log("\nOpcion no valida");
  }
} while (opcion !== 3);
