import ILogin from "../login/login";

export default interface IUsuario extends ILogin{
    usuarioId: number,
    nome:string,
    endereco:string
}