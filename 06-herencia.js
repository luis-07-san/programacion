class Persona {
    constructor(nombre, apellidos, curp) {
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.curp = curp;
    }

    mostrarInformacion() {
        return `Nombre: ${this.nombre} ${this.apellidos}\nCURP: ${this.curp}`;
    }
}

class Estudiante extends Persona {
    constructor(nombre, apellidos, curp, carrera, matricula, semestre) {
        super(nombre, apellidos, curp);
        this.carrera = carrera;
        this.matricula = matricula;
        this.semestre = semestre;
    }

    infoEstudiante() {
        console.log(`${this.mostrarInformacion()}\nCarrera: ${this.carrera}, Semestre: ${this.semestre}, Matrícula: ${this.matricula}`);
    }
}

class Docente extends Persona {
    constructor(nombre, apellidos, curp, puesto, clave, departamento) {
        super(nombre, apellidos, curp);
        this.puesto = puesto;
        this.clave = clave;
        this.departamento = departamento;
    }

    infoDocente() {
        console.log(`${this.mostrarInformacion()}\nPuesto: ${this.puesto}, Clave: ${this.clave}, Departamento: ${this.departamento}`);
    }
}

let alumno1 = new Estudiante("Luis", "Sanchez Jimenez", "saj04lisgdja", "Ing. Sistemas", "25E20070", 3);
alumno1.infoEstudiante();