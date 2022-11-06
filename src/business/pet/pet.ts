import * as yup from 'yup'
import { listaDePets } from '../../controllers';
import IPet from '../../models/pet/pet';

export const petBody: yup.SchemaOf<IPet> = yup.object().shape({
    petId: yup.number(),
    idUsuario: yup.number().required().min(1),
    nome: yup.string().required().min(1),
    raca:yup.string().required().min(1),
    idade:yup.number().required().min(0),
    porte:yup.number().required().min(0).max(2),
    alergias: yup.string(),
    doencas:yup.string()
});

export const petValido = (idUsuario: number, nome: string): boolean => {
    return listaDePets.find(p => p.idUsuario === idUsuario && p.nome === nome) === undefined
}

export const petValidoParaAtualizar = (idUsuario: number, petId: number, nome: string): boolean => {
    return listaDePets.find(p => p.idUsuario === idUsuario && p.petId !== petId && p.nome === nome) === undefined
}

