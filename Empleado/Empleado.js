export class Empleado {
#RFC;
#sueldoBase;
#pagoHoraExtra;
#horasExtra;

constructor(sueldoBase, pagoHoraExtra, horasExtra, RFC) {
    this.#sueldoBase = sueldoBase;
    this.#pagoHoraExtra = pagoHoraExtra;
    this.#horasExtra = horasExtra;
    this.#RFC = RFC;
    }
}