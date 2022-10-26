import IEmail from "./email";

export default interface ILogin extends IEmail {
  password: string;
}
