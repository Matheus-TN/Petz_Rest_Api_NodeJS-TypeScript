export default interface IClinica {
  clinicaId: number;
  nome: string;
  avaliacao: number;
  endereco: string;
  sobre: string;
  servicos: string;
  horarios: string[];
  pagamento: string[];
  avaliacaoCount: number;
}