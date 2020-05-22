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
}

class MongoDB extends ICrud {
    constructor() {
        super()
    }

    create(item) {
        console.log('O item foi salvo no MongoDB')
    }
}

class Postgres extends ICrud {
    constructor() {
        super()
    }

    create(item) {
        console.log('O item foi salvo no Postgres')
    }
}

//criar uma classe para trabalhar com contexto de banco de dados
class ContextStrategy extends ICrud {
    constructor(strategy) {
        this._database = strategy
    }

    create(item) {
        return this._database.create(item)
    }

    read(item) {
        return this._database.read(item)
    }

    update(id, item) {
        return this._database.update(id, item)
    }

    delete(id) {
        return this._database.delete(id)
    }
}