const { obterPessoas } = require('./service')

async function main() {
    try {
        const { results } = await obterPessoas(`a`)
        const pesos = results.map (item => parseInt(item.height))
        console.log(pesos)
        const total = pesos.reduce((anterior, proximo) => {
            return anterior + proximo
        }, 0) // o zero é caso o array náo tenha valor, e assim nao da eror na aplicacao

        console.log('peso total: ', total)

    } catch (error) {
        console.log('Deu ruim', error)
    }
}

main()