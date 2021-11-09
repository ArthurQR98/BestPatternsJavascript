// const Emmitter = (() => {
//     const topics = {}
//     const hOP = topics.hasOwnProperty

//     return {
//         on: (topic, listener) => {
//             if (!hOP.call(topics, topic)) topics[topic] = []
//             topics[topic].push(listener)
//         },
//         emit: (topic, info) => {
//             if (!hOP.call(topics, topic)) return
//             topics[topic].forEach(item => item(info != undefined ? info : {}))
//         }
//     }
// })()

// Emmitter.on('lala', x => console.log(x))
// Emmitter.emit('lala', { lala: "lolo" })


const Emitter = require('events');
const emitter = new Emitter();


emitter.on('lala', x => console.log(x))
emitter.emit('lala', { lala: 'lele' })

