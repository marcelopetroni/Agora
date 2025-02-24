import * as yup from 'yup';
import { isValidEmail, isValidPassword, isValidName } from '../utils/utils.js';

const UserSchema = {
    create: {
        body: yup.object({
            name: yup.string()
                .min(3)
                .max(100)
                .test('invalidFormat', 'Formato de nome inválido', value => isValidName(value))
                .required('Nome é obrigatório'),
            email: yup.string()
                .test('invalidFormat', 'Formato de email inválido', value => isValidEmail(value))
                .required('Email é obrigatório'),
            password: yup.string()
                .min(6, 'A senha deve ter pelo menos 6 caracteres')
                .max(30, 'A senha pode ter até 30 caracteres')
                .test('invalidFormat', 'Formato de senha inválido', value => isValidPassword(value))
                .required('Senha é obrigatória'),
            birth: yup.date().nullable(),
            country: yup.string().min(2).max(100).nullable(),
            languages: yup.array().of(yup.string()).nullable(),
            field: yup.array().of(yup.string()).nullable(),
            company: yup.string().nullable(),
            experience: yup.string().nullable()
        }).noUnknown(),
    },

    update: {
        query: yup.object({
            id: yup.number().min(1).required('ID do usuário é obrigatório'),
        }).noUnknown(),
        body: yup.object({
            name: yup.string().min(3).max(100),
            email: yup.string().test('invalidFormat', 'Formato de email inválido', value => isValidEmail(value)),
            password: yup.string()
                .min(6, 'A senha deve ter pelo menos 6 caracteres')
                .max(30, 'A senha pode ter até 30 caracteres')
                .test('invalidFormat', 'Formato de senha inválido', value => isValidPassword(value)),
        }).noUnknown(),
    },
    login: {
        body: yup.object({
            email: yup.string()
                .test('invalidFormat', 'Formato de email inválido', value => isValidEmail(value))
                .required('Email é obrigatório'),
            password: yup.string()
                .min(6, 'A senha deve ter pelo menos 6 caracteres')
                .max(30, 'A senha pode ter até 30 caracteres')
                .required('Senha é obrigatória')
        }).noUnknown(),
    },
};

export default UserSchema;
