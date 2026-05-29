class persona {
    //instanciar
    constructor(nombre, edad, curp){
        this._nombre = nombre;
        this._edad = edad;
        this._curp = curp;
    }
    //metodo
    saludarPersona(){
        console.log(`hola soy ${this._nombre} y tengo ${this._edad} años y mi curp es ${this._curp}`);
    }
}
// la persona1 es un objeto de la clase persona
    let persona1 = new persona("luis", 19, "LUIJ190101HDFRRL09");
    let persona2 = new persona("maria", 20, "MARM200202MDFRRL08");
    let persona3 = new persona("juan", 21, "JUAN210303HDFRRL07");
    persona1.saludarPersona();
    persona2.saludarPersona();
    persona3.saludarPersona();