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
    }
};

export default PostSchema;