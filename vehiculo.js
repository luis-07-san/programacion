class vehiculo {
  #velocidad;
  #conductor;
  #marca;
  #modelo;
  constructor(conductor, modelo, marca, velocidad) {
    this.#conductor = conductor;
    this.#modelo = modelo;
    this.#marca = marca;
    this.#validarVelocidad(velocidad);
  }

  #validarVelocidad(valor) {
    if (valor <= 0){
        console.log("Esto no está permitido");
        this.#velocidad = 0;
    } else if (valor >= 1 && valor <= 180){
        this.#velocidad = valor;
    } else {
        console.log("Velocidad fuera rango permitido: ", this.#velocidad);
        return;
    }
}

  get obtenerVelocidad() {
    return this.#velocidad;
  }

  set newVelocidad(valor){
    this.#validarVelocidad(valor);
  }

  mostrarInfo(){
    console.log(`el Conductor es  ${this.#conductor} y se desplaza a una velocidad de ${this.#velocidad} km/h, el modelo es ${this.#modelo} y la marca es ${this.#marca}`);
  }
}

const vehiculo1 = new vehiculo("Juan", "Civic", "Honda", 180);
vehiculo1.newVelocidad = 200;
vehiculo1.mostrarInfo();