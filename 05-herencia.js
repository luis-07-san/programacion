class animal {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;

    }

    describir() {
        return `soy ${this.nombre} y tengo ${this.edad} año`
    }
}
class perro extends animal {
    ladrar() {
        return "Aullido"
    }
}
let miFurulais = new perro("miFirulais", 1);
console.log(miFurulais.describir());
console.log(miFurulais.ladrar());
