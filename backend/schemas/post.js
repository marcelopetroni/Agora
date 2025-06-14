import * as yup from 'yup';
import { mediaObjectSchema } from './media.js';

const PostSchema = {
    create: {
        body: yup.object({
            text: yup.string()
                .max(5000, 'O texto do post pode ter no máximo 5000 caracteres.')
                .nullable(),
            
            medias: yup.array().of(mediaObjectSchema).nullable()
        }).noUnknown()
    },

    update: {
        params: yup.object({
            id: yup.number().integer('O ID deve ser um número inteiro.').positive('O ID deve ser um número positivo.').required('O ID do post é obrigatório.')
        }),
        body: yup.object({
            text: yup.string()
                .max(5000, 'O texto do post pode ter no máximo 5000 caracteres.')
                .nullable()
        }).noUnknown()
    },
    
    getOneOrDelete: {
        params: yup.object({
            id: yup.number().integer('O ID deve ser um número inteiro.').positive('O ID deve ser um número positivo.').required('O ID do post é obrigatório.')
        })
    },

    findAll: {
        query: yup.object({
            page: yup.number().integer().positive().default(1),
            size: yup.number().integer().positive().default(10),
            user_id: yup.number().integer().positive() 
        })
    }
};

export default PostSchema;