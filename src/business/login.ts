import { userMock } from "../controllers/user";
import ILogin from "../models/login";
import * as yup from "yup";

export const loginBodyValidation: yup.SchemaOf<ILogin> = yup.object().shape({
  email: yup.string().required().min(1),
  password: yup.string().required().min(1),
});

export const loginIsValid = (email: string): boolean => {
  return userMock.find((user) => user.email === email) === undefined;
};
