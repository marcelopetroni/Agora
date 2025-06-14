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
        body: mediaObjectSchema
    },
    getOne: {
        params: yup.object({
            id: yup.number().integer('O ID deve ser um número inteiro.').positive('O ID deve ser um número positivo.').required('O ID da mídia é obrigatório.')
        })
    }
};

export default MediaSchema;