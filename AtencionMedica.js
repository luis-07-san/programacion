class Persona {
#nombre;
#apellido;
#edad;

constructor(nombre, apellido, edad) {
    if (!nombre || !apellido || edad <= 0) throw new Error("Datos inválidos");
    this.#nombre = nombre;
    this.#apellido = apellido;
    this.#edad = edad;
    }

get nombre() { return this.#nombre; }
set nombre(v) { this.#nombre = v; }

get apellido() { return this.#apellido; }
set apellido(v) { this.#apellido = v; }

get edad() { return this.#edad; }
set edad(v) { this.#edad = v; }

nombreCompleto() {
return `${this.#nombre} ${this.#apellido}`;
}
}

class Medico extends Persona {
#especialidad;

constructor(nombre, apellido, edad, especialidad) {
    super(nombre, apellido, edad);
    this.#especialidad = especialidad;
    }

get especialidad() { return this.#especialidad; }
set especialidad(v) { this.#especialidad = v; }

info() {
return `Dr(a). ${this.nombreCompleto()} - ${this.#especialidad}`;
    }
}

class Psicologo extends Persona {
#area;

constructor(nombre, apellido, edad, area) {
    super(nombre, apellido, edad);
    this.#area = area;
}

get area() { return this.#area; }
set area(v) { this.#area = v; }

info() {
    return `Psic. ${this.nombreCompleto()} - ${this.#area}`;
    }
}

class Paciente extends Persona {
constructor(nombre, apellido, edad) {
    super(nombre, apellido, edad);
    }
}

class Administrador extends Persona {
constructor(nombre, apellido, edad) {
    super(nombre, apellido, edad);
    }
}

class Consulta {
#id; #paciente; #profesional; #fecha; #motivo;

constructor(id, paciente, profesional, motivo) {
    if (!(paciente instanceof Paciente)) throw new Error("Paciente inválido");
    if (!profesional.info) throw new Error("Profesional inválido");

    this.#id = id;
    this.#paciente = paciente;
    this.#profesional = profesional;
    this.#motivo = motivo;
    this.#fecha = new Date().toLocaleDateString();
    }

get paciente() { return this.#paciente; }
get profesional() { return this.#profesional; }

resumen() {
    return `Consulta ${this.#id} | ${this.#fecha} | ${this.#paciente.nombreCompleto()} | Motivo: ${this.#motivo}`;
    }
}

class ConsultaMedica extends Consulta {
#diagnostico; #tratamiento;

constructor(id, paciente, medico, motivo, diagnostico, tratamiento) {
    super(id, paciente, medico, motivo);
    this.#diagnostico = diagnostico;
    this.#tratamiento = tratamiento;
    }

reporte() {
    return `${this.resumen()}
Médico: ${this.profesional.info()}
Diagnóstico: ${this.#diagnostico}
Tratamiento: ${this.#tratamiento}`;
    }
}

class ConsultaPsicologica extends Consulta {
#observaciones;

constructor(id, paciente, psicologo, motivo, observaciones) {
    super(id, paciente, psicologo, motivo);
    this.#observaciones = observaciones;
    }

reporte() {
    return `${this.resumen()}
Psicólogo: ${this.profesional.info()}
Observaciones: ${this.#observaciones}`;
    }
}

class Historial {
#paciente; #consultas;

constructor(paciente) {
    this.#paciente = paciente;
    this.#consultas = [];
    }

agregar(c) {
    this.#consultas.push(c);
    }

mostrar() {
    return this.#consultas.map(c => c.reporte()).join("\n\n");
    }
}

try {
const p1 = new Paciente("Carlos", "Méndez", 30);
const p2 = new Paciente("Luis", "Lopez", 25);

const m = new Medico("Ana", "Torres", 40, "General");
const psi = new Psicologo("Laura", "Gomez", 38, "Clínica");

const c1 = new ConsultaMedica(
    "C1",
    p1,
    m,
    "Dolor de cabeza",
    "Migraña",
    "Paracetamol"
);

const c2 = new ConsultaPsicologica(
    "C2",
    p1,
    psi,
    "Ansiedad",
    "Terapia semanal"
);

const h = new Historial(p1);
h.agregar(c1);
h.agregar(c2);

console.log("historial");
console.log(h.mostrar());

} catch (e) {
console.log(e.message);
}