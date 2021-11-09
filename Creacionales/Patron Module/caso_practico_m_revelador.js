const Users = (() => {
    const recurso = '/users'
    return {
        listar: async () => {
            await fetch(recurso).then(x => x.json())
        },
        create: async (data) => {
            return await fetch(recurso, { type: 'POST', body: JSON.stringify(data) }).then(x => x.json())
        }
    }
})()