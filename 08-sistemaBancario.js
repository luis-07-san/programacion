/* class Cuenta {
    constructor(saldo) {
        this.saldo = saldo;
    }

    depositar(monto) {
        this.saldo += monto;
    }

    consultarSaldo() {
        return this.saldo;
    }
}
class CuentaAhorro extends Cuenta {
    retirar(monto) {
        if (monto > this.saldo) {
            console.log("No puedes retirar más de lo que tienes");
        } else {
            this.saldo -= monto;
        }
    }

    aplicarInteres() {
        this.saldo += this.saldo * 0.05;
    }
}
class CuentaCorriente extends Cuenta {
    constructor(saldo, limite) {
        super(saldo);
        this.limite = limite;
    }

    retirar(monto) {
        if (this.saldo - monto < -this.limite) {
            console.log("Supera el límite de sobregiro");
        } else {
            this.saldo -= monto;
        }
    }
}
class Cliente {
    constructor(nombre, id, cuenta) {
        this.nombre = nombre;
        this.id = id;
        this.cuenta = cuenta;
    }
}
let clientes = [];
clientes.push(new Cliente("Luis", 1, new CuentaAhorro(1000)));
clientes.push(new Cliente("Ana", 2, new CuentaCorriente(500, 300)));

clientes.forEach(c => {
    console.log("Cliente:", c.nombre);
    console.log("Tipo de cuenta:", c.cuenta.constructor.name);
    console.log("Saldo:", c.cuenta.consultarSaldo());
});
 */
/* class Cuenta {
    constructor(saldo) {
        this.saldo = saldo;
    }

    depositar(monto) {
        this.saldo += monto;
    }

    consultarSaldo() {
        return this.saldo;
    }
}

class CuentaAhorro extends Cuenta {
    retirar(monto) {
        if (monto > this.saldo) {
            console.log("Fondos insuficientes");
        } else {
            this.saldo -= monto;
        }
    }

    aplicarInteres() {
        this.saldo += this.saldo * 0.05;
    }
}

class CuentaCorriente extends Cuenta {
    constructor(saldo, limite) {
        super(saldo);
        this.limite = limite;
    }

    retirar(monto) {
        if (this.saldo - monto < -this.limite) {
            console.log("Límite excedido");
        } else {
            this.saldo -= monto;
        }
    }
}

class Cliente {
    constructor(nombre, id, cuenta) {
        this.nombre = nombre;
        this.id = id;
        this.cuenta = cuenta;
    }
}


let clientes = [];

// paraagregar clientes desde consola de forma mamual primero empezamos con estos 2 ejemplos 
clientes.push(new Cliente("Luis", 1, new CuentaAhorro(1000)));
clientes.push(new Cliente("Ana", 2, new CuentaCorriente(500, 300)));


clientes.map(c => {
    console.log("Cliente:", c.nombre);
    console.log("Tipo:", c.cuenta.constructor.name);
    console.log("Saldo:", c.cuenta.consultarSaldo());
}); */

// Clase base
class Cuenta {
    constructor(numeroCuenta, saldoInicial) {
        this.numeroCuenta = numeroCuenta;
        this.saldo = saldoInicial;
    }

    depositar(monto) {
        this.saldo += monto;
        console.log(`Depósito realizado. Nuevo saldo: $${this.saldo}`);
    }

    retirar(monto) {
        if (monto <= this.saldo) {
            this.saldo -= monto;
            console.log(`Retiro realizado. Nuevo saldo: $${this.saldo}`);
        } else {
            console.log("Fondos insuficientes.");
        }
    }

    consultarSaldo() {
        return this.saldo;
    }
}

// Subclase CuentaAhorro
class CuentaAhorro extends Cuenta {
    constructor(numeroCuenta, saldoInicial, tasaInteres) {
        super(numeroCuenta, saldoInicial);
        this.tasaInteres = tasaInteres;
    }

    aplicarInteres() {
        let interes = this.saldo * this.tasaInteres;
        this.saldo += interes;
        console.log(`Interés aplicado. Nuevo saldo: $${this.saldo}`);
    }
}

// Subclase CuentaCorriente
class CuentaCorriente extends Cuenta {
    constructor(numeroCuenta, saldoInicial, limiteSobregiro) {
        super(numeroCuenta, saldoInicial);
        this.limiteSobregiro = limiteSobregiro;
    }

    retirar(monto) {
        if (monto <= this.saldo + this.limiteSobregiro) {
            this.saldo -= monto;
            console.log(`Retiro realizado. Nuevo saldo: $${this.saldo}`);
        } else {
            console.log("Límite de sobregiro excedido.");
        }
    }
}

// Clase Cliente
class Cliente {
    constructor(nombre, identificacion, cuenta) {
        this.nombre = nombre;
        this.identificacion = identificacion;
        this.cuenta = cuenta;
    }
}

// ARRAY de clientes
let clientes = [];

let cuenta1 = new CuentaAhorro("001", 1000, 0.05);
let cliente1 = new Cliente("Aida", "12345", cuenta1);

let cuenta2 = new CuentaCorriente("002", 500, 300);
let cliente2 = new Cliente("Marcos", "67890", cuenta2);

clientes.push(cliente1);
clientes.push(cliente2);

// Probar métodos
cliente1.cuenta.depositar(500);
cliente1.cuenta.aplicarInteres();
cliente2.cuenta.retirar(700);

// Recorrer con map
clientes.map(cliente => {
    console.log("----------------------------");
    console.log("Cliente:", cliente.nombre);
    console.log("Tipo de cuenta:", cliente.cuenta.constructor.name);
    console.log("Saldo actual:", cliente.cuenta.consultarSaldo());
});