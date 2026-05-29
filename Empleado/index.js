import {} from "./Empleado.js";
import {validarError} from "./Error.js";

try{
    const empleado1 = new Empleado(50000, 200, 10, "RFC123456");
    empleado1.mostrarInfoEmpleado();
} catch (error) {
    if (error instanceof validarError) {
        console.error(`Error: ${error.message}`);
    }else{
    console.error("Error de sistema: ", error);
    }
}