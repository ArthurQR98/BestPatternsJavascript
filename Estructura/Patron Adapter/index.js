class Api {
    constructor() {
        this.operations = function (url, opts, verb) {
            switch (verb) {
                case 'get':
                // return fetch()
                case 'post':
                // return fetch()
                default:
                    return
            }
        }
    }
}

class Api2 {
    constructor() {
        this.get = function (url, opts) {
            // return axios.get()...
        }
        this.post = function (url, opts) {
            // return axios.post()...
        }
    }
}

// Adaptador
class ApiAdaptor {
    constructor() {
        const api2 = new Api2();
        this.operations = function (url, opts, verb) {
            switch (verb) {
                case 'get':
                    return api2.get(url, opts)
                case 'post':
                    return api2.post(url, opts)
                default:
                    return
            }
        }
    }
}

const api = new Api()
api.operations('www.google.pe', { q: 1 }, 'get')

const api2 = new Api2()
api2.get('www.google.pe', { q: 1 })

const adapter = new AdapterApi()
adapter.operations('www.google.pe', { q: 1 }, 'get')