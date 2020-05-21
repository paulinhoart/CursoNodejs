const { deepEqual, ok } = require('assert')
const database = require('./database')

const DEFAULT_ITEM_CADASTRAR = {
    nome: 'Flash',
    poder: 'speed',
    id: 1
} 

describe('Suite de manupulacao de herois', () => {
    it('deve pesquisar um heroi usando arquivo', async () => {
        //meu objetivo
        const expected = DEFAULT_ITEM_CADASTRAR
        const [resultado] = await database.listar(expected.id)
        deepEqual(resultado, expected)
        //ok(resultado, expected) // o ok sem retornar true se o primeiro parametro retorar ok ou conteudo diferente de null, )
    })
    
    it('deve cadastrar um heroi usando arquivos', async () => {
        const expected = DEFAULT_ITEM_CADASTRAR

        ok(null, expected)
    })
    
}

)