import * as yup from 'yup'
import { listaDeClinicas } from '../../controllers'
import IClinica from '../../models/clinica/clinica'

export const clinicaBody: yup.SchemaOf<IClinica> = yup.object().shape({
    email: yup.string().min(1),
    senha: yup.string().min(1),
    clinicaId: yup.number(),
    nome: yup.string().required(),
    crmv: yup.string().required(),
    pontuacao: yup.number().min(0).max(5),
    endereco: yup.string(),
    sobre: yup.string(),
    servicos: yup.string(),
    horarios: yup.array(),
    pagamentos: yup.array()
})

export const clinicaValido = (clinicaId: number, nome: string, crmv: string): boolean => {
    return listaDeClinicas.find(c => c.clinicaId !== clinicaId && (c.nome === nome || c.crmv === crmv)) === undefined
}

export const valoresDefault = (clinica: IClinica) => {
    if(clinica.endereco === '') clinica.endereco = 'Endereço não cadastrado'
    if(clinica.sobre === '') clinica.sobre = 'Sobre não cadastrado'
    if(clinica.servicos === '') clinica.servicos = 'Serviços não cadastrado'
    if(clinica.horarios === undefined) clinica.horarios = ['Seg. - Sex. das 8:00 - 17:00']
    if(clinica.pagamentos === undefined) clinica.pagamentos = ['Mastercard']

    return clinica;
}