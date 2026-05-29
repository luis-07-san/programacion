class usuario {
    #nomuser; // El simbolo # hace un encapsulamiento
    constructor(nomuser,password){
        this.#nomuser = nomuser;
        this.#password = password;
    }

#validarPassword(contrasena){
        return this.#password = contrasena;
}

#validarUser(us){
        return this.#nomuser = usuario;
}
    login(us, pass){
        if (this.#validarPassword(pass) && this.#validarUser(us)){
            console.log(`Bienvenido ${this.#nomuser}`);
        } else {
        console.log("Usuario o contraseña incorrectos");
        }
    }
/* 
    datosUser(){
        console.log(`EL nombre de usuario es ${this.#nomuser}`) */

    }

const user1 = new usuario("luis");
user1.login("luis");
/* user1.datosUser(); */