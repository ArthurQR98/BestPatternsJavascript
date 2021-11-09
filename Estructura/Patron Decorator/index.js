// class MacBook {
//     constructor() {
//         this.precio = 1000;
//         this.pantalla = 11.6;
//     }
// }

// const macbook = new MacBook()

// macbook.agregarMemoria = function () {
//     this.precio += 100;
// }

// macbook.agregarMemoria();

// console.log(macbook.precio);



class Macbook {
    precio() {
        return 1000
    }
}

const memoria = macbook => {
    const v = macbook.precio() //1000
    macbook.precio = function () {
        return v + 200
    }
}

const macbook = new Macbook()
memoria(macbook)

console.log(macbook.precio());