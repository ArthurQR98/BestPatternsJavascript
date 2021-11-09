class MiClase {
    constructor(p1) {
        this.propiedad = p1;

    }
    metodo(){
        // soy metodo de prototype
    }
}

const instancia = new MiClase(4);
console.log(instancia);