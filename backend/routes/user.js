import UserController from '../controllers/user.js';
import { UserSchema } from '../schemas/index.js';
import { SchemaValidator, authMiddleware } from '../middlewares/index.js';
import { Router } from 'express';

export default class UserRoutes {
    constructor() {
        this.router = new Router();
        this.UserController = new UserController();
        this.SchemaValidator = SchemaValidator;
    }

    setup() {
        this.router.get('/', this.SchemaValidator.validate(UserSchema.findAll), this.UserController.getAllUsers);
        this.router.post('/login', this.SchemaValidator.validate(UserSchema.login), this.UserController.login);
        this.router.post('/create-user', this.SchemaValidator.validate(UserSchema.create), this.UserController.create);
        
        
        this.router.get('/:id', this.SchemaValidator.validate(UserSchema.getOneOrDelete), this.UserController.findOne);

        this.router.put(
            '/:id',
            authMiddleware,
            this.SchemaValidator.validate(UserSchema.getOneOrDelete), 
            this.UserController.update
        );

        this.router.delete(
            '/:id',
            authMiddleware,
            this.SchemaValidator.validate(UserSchema.getOneOrDelete), 
            this.UserController.destroy
        );

        return this.router;
    }
}
