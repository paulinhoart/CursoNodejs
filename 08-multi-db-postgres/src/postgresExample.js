// instalar o sequelize e os drivers do postgres para conexao
// instalar na pasta raiz ex 08-multi-db-postgres
// npm i sequelize pg-hstore pg

const Sequelize = require('sequelize')
const driver = new Sequelize(
    'heroes',
    'paulodasilva',
    '242728', {
        host: 'localhost',
        dialect: 'postgres',
        quoteIdentifiers: false,
        operatorsAliases: false
    }
)

async function main() {
    const Herois = driver.define('herois', {
        id: {
            type: Sequelize.INTEGER,
            required: true,
            primaryKey: true,
            autoIncrement: true
        }, 
        nome: {
            type: Sequelize.STRING,
            required: true
        },
        poder : {
            type: Sequelize.STRING,
            required: true
        }
    }, {
        tableName: 'TB_HEROIS',
        freezeTableName: false,
        timestamps: false
    })
    await Herois.sync()
    /*
    await Herois.create( {
        nome: 'Tony Stark',
        poder: 'Homem de Ferro'
    }) */

    const result = await Herois.findAll( {
        // trazer apenas as informacoes de fato passar o raw: true
        raw: true,
        // filtro coluna
        //attributes: ['nome']
    })
    console.log('result', result)
}

main()