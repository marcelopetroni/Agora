import { UserService } from '../services/index.js';

class UserController {
    constructor() {
        this.userService = new UserService();
        this.create = this.create.bind(this);
        this.login = this.login.bind(this);
        this.loginGoogle = this.loginGoogle.bind(this);
        this.getAllUsers = this.getAllUsers.bind(this);
        this.update = this.update.bind(this);
        this.getUserByEmail = this.getUserByEmail.bind(this);
        this.countUserByEmail = this.countUserByEmail.bind(this);
    }

    async create(req, res) {
        try {
            const user = await this.userService.create({ ...req.body });

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

    async getUserByEmail(req, res) {
        const { email } = req.query;

        try {
            const user = await this.userService.getUserByEmail({ email });

            res.status(200).json({
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

    async countUserByEmail(req, res) {
        const { email } = req.query;

        try {
            const count = await this.userService.countUserByEmail(email);

            res.status(200).json({
                success: true,
                data: count
            });
        } catch (error) {
            res.status(500).json({
                success: false,
                error: error.message || 'Erro inesperado aconteceu',
            });
        }
    };

    async login(req, res) {
        const { email, password } = req.body;

        try {
            const user = await this.userService.login({ email, password });

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

    async loginGoogle(req, res) {
        const { email, name, picture, type } = req.body;

        try {
            const user = await this.userService.loginGoogle({
                email,
                name,
                picture,
                type
            });

            return res.status(200).json({
                success: true,
                message: 'Login com Google bem-sucedido',
                data: user
            });

        } catch (error) {
            return res.status(500).json({
                success: false,
                error: error.message || 'Erro inesperado aconteceu'
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
