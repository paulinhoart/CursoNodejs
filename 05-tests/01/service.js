const { get } = require('axios')

const URL  = `https://swapi.dev/api/people`

async function obterPessoas(nome) {
    const url = `${URL}/?search=${nome}&format=json`
    const result = await get(url)
    //console.log('resultado da consulta', result)
    return result.data.results.map(mapearPessoas)
}

//obterPessoas(``)
function mapearPessoas(item) {
    return {
        nome: item.name,
        peso: item.height
    }
}


module.exports = {
    obterPessoas
}