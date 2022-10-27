import { clinicaMock } from "../controllers";
import IClinica from "../models/clinica";
import * as yup from 'yup';

export const clinicaBodyValidation: yup.SchemaOf<IClinica> = yup.object().shape({
    clinicaId: yup.number().positive().min(0),
    nome: yup.string().required().min(1),
    avaliacao: yup.number().required().positive().min(0),
    endereco: yup.string().required().min(1),
    sobre: yup.string().min(0),
    servicos: yup.string().min(0),
    horarios: yup.array().required().min(1),
    pagamento: yup.array().required().min(1),
    avaliacaoCount: yup.number()

});

export const clinicaIsvalid = (nome: string) => {
    return clinicaMock.find(clinica => clinica.nome === nome) === undefined
};