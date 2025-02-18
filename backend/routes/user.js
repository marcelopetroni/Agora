import { UserController } from '../controllers/index.js';
import { UserSchema } from '../schemas/index.js';
import { SchemaValidator } from '../middlewares/index.js';
import { Router } from 'express';

export default class userRoutes {
	constructor() {
        this.router = new Router();
		this.UserController = new UserController();
        this.SchemaValidator = SchemaValidator;
	}

	setup() {
		this.router.get('/', this.UserController.getAllUsers);
		this.router.post('/login', this.SchemaValidator.validate(UserSchema.login), this.UserController.login);
		this.router.post('/create-user', this.SchemaValidator.validate(UserSchema.create), this.UserController.create);
		this.router.put('/update-user', this.SchemaValidator.validate(UserSchema.update), this.UserController.update);

		return this.router;
	}
}
