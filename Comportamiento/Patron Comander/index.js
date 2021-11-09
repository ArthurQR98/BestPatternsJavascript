const Commander = (() => {
    const o = {
        comprar: x => {
            console.log(`Comprando ${x}`);
        },
        vender: x => {
            console.log(`Vendiendo ${x}`);
        }
    }

    return {
        run: (comando, argumento) => {
            if (!o[comando]) {
                console.log('comando no existe!');
                return
            }
            o[comando](argumento)
        }
    }
})()

Commander.run('comprar', 'Mazda')
Commander.run('lala', 'No pasa nada')