/*
Objetivos
0 - Obter Usuario
1 - Obter o numero de telefone de um usuario a partir de seu ID
2 - Obter o endereco do usuario pelo Id
*/

const util = require ('util')
const obterEnderecoAsync = util.promisify(obterEndereco)

function obterUsuario() {
    // qaundo de algum problema -> reject(ERRO)
    // quando sucess -> RESOLV
    return new Promise (function resolvePromise(resolve, reject){
        setTimeout(function() {
            return resolve ( {
                id: 1,
                nome: 'Max',
                dataNascimento: new Date()
            })
        }, 1000)
    })
    
}

function obterTelefone(idUsuario) {
    return new Promise (function resolvePromise(resolve, reject){
        setTimeout(() => {
            return resolve ( {
                telefone: '9 96698 0000',
                ddd: 11
            })
        }, 2000);
    })
    
}

function obterEndereco(idUsuario, callback) {
    setTimeout(() => {
        return callback(null, {
            endereco: 'Rua Escorpiao',
            numero: 20
        })
    }, 2000)
    
}
// 1 - primeiro adicionar a palavr async -> automaticamente ela retornara uma Promise
main()
async function main() {
    try{
        console.time('medida-promise')
        const usuario = await obterUsuario()
        //const telefone = await obterTelefone(usuario.id)
        //const endereco = await obterEnderecoAsync(usuario.id)
        const resultado = await Promise.all([
            obterTelefone(usuario.id),
            obterEnderecoAsync(usuario.id)
        ])
        const endereco = resultado[1]
        const telefone = resultado[0]
        console.log(`
            Nome: ${usuario.nome},
            Telefone: (${telefone.ddd}) ${telefone.telefone}
        `)
        console.timeEnd('medida-promise')
    }
    catch (error) {
        console.error('Deu ruim', error)
    }
}

/*
obterUsuario( function resolverUsuario(erro, usuario) {
    // null || ""|| 0 === false
    if(erro){
        console.error('DEU ruim em usuario', erro)
        return;
    }
    obterTelefone(usuario.id, function resolverTelefone(erro1, telefone){ 
        if(erro1){
            console.error('DEU ruim em telefone', erro1)
            return;
        }
        obterEndereco(usuario.id, function resolverEndereco(erro2, endereco){
            if(erro2){
                console.error('Deu ruim foi no Endereco', erro2)
            }
            console.log(`
                Nome: ${usuario.nome},
                Endereco: ${endereco.endereco}, ${endereco.numero}
                Telefone: (${telefone.ddd})${telefone.telefone}
                `)
            }

        )
        
    })
    
})
*/


//const telefone = obterTelefone(usuario.id)

//console.log('usuario', usuario)
//console.log('telefone', telefone)