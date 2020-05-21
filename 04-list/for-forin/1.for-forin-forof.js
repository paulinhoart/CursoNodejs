const service = require('./service')

// sera executa em modo Promise, por isso o asyn 
async function main() {
    try {
        const result = await service.obterPessoas('a')
        const names  = []
        
        //Exemplo com for
        //console.time('Com For')
        //for (let i = 0; i <= result.results.length -1; i++) {
        //    const pessoa = result.results[i]
        //    names.push(pessoa.name)
        //}
        //console.log(`names`, names)
        //console.timeEnd('Com For')

        //Exemplo com for in -
        //console.time('Com for in')
        //for(let i in result.results) {
        //    const pessoa = result.results[i]
        //    names.push(pessoa.name)
        //}
        //console.log(`names`, names)
        //console.timeEnd('Com for in')

        //Exemplo com for of
        console.time('com for Of')
        for(pessoa of result.results) {
            names.push(pessoa.name)
        }
        console.log(`names`, names)
        console.timeEnd('com for Of')

    }
    catch (error) {
        console.error(`Deu erro: `, error)
    }

}

main()