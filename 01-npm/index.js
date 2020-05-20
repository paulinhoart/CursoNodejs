console.log('Hello World .NodeJs')
const a = 1
const b = 2
console.log(a+b)

class Usuario{
    retornaDadosUsuario(callback){
        setTimeout(() =>{
            return callback( { nome: "Paulo Roberto Node" });
        })
    }
}

let usuario = new Usuario();

usuario.retornaDadosUsuario((resultado) => {
    console.log(resultado);
});

/*console.log(usuario)
*/