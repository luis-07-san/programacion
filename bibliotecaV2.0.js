class ErrorLibroNoDisponible extends Error {
    constructor(mensaje) {
        super(mensaje);
        this.name = "ErrorLibroNoDisponible";
    }
}

class Material {
    constructor(titulo, autor) {
        if (titulo === "") {
            throw new Error("El titulo no puede estar vacio");
        }
        if (autor.length < 3) {
            throw new Error("El autor debe tener mas de 3 caracteres");
        }
        this.titulo = titulo;
        this.autor = autor;
        this.disponible = true;
    }

    mostrarInfo() {
        console.log(`Titulo: ${this.titulo}, Autor: ${this.autor}, Disponible: ${this.disponible}`);
    }

    prestar() {
        if (!this.disponible) {
            throw new ErrorLibroNoDisponible(`${this.titulo} ya esta prestado`);
        }
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
        console.log(`Libro: ${this.titulo}, Autor: ${this.autor}, Paginas: ${this.numeroPaginas}, Disponible: ${this.disponible}`);
    }
}

class Revista extends Material {
    constructor(titulo, autor, edicion) {
        super(titulo, autor);
        this.edicion = edicion;
    }

    mostrarInfo() {
        console.log(`Revista: ${this.titulo}, Autor: ${this.autor}, Edicion: ${this.edicion}, Disponible: ${this.disponible}`);
    }
}

try {
    const biblioteca = [];

    const libro1 = new Libro("Harry Potter", "J.K. Rowling", 309);
    const revista1 = new Revista("Muy Interesante", "Varios", "Febrero 2025");

    biblioteca.push(libro1);
    biblioteca.push(revista1);

    biblioteca.forEach(material => material.mostrarInfo());

    libro1.prestar();
    console.log("libro prestado");

    libro1.devolver();
    console.log("libro devuelto");

    libro1.prestar();
    console.log("libro prestado de nuevo");

    libro1.prestar();

} catch (error) {
    if (error instanceof ErrorLibroNoDisponible) {
        console.log("Error:", error.message);
    } else {
        console.log("Error general:", error.message);
    }
}

/* class ErrorLibroNoDisponible extends Error {
    constructor(mensaje) {
        super(mensaje);
    }
}

class Libro {
    constructor(titulo, autor) {
        if (titulo === "") {
            throw new Error("El título no puede estar vacío");
        }
        if (autor.length < 3) {
            throw new Error("El autor debe tener al menos 3 caracteres");
        }
        this.titulo = titulo;
        this.autor = autor;
        this.disponible = true;
    }

    prestar() {
        if (!this.disponible) {
            throw new ErrorLibroNoDisponible("El libro ya está prestado");
        }
        this.disponible = false;
    }
}

try {
    const libro = new Libro("Cien años de soledad", "Gabriel García Márquez");
    libro.prestar();
    libro.prestar();
} catch (error) {
    if (error instanceof ErrorLibroNoDisponible) {
        console.log("Error de préstamo:", error.message);
    } else {
        console.log("Error de validación:", error.message);
    }
} */