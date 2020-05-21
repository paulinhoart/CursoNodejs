const { obterPessoas } = require('./service')

async function main () {
    try {
        const { results } = await obterPessoas(`a`)

        const familiaLars = results.filter( function (item) {
            // por padrao precisa retorar um booleano
            // para informar se deve remover da lista
            // false > remove da lista
            // true > mantem
            // objetvo, náo encontreou igual = -1
            // econtrou  = posicaoNoArray
            const result = item.name.toLowerCase().indexOf(`lars`) !== -1
            return result
        })
        //console.log(familiaLars)
        const names = familiaLars.map((pessoa) => pessoa.name)
        //console.log(names)
        const gender = familiaLars.map((genero) => genero.gender)
        console.log(names, gender)

    } catch (error) {
        console.log('Deu ruim', error)
    }
}

main()