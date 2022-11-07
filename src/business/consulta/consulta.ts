import * as yup from "yup";
import { listaDeConsultas } from "../../controllers";
import IConsulta from "../../models/consulta/consulta";

export const consultaBody: yup.SchemaOf<IConsulta> = yup.object().shape(
    {
        consultaId: yup.number().min(0),
        idPet: yup.number().required().min(1),
        idClinica: yup.number().required().min(1),
        data: yup.date().required(),
        ativo: yup.boolean()
    }
)

export const consultaValida = (idClinica: number, data: Date): boolean => {
    return listaDeConsultas.find(c => c.idClinica === idClinica && c.data === data) === undefined
}