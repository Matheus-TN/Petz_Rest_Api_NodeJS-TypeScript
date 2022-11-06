export default interface IPet{
    petId:number,
    idUsuario: number,
    nome:string,
    raca:string,
    idade:number,
    porte:number,
    alergias?:string,
    doencas?:string
}