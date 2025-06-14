import jwt from 'jsonwebtoken';
import db from '../models/index.js';

const { User } = db;

const authMiddleware = async (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({
            success: false,
            error: 'Token de autenticação não fornecido ou mal formatado.',
        });
    }

    const token = authHeader.split(' ')[1]; 

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        const user = await User.findByPk(decoded.id, {
            attributes: { exclude: ['password'] } 
        });

        if (!user) {
            return res.status(401).json({
                success: false,
                error: 'Usuário não encontrado.',
            });
        }

       
        req.user = user;

        next();

    } catch (error) {
        return res.status(401).json({
            success: false,
            error: 'Token inválido ou expirado.',
        });
    }
};

export default authMiddleware;