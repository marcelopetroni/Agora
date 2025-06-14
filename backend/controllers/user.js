import UserService from '../services/user.js';

class UserController {
    constructor() {
        this.userService = new UserService();
        this.create = this.create.bind(this);
        this.login = this.login.bind(this);
        this.getAllUsers = this.getAllUsers.bind(this);
        this.update = this.update.bind(this);
        this.findOne = this.findOne.bind(this);
        this.destroy = this.destroy.bind(this);
    }

    async create(req, res) {
        try {
            const user = await this.userService.create({ ...req.body });
            res.status(201).json({ success: true, data: user });
        } catch (error) {
            res.status(500).json({ success: false, error: error.message });
        }
    }

    async getAllUsers(req, res) {
        try {
            const { page, size } = req.query;
            const users = await this.userService.getAllUsers({ page, size });
            res.status(200).json({ success: true, data: users });
        } catch (error) {
            res.status(500).json({ success: false, error: error.message });
        }
    }

    async login(req, res) {
        const { email, password } = req.body;
        try {
            const loginData = await this.userService.login({ email, password });
            return res.status(200).json({ success: true, data: loginData });
        } catch (error) {
            return res.status(401).json({ success: false, error: error.message });
        }
    }

    async findOne(req, res) {
        try {
            const { id } = req.params;
            const user = await this.userService.findOne(parseInt(id, 10));
            res.status(200).json({ success: true, data: user });
        } catch (error) {
            res.status(404).json({ success: false, error: error.message });
        }
    }

    async update(req, res) {
        try {
            const options = {
                filter: { id: parseInt(req.params.id, 10) }, 
                changes: req.body,
            };
            // Passa o ID do usuário autenticado para a verificação de permissão
            const authenticatedUserId = req.user.id;

            const response = await this.userService.update(options, authenticatedUserId);
            res.status(200).json({ success: true, data: response });
        } catch (error) {
            res.status(500).json({ success: false, error: error.message });
        }
    }

    async destroy(req, res) {
        try {
            const userIdToDelete = parseInt(req.params.id, 10);
            const authenticatedUserId = req.user.id;

            const result = await this.userService.destroy(userIdToDelete, authenticatedUserId);
            res.status(200).json({ success: true, data: result });
        } catch (error) {
            res.status(500).json({ success: false, error: error.message });
        }
    }
}

export default UserController;
