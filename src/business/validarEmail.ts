import { listaDeClinicas, listaDeUsuarios } from "../controllers";
import IClinica from "../models/clinica/clinica";
import IUsuario from "../models/usuario/usuario";

export const validarEmail = (id:number, email: string): boolean => {
    let usuario: IUsuario | undefined = listaDeUsuarios.find(u =>  u.usuarioId !== id && u.email === email);
    let clinica: IClinica | undefined = listaDeClinicas.find(c =>  c.clinicaId !== id && c.email === email);

    return usuario === undefined && clinica === undefined
}