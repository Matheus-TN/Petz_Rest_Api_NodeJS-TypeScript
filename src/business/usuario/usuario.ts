import * as yup from 'yup';
import IUsuario from '../../models/usuario/usuario';

export const usuarioBody: yup.SchemaOf<IUsuario> = yup.object().shape({
    email: yup.string().required().min(1),
    senha: yup.string().required().min(1),
    usuarioId: yup.number(),
    nome: yup.string().required(),
    endereco: yup.string()
});