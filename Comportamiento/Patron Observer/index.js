const user = new User();

const init = () => {
    user.on('login', userLoggedIn)
}

const userLoggedIn = () => {
    // usuario inicio sesion
}

app.init();

// en algun lugar de nuestra app
const login = () => {
    // logica de inicio de sesion
    // .. 

    // Luego:
    user.trigger('login')
}

login()