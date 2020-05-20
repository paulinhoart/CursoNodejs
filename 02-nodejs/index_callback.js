/*
Objetivos
0 - Obter Usuario
1 - Obter o numero de telefone de um usuario a partir de seu ID
2 - Obter o endereco do usuario pelo Id
*/

function obterUsuario(callback) {
    setTimeout(function() {
        return callback(null,  {
            id: 1,
            nome: 'Max',
            dataNascimento: new Date()
        })
    }, 1000)
}

function obterTelefone(idUsuario, callback) {
    setTimeout(() => {
        return callback(null, {
            telefone: '9 96698 0000',
            ddd: 11
        })
    }, 2000)
}

function obterEndereco(idUsuario, callback) {
    setTimeout(() => {
        return callback(null, {
            endereco: 'Rua Escorpiao',
            numero: 20
        })
    }, 2000)
    
}


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
//const telefone = obterTelefone(usuario.id)

//console.log('usuario', usuario)
//console.log('telefone', telefone)