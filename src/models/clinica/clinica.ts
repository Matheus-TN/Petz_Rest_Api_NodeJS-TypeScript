import ILogin from "../login/login";

export default interface IClinica extends ILogin{
    clinicaId: number,
    nome:string,
    crmv:string,
    pontuacao:number,
    endereco:string,
    sobre:string,
    servicos:string,
    horarios: string[],
    pagamentos:string[]
}