import ILogin from "./login";

export default interface IUsuario extends ILogin {
  userId: number;
  name: string;
  crmv?: string;
  address?: string;
}
