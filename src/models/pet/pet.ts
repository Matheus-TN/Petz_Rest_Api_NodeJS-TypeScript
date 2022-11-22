export default interface IPet{
    petId:number,
    idUsuario: number,
    nome:string,
    raca:string,
    idade:number,
    porte:any,
    alergias?:string,
    doencas?:string
}