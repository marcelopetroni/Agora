import { ValidationError } from 'yup';

export default class SchemaValidator {
    static validate(schema) {
        return async (req, res, next) => {
            try {
                if (req.body && schema.body) {
                    await schema.body.validate(req.body, { abortEarly: false });
                }

                if (req.params && schema.params) {
                    await schema.params.validate(req.params, { abortEarly: false });
                }

                if (req.query && schema.query) {
                    await schema.query.validate(req.query, { abortEarly: false });
                }

                next();
            } catch (error) {
                if (error instanceof ValidationError) {
                    return res.status(400).json({
                        message: 'Falha na validação',
                        errors: error.errors,
                    });
                }

                return res.status(500).json({ message: 'Erro Interno do Servidor' });
            }
        };
    }
}
