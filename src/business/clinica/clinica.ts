import * as yup from 'yup'
import { listaDeClinicas } from '../../controllers'
import IClinica from '../../models/clinica/clinica'

export const clinicaBody: yup.SchemaOf<IClinica> = yup.object().shape({
    email: yup.string().required().min(1),
    senha: yup.string().required().min(1),
    clinicaId: yup.number(),
    nome: yup.string().required(),
    crmv: yup.string().required(),
    pontuacao: yup.number().required().min(0).max(5),
    endereco: yup.string().required(),
    sobre: yup.string(),
    servicos: yup.string(),
    horarios: yup.array().required(),
    pagamentos: yup.array().required()
})

export const clinicaValido = (clinicaId: number, nome: string, crmv: string): boolean => {
    return listaDeClinicas.find(c => c.clinicaId !== clinicaId && (c.nome === nome || c.crmv === crmv)) === undefined
}