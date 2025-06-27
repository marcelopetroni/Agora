import * as yup from 'yup';

export const mediaObjectSchema = yup.object({
    type: yup.string()
        .oneOf(['image', 'video'], 'O tipo de mídia deve ser "image" ou "video".')
        .required('O tipo da mídia é obrigatório.'),
    url: yup.string()
        .url('A URL da mídia fornecida é inválida.')
        .required('A URL da mídia é obrigatória.')
});

const MediaSchema = {
    create: {
        body: mediaObjectSchema.concat(yup.object({
            user_id: yup.number()
                .integer()
                .positive()
                .required('O ID do usuário é obrigatório.'),
            post_id: yup.number()
                .integer()
                .positive()
                .nullable()
                .optional()
        })).noUnknown()
    },
    getOne: {
        params: yup.object({
            id: yup.number().integer().positive().required('O ID da mídia é obrigatório.')
        }).noUnknown()
    },
    getMediasByUser: {
        params: yup.object({
            user_id: yup.number().integer().positive().required('O ID do usuário é obrigatório.')
        }).noUnknown(),
        query: yup.object({
            page: yup.number().integer().positive().optional(),
            size: yup.number().integer().positive().optional()
        }).noUnknown()
    },
    destroy: {
        params: yup.object({
            id: yup.number().integer().positive().required('O ID da mídia é obrigatório.')
        }).noUnknown()
    }
};

export default MediaSchema;
