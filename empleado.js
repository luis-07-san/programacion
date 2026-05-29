class Empleado {
    #rfc;
    #sueldoBase;
    #pagoHoraExtra;
    #horasExtra;

    constructor(rfc, sueldoBase = 0, pagoHoraExtra = 0, horasExtra = 0) {
        if (!rfc || rfc.trim() === "") throw new Error("RFC inválido");
        if (sueldoBase < 0 || pagoHoraExtra < 0 || horasExtra < 0) {
            throw new Error("Valores negativos no permitidos");
        }

        this.#rfc = rfc.trim().toUpperCase();
        this.#sueldoBase = sueldoBase;
        this.#pagoHoraExtra = pagoHoraExtra;
        this.#horasExtra = horasExtra;
    }

    get rfc() { return this.#rfc; }
    set rfc(v) { this.#rfc = v.trim().toUpperCase(); }

    get sueldoBase() { return this.#sueldoBase; }
    set sueldoBase(v) { this.#sueldoBase = v; }

    get pagoHoraExtra() { return this.#pagoHoraExtra; }
    set pagoHoraExtra(v) { this.#pagoHoraExtra = v; }

    get horasExtra() { return this.#horasExtra; }
    set horasExtra(v) { this.#horasExtra = v; }

    complemento() {
        return this.#horasExtra * this.#pagoHoraExtra;
    }

    sueldoBruto() {
        return this.#sueldoBase + this.complemento();
    }

    sueldoNeto() {
        return this.sueldoBruto() * 0.9;
    }

    info() {
        return `RFC: ${this.#rfc} | Sueldo Base: ${this.#sueldoBase}`;
    }

    reporte() {
        return `${this.info()}
Horas Extra: ${this.#horasExtra}
Complemento: ${this.complemento()}
Sueldo Bruto: ${this.sueldoBruto()}
Sueldo Neto: ${this.sueldoNeto()}`;
    }
}

class EmpleadoGerente extends Empleado {
    #bono;

    constructor(rfc, sueldoBase, bono = 0) {
        super(rfc, sueldoBase);
        this.#bono = bono;
    }

    get bono() { return this.#bono; }
    set bono(v) { this.#bono = v; }

    sueldoBruto() {
        return super.sueldoBruto() + this.#bono;
    }

    reporte() {
        return `${super.reporte()}
Bono: ${this.#bono}`;
    }
}

class EmpleadoVendedor extends Empleado {
    #comision;

    constructor(rfc, sueldoBase, comision = 0) {
        super(rfc, sueldoBase);
        this.#comision = comision;
    }

    get comision() { return this.#comision; }
    set comision(v) { this.#comision = v; }

    sueldoBruto() {
        return super.sueldoBruto() + this.#comision;
    }

    reporte() {
        return `${super.reporte()}
Comisión: ${this.#comision}`;
    }
}

try {
    const emp = new Empleado("JUAN1234", 8000, 100, 8);
    const gerente = new EmpleadoGerente("GER5678", 15000, 4000);
    const vendedor = new EmpleadoVendedor("VEN9012", 6000, 2500);

    console.log(emp.reporte());
    console.log("\n\n");
    console.log(gerente.reporte());
    console.log("\n\n");
    console.log(vendedor.reporte());

} catch (e) {
    console.log(e.message);
}
