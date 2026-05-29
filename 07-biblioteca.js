class Material {
    constructor(titulo, autor) {
        this.titulo = titulo;
        this.autor = autor;
        this.disponible = true;
    }

    mostrarInfo() {
        console.log(`Título: ${this.titulo}, Autor: ${this.autor}, Disponible: ${this.disponible}`);
    }

    prestar() {
        this.disponible = false;
    }

    devolver() {
        this.disponible = true;
    }
}

class Libro extends Material {
    constructor(titulo, autor, numeroPaginas) {
        super(titulo, autor);
        this.numeroPaginas = numeroPaginas;
    }

    mostrarInfo() {
        console.log(`Libro: ${this.titulo}, Autor: ${this.autor}, Páginas: ${this.numeroPaginas}, Disponible: ${this.disponible}`);
    }
}

class Revista extends Material {
    constructor(titulo, autor, edicion) {
        super(titulo, autor);
        this.edicion = edicion;
    }

    mostrarInfo() {
        console.log(`Revista: ${this.titulo}, Autor: ${this.autor}, Edición: ${this.edicion}, Disponible: ${this.disponible}`);
    }
}

const biblioteca = [];

const libro1 = new Libro("Cien años de soledad", "Gabriel García Márquez", 417);
const revista1 = new Revista("National Geographic", "Varios", "Marzo 2024");

biblioteca.push(libro1);
biblioteca.push(revista1);

biblioteca.forEach(material => material.mostrarInfo());

libro1.prestar();
libro1.mostrarInfo();

libro1.devolver();
libro1.mostrarInfo();


/* 1. ¿Qué ventaja ofrece la herencia en este ejercicio?
Permite reutilizar código. Las clases Libro y Revista comparten atributos y métodos de Material sin repetirlos.

2. ¿El array almacena datos simples o referencias a objetos?
Almacena referencias a objetos. No guarda los datos directamente, sino la dirección donde está cada objeto.

3. ¿Qué ocurriría si no existiera la clase base Material?
Habría que repetir los mismos atributos y métodos en cada clase, haciendo el código más largo, repetitivo y difícil de mantener.

4. ¿Cómo podrías mejorar el diseño del sistema?

Agregar validaciones al prestar o devolver

Incluir un ID único para cada material

Crear métodos para buscar materiales
 */
