class Estudiante {
    constructor(nombre, matricula, promedio) {
        this.nombre = nombre;
        this.matricula = matricula;
        this.promedio = promedio;
    }
    // Método para mostrar información del estudiante
    mostrarInformacion() {
        console.log(`Nombre: ${this.nombre}, Matrícula: ${this.matricula}, Promedio: ${this.promedio}`);
    }
    // Método para actualizar el promedio
    actualizarPromedio(nuevoPromedio) {
        this.promedio = nuevoPromedio;
        console.log(`Promedio actualizado a: ${this.promedio}`);
    }
    // Método para mostrar mensaje de aprobado
    mensajeAprobado() {
        if (this.promedio >= 70) {
            console.log("¡Aprobado!");
        } else {
            console.log("No aprobado");
        }
    }
}
let estudiante = new Estudiante("Luis", "2E20042", 65);
// Mostrar información del inicio
console.log("Información Inicial");
estudiante.mostrarInformacion();
estudiante.mensajeAprobado();
// Actualizar promedio
console.log("Después de Actualizar Promedio");
estudiante.actualizarPromedio(85);
estudiante.mostrarInformacion();
estudiante.mensajeAprobado();