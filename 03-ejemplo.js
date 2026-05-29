/* calcular el area y perimetro de de un rectangulo utilizando las clases de js */

class rectangulo {
    //instanciar
    constructor(base, altura) {
        this._base = base;
        this._altura = altura;
    }
    calcularArea() {
        /*return 
        finaliza la ejecución de la función y especifica un valor para ser devuelto a quien llama a la función
        */
        return this._base * this._altura;
    }
    calcularPerimetro() {
        return 2 * (this._base + this._altura);
    }
}
// instanciar un objeto de la clase rectangulo
let rectangulo1 = new rectangulo(5, 10);
// imprimir metodo
console.log(`El área del rectángulo es: ${rectangulo1.calcularArea()}`);
console.log(`El perímetro del rectángulo es: ${rectangulo1.calcularPerimetro()}`);

//get es para obtener y mostrar informacion

/* class rectangulo {
constructor (base, altura) {
    this._base = base;
    this._altura = altura;
    }
calcularArea() {
    return this._base * this._altura;
    }
calcularPerimetro() {
    return (2 * this._base) + (2 * this._altura);
    }
get obtenerArea(){
    return this.calcularArea();
    }
get obtenerPerimetro(){ 
    return this.calcularPerimetro();
    }
}
let rectangulo1 = new rectangulo (5, 10);
console.log (`El área del rectángulo es: ${rectangulo1.obtenerArea}`);
console.log (`El perímetro del rectángulo es: ${rectangulo1.obtenerPerimetro}`);
}
*/