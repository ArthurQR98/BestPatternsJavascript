// lexico , privado y global
const d = 'lelele';
const f = () => {
    const x = 'lalala'
    console.log(x,d);
}

const g = () => {
    const e = 'lalala';
    console.log(e,d);
    console.log(e,x);// x esta fuera del alcanze de la funcion y de global
}

const h = () => {
    const a = "Arthur";
    return () => {
        const b = "Quezada";
        console.log(a,d,b);
    }
}
// g()
h()()