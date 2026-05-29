class personas { // la primera letra de la clase es en mayuscula 
    static Clientes = []; //variable global tipo arreglo
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    //}
    //guardarDatos() {
        let datos = {
            nombre: this.nombre,
            edad: this.edad,
        };
        personas.Clientes.push(datos);
    }
    static obtenerDatos() {
        //return personas.Clientes;
        this.Clientes.map(clientesitos => {
            console.log(`El cliente se llama ${clientesitos.nombre} y tiene ${clientesitos.edad} años`)
        })
    }
    static buscarCliente(nombreCliente){
        return this.Clientes.find(clin=>clin.nombre===nombreCliente)
    }
}
let cliente1 = new personas("luis", 19);
//cliente1.guardarDatos();
let cliente2 = new personas("roberto", 25);
//cliente2.guardarDatos();
let cliente3 = new personas("eric", 20);
//cliente3.guardarDatos();

console.log(personas.obtenerDatos());
console.log(personas.buscarCliente("luis"));