const EventEmitter = require('events')
class MeuEmissor extends EventEmitter{

}
const meuEmissor = new MeuEmissor()
const nomeEvento = 'usuario:click'

meuEmissor.on(nomeEvento, function(click){
    console.log('um usuário clicou', click)
})

//meuEmissor.emit(nomeEvento, 'ele clicou na barra de rolagem')

// executa a funcao a cada 1s (1000), utilizando SetInterval
// setInterval(function () {
//    meuEmissor.emit(nomeEvento,' ele clicou ok e esta no setInterval')
//}, 1000)

const stdin = process.openStdin()

function main() {
    return new Promise(function(resolve,reject){
        stdin.addListener('data', function(value){
            //console.log(`Voce digitou: ${value.toString().trim()}`)
        return resolve(value)
        })
    })
}
main().then(function (resultado){
    console.log('resultado', resultado.toString())
})


