export class ErrorEmpleado extends Error {
    constructor(message){
        super(message);
        this.name = "Error del empleado";
        this.code = "ERR_EMPLEADO";
    }
}
