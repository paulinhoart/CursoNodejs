class NotImplementedException extends Error {
    constructor() {
        super('Not Implemented Exception')
    }
}
//Aqui todas as assinaturas, para todas as estratégias seguir este contrato, tem que implementare quem náo seguir apresentar erro
class ICrud {
    create(item) {
        throw new NotImplementedException()
    }

    read(query) {
        throw new NotImplementedException()
    }

    update(id, item) {
        throw new NotImplementedException()
    }

    delete(id) {
        throw new NotImplementedException()
    }

    isConnected() {
        throw new NotImplementedException()
    }
}

module.exports = ICrud