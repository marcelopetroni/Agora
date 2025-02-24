import * as yup from 'yup';

const ProjectSchema = {
    create: {
        body: yup.object({
            title: yup.string()
                .min(3, 'O título deve ter pelo menos 3 caracteres')
                .max(100, 'O título pode ter até 100 caracteres')
                .required('Título do projeto é obrigatório'),
            type: yup.string()
                .min(3, 'O tipo deve ter pelo menos 3 caracteres')
                .max(50, 'O tipo pode ter até 50 caracteres')
                .nullable(),
            start: yup.date().nullable(),
            end: yup.date().nullable(),
            goal: yup.number()
                .min(0, 'A meta de financiamento deve ser um valor positivo')
                .nullable(),
            description: yup.string().max(1000, 'A descrição pode ter até 1000 caracteres').nullable(),
            image: yup.string().url('Formato de URL inválido').nullable()
        }).noUnknown(),
    },

    update: {
        query: yup.object({
            id: yup.number().min(1).required('ID do projeto é obrigatório'),
        }).noUnknown(),
        body: yup.object({
            title: yup.string().min(3).max(100),
            type: yup.string().min(3).max(50),
            start: yup.date(),
            end: yup.date(),
            goal: yup.number().min(0),
            description: yup.string().max(1000),
            image: yup.string().url(),
        }).noUnknown(),
    },
};

export default ProjectSchema;
