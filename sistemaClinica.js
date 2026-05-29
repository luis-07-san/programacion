class PersonalMedico {
    static baseDeDatos = [];

    constructor(id, nombre, departamento) {
        this.id = id;
        this.nombre = nombre;
        this.departamento = departamento;
    }

    static registrar(personal) {
        PersonalMedico.baseDeDatos.push(personal);
        console.log(`Personal registrado ${personal.nombre}`);
    }

    static mostrarPersonal() {
        PersonalMedico.baseDeDatos.map(persona => {
            console.log(persona);
        });
    }
}

class Doctor extends PersonalMedico {
    constructor(id, nombre, departamento, especialidad) {
        super(id, nombre, departamento);
        this.especialidad = especialidad;
    }
}

class Enfermero extends PersonalMedico {
    constructor(id, nombre, departamento, turno) {
        super(id, nombre, departamento);
        this.turno = turno;
    }
}

const docPrueba = new Doctor(1, "Dr. Luis", "cardiologia", "cirugia");
const enfPrueba = new Enfermero(2, "Jose Roberto", "urgencias", "vespertino");

PersonalMedico.registrar(docPrueba);
PersonalMedico.registrar(enfPrueba);

PersonalMedico.mostrarPersonal();