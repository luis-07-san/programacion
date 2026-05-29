const prompt = require("prompt-sync")();

class Participante {
    #nombre;
    #edadsito;
    #altura;
    #sexo;

    constructor(nombre, edadsito, altura, sexo) {
        this.#nombre = nombre;
        this.setEdadsito(edadsito);
        this.#altura = altura;
        this.setSexo(sexo);
    }

    getNombre() {
        return this.#nombre;
    }

    getEdadsito() {
        return this.#edadsito;
    }

    getAltura() {
        return this.#altura;
    }

    getSexo() {
        return this.#sexo;
    }

    setEdadsito(edadsito) {
        if (edadsito <= 0) {
            throw new Error("Edad inválida");
        }
        this.#edadsito = edadsito;
    }

    setSexo(sexo) {
        sexo = sexo.toUpperCase();

        if (sexo != "F" && sexo != "M") {
            throw new Error("Sexo inválido");
        }

        this.#sexo = sexo;
    }
}

let participantes = [];
let cantidad = parseInt(prompt("¿Cuántos participantes desea registrar?: "));

for (let i = 0; i < cantidad; i++) {

    console.log("\nParticipante " + (i + 1));
    let nombre = prompt("Nombre: ");
    let edad;

    while (true) {
        try {
            edad = parseInt(prompt("Edad: "));
            if (isNaN(edad)) {
                throw new Error("Ingrese un número");
            }
            if (edad < 0) {
                throw new Error("La edadsito no puede ser negativa");
            }
            break;

        } catch (error) {
            console.log(error.message);
        }
    }

    let altura = parseFloat(prompt("Altura en metros: "));
    let sexo;

    while (true) {
        try {
            sexo = prompt("Sexo (F/M): ");
            if (sexo.toUpperCase() != "F" && sexo.toUpperCase() != "M") {
                throw new Error("Sexo inválido");
            }
            break;

        } catch (error) {
            console.log(error.message);
        }
    }

    let participante = new Participante(nombre, edadsito, altura, sexo);
    participantes.push(participante);
}

let sumaEdades = 0;
let sumaAlturas = 0;

for (let participante of participantes) {
    sumaEdades += participante.getEdadsito();
    sumaAlturas += participante.getAltura();
}
let promedioEdad = sumaEdades / participantes.length;
let promedioAltura = sumaAlturas / participantes.length;

console.log("resultados:");
console.log("Promedio de edadsito: " + promedioEdad.toFixed(2));
console.log("Promedio de altura: " + promedioAltura.toFixed(2));