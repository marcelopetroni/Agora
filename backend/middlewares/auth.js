export const authMiddleware = (req, res, next) => {
    console.log('Middleware de autenticação executado.');

    next();
};