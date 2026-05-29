class estudiante {
constructor (nombre,matricula,promedio){
this.promedio = promedio;
this.matricula = matricula;
this.nombre = nombre;
}
    infoEstudiante(){
    return console.log (`el nombre del estudiante es ${this.nombre} y su matricula es ${this.matricula} y se encuentra ${this.aproRepAlumnos()}`)
    };
    actualizaPromedio(nPromedio){
        return this.promedio = this.nPromedio;
    }
    aproRepAlumnos(){
return this.promedio >=70? "aprobado" : "reprobado"

    }
    }
    let alumno1 = new Estudiante ("luis", "25E20070", 60)
    alumno1.actualizarPromedio(90)
    alumno1.infoEstudiante();