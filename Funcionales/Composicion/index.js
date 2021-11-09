const users = [
    { edad: 17, nombre: 'Arthur', apellido: 'Soto' },
    { edad: 19, nombre: 'Charly', apellido: 'Muñoz' },
    { edad: 24, nombre: 'Loreto', apellido: 'Zapata' },
    { edad: 1, nombre: 'Pedro', apellido: 'Lopez' },
]
/* Estos metodos se va a un archivo de helpers o utils */
const compose = (...fns) => x => fns.reduceRight((y, f) => f(y), x)

const pipe = (...fns) => x => fns.reduce((y, f) => f(y), x)

const filter = f => xs => xs.filter(f);
const head = xs => xs[0];
const formateo = x => ({
    nombreCompleto: `${x.nombre} ${x.apellido}`,
    edad: x.edad
})
const formato = x => `${x.nombreCompleto} tiene ${x.edad} año(s)`
/* Estos metodos se va a un archivo de helpers o utils */


// const traerPrimerInfante = compose(
//     formato,
//     formateo,
//     head,
//     filter(x => x.edad < 2),
// )

const traerPrimerInfante = pipe(
    filter(x => x.edad < 2),
    head,
    formateo,
    formato,
)

// formato(formateo(head(data.filter(x => x.edad < 2))))

// const primerInfante =
// const primerInfante = infantes[0]
// const infante = {
//     nombreCompleto: `${primerInfante.nombre} ${primerInfante.apellido}`,
//     edad: primerInfante.edad,
// }
// return primerInfante

console.log(traerPrimerInfante(users));