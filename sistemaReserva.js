class Reservacion {
    constructor(nombreCliente, numPersonas, fecha, hora) {
        this.nombreCliente = nombreCliente;
        this.numPersonas = numPersonas;
        this.fecha = fecha;
        this.hora = hora;
    }

    mostrarReserva() {
        return `Cliente: ${this.nombreCliente}, Personas: ${this.numPersonas}, Fecha: ${this.fecha}, Hora: ${this.hora}`;
    }
}

class ReservaNormal extends Reservacion {
    mostrarReserva() {
        return super.mostrarReserva() + " | Tipo: Normal";
    }
}

class ReservaVIP extends Reservacion {
    constructor(nombreCliente, numPersonas, fecha, hora, beneficio) {
        super(nombreCliente, numPersonas, fecha, hora);
        this.beneficio = beneficio;
    }

    mostrarReserva() {
        return super.mostrarReserva() + ` | VIP: ${this.beneficio}`;//super.mostrarReserva() + " | Tipo: VIP, Beneficio: " + this.beneficio;
    }
}

class SistemaReservas {
    constructor() {
        this.reservas = [];
    }

    agregarReserva(reserva) {//recibe un objeto reserva
        this.reservas.push(reserva);
    }

    mostrarReservas() {
        this.reservas.map(r => console.log(r.mostrarReserva()));
    }
}

const sistema = new SistemaReservas();//instancia del sistema de reservas

sistema.agregarReserva(new ReservaNormal("Luis",4,"20/03","7pm"));//agregar una reserva normal al sistema
sistema.agregarReserva(new ReservaVIP("Ana",2,"21/03","8pm","Postre gratis"));//agregar una reserva VIP al sistema

sistema.mostrarReservas();//mostrar todas las reservas en el sistema