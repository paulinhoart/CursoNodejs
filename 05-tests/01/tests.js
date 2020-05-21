const assert = require('assert')
const { obterPessoas } = require('./service')

//assert.ok(true) ou false

describe('TEstes Star Wars', function() {
    //suite de testes. '=>' = aero function
    it('Objetivo - Buscar  R2-D2', async () => {
        const expected = [{nome: 'R2-D2', peso:'96'}]
        //nosso objetivo
        const nomeBase = `r2-d2`
        const resultado = await obterPessoas(nomeBase)
        assert.deepEqual(resultado, expected)

    }).timeout(10000);
})