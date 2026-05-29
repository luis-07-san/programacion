/* function Division (a,b){
    try {
        if (b === 0) {
            throw new Error("No se puede dividir entre cero");
        }
        const resultado=a/b;
    console.log("El resultado es:", resultado); 

    } catch (error) {
        console.error(`Error:`, error.message);

        }finally{
        console.log("Terminal y cerrar cualquier proceso");
    }
    const resultado =a/b;
    console.log("el resultado es: " , resultado);
}
//Division(10,2);
Division(10,0);
*/

/* function usuario (){
    try {
    let usuario=null;
    console.log("Accediendo al nombre....");
    console.log(usuario.nombre);
        if(Usuario===null || Usuario===undefined)
    {
    throw new Error("Debe cumplir con un objeto")
        }
    } catch (error) {
        console.error(Error:${error.message});
    } finally {
        console.log("Terminar y cerrar cualquier proceso");
    }
}
Usuario(); */

class ValidaacionErrores extends Error{
    constructor(message){
        super(message);
        this.nombre=ValidaacionErrores;
        this.codigo=404;
    }
}

//todas las palabras de "Error" cambiarlS por el nombre de la clase
class Usuario{
    //ValidarUser="[?/,@*$]"
    constructor(nombre, edad, email, password){
        if(!nombre||nombre.length<3){
            throw new ValidaacionErrores("El nombre debe tener al menos 3 caracteres")
        }
        if(edad<18){
            throw new Error("Debe ser mayor de edad")
            //console.log("Debe ser mayor de edad");
            
        }
        if(!email.includes("@")){
            throw new Error("El foramto de correo  no es valido")

        }
        if (!password.includes<6){
            throw new Error("La contraseña debe ser mayor que 6 caracteresss")
        }
        this.nombre=nombre
        this.edad=edad
        this.email=email
        this.password=password
    } 
    setModificarPassword(newPassword){
        const ValidarUser= /[?/*,$#]/;
        if(newPassword.lenght<6){
            throw new Error("Debe de tener mas de 6 caracteres")
        }
        if(!ValidarUser.test(newPassword)){
            throw new Error ("El password debe incluir un caracter especial")
        }
        this.password=newPassword
    }
    
}
try {
        console.log("Creando usuario...");
        
        const user=new Usuario("danny", 30, "@dannycambrano", "123$4567");
        user.setModificarPassword("dan$ny12")
        
        console.log("usuario:" , user);
        console.log("Usuario creado con exito");
        
    } catch (error) {
        console.error("No se cumple con el objetivo:", error.message);
        
        
    }