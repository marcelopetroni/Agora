import { UserService } from '../services/index.js';

class UserController {
    constructor() {
        this.userService = new UserService();
        this.create = this.create.bind(this);
        this.login = this.login.bind(this);
        this.getAllUsers = this.getAllUsers.bind(this);
        this.update = this.update.bind(this);
    }

    async create(req, res) {
        const { name, email, password } = req.body;

        try {
            const user = await this.userService.create({
                name,
                email,
                password,
            });

            res.status(201).json({
                success: true,
                data: user,
            });
        } catch (error) {
            res.status(500).json({
                success: false,
                error: error.message || 'Erro inesperado aconteceu',
            });
        }
    }

    async getAllUsers(req, res) {
        try {
            const users = await this.userService.getAllUsers();
            res.status(200).json({
                success: true,
                data: users,
            });
        } catch (error) {
            res.status(500).json({
                success: false,
                error: error.message || 'Erro inesperado aconteceu',
            });
        }
    }

    async login(req, res) {
        const { email, password } = req.body;

        try {
            const user = await this.userService.login({ email, password });

            if (!user) {
                console.log('Email ou senha inválidos');

                return res.status(401).json({
                    success: false,
                    message: 'Email ou senha inválidos',
                });
            }

            return res.status(200).json({
                success: true,
                message: 'Login bem-sucedido'
            });
        } catch (error) {
            res.status(500).json({
                success: false,
                error: error.message || 'Erro inesperado aconteceu',
            });
        }
    }

    async update(req, res) {
        const { id } = req.query;

        try {
            const options = {
                filter: {
                    id: id,
                },
                changes: req.body,
            };

            const response = await this.userService.update(options);

            res.status(200).json({
                success: true,
                data: response,
            });

        } catch (error) {
            res.status(500).json({
                success: false,
                error: error.message || 'Erro inesperado aconteceu',
            });
        }
    }

}

export default UserController;
