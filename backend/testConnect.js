const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function main() {
    try {
        await prisma.$connect();
        console.log('Conexão ao banco de dados realizada com sucesso!');

        const result = await prisma.$queryRaw`SELECT NOW()`;
        console.log('Hora atual do servidor PostgreSQL:', result[0]);

    } catch (error) {
        console.error('Erro ao conectar ao banco de dados:', error);
    } finally {
        await prisma.$disconnect();
    }
}

main();
