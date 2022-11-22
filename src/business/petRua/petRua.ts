import * as yup from 'yup'
import IPetRua from '../../models/petRua/petRua'

export const petRuaBody: yup.SchemaOf<IPetRua> = yup.object().shape({
    petRuaId: yup.number(),
    nome: yup.string().required(),
    localEncontrado: yup.string(),
    ferido: yup.number().required().min(0).max(4),
    desnutrido: yup.number().required().min(0).max(4),
    agressivo: yup.number().required().min(0).max(4),
    porte: yup.number().required().min(0).max(2),
    observacoes: yup.string()
});

export const switchPorteRua = (pet: IPetRua) => {
    switch (pet.porte){
        case 0: 
            pet.porte = 'Pequeno'
            break;

        case 1: 
            pet.porte = 'Medio'
            break;

        case 2: 
            pet.porte = 'Grande'
            break;
    }

    return pet;
}
