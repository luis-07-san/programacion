class estudiante{
    #nombre;
    #calificacion;

    constructor(nombre, calficacion){
        this.#nombre = nombre;
        this.#calificacion = calficacion;
    }

    //metodo privado
    #validarCalificacion(valor){
        if (valor >= 70 && valor <= 100){
            this.#calificacion = valor;
        } else {
            console.log("Reprobado con: ", this.#calificacion);
        }
    }

    //Getter
    get obtenerCal(){
        return this.#calificacion;
    }

    //set sobre escribiendo  el valor de la calificacion
    set newCalificacion(cal){
        return this.#validarCalificacion(cal);
    }

    mostrarInfo(){
        console.log(`El estudiante es ${this.#nombre} y su calificacion es ${this.#calificacion}`);
    }
}
const estudiante1 = new estudiante ("luis", 60 )
estudiante1.newCalificacion = 50;
estudiante1.obtenerCal;//variable
estudiante1.mostrarInfo();//funcion
