export class Trabajador {
  // encapsulamiento
  #nombre;
  #horasTrabajadas;
  #pagoXHora;

  constructor(nombre, horasTrabajadas, pagoXHora) {
    this.setNombre = nombre;
    this.setHorasTrabajadas = horasTrabajadas;
    this.setPagoXHora = pagoXHora;
  }

  // getters
  get getNombre() {
    return this.#nombre;
  }

  get getHorasTrabajadas() {
    return this.#horasTrabajadas;
  }

  get getPagoXHora() {
    return this.#pagoXHora;
  }

  // setters
  set setNombre(nombre) {
    if (typeof nombre !== "string" || nombre.trim() === "") {
      throw new Error("El nombre no puede estar vacío");
    }
    this.#nombre = nombre.trim();
  }

  set setHorasTrabajadas(horas) {
    if (typeof horas !== "number" || horas <= 0 || isNaN(horas)) {
      throw new Error("Las horas trabajadas deben ser mayores a 0");
    }
    this.#horasTrabajadas = horas;
  }

  set setPagoXHora(pago) {
    if (typeof pago !== "number" || pago <= 0 || isNaN(pago)) {
      throw new Error("El pago por hora debe ser mayor a 0");
    }
    this.#pagoXHora = pago;
  }

  // métodos para calcular sueldos
  calcularSueldoBruto() {
    return this.getHorasTrabajadas * this.getPagoXHora;
  }

  calcularDescuento() {
    return this.calcularSueldoBruto() * 0.1;
  }

  calcularSueldoFinal() {
    return this.calcularSueldoBruto() - this.calcularDescuento();
  }
}
