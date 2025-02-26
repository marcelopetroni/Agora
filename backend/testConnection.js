import { db } from './models/index.js';
const { sequelize } = db;

async function testarConexao() {
    try {
        await sequelize.authenticate();
        console.log('Conexão com o banco de dados estabelecida com sucesso!');

        const [resultado] = await sequelize.query('SELECT NOW()');
        console.log('Hora atual do servidor PostgreSQL:', resultado[0]);
    } catch (erro) {
        console.error('Erro ao conectar ao banco de dados:', erro);
    } finally {
        await sequelize.close();
    }
}

testarConexao();
