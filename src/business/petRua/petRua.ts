import * as yup from 'yup'
import IPetRua from '../../models/petRua/petRua'

export const petRuaBody: yup.SchemaOf<IPetRua> = yup.object().shape({
    nome: yup.string().required(),
    localEncontrado: yup.string(),
    ferido: yup.number().required().min(0).max(4),
    desnutrido: yup.number().required().min(0).max(4),
    agressivo: yup.number().required().min(0).max(4),
    porte: yup.number().required().min(0).max(2),
    observacoes: yup.string()
});