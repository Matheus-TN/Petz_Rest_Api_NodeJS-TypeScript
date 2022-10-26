import { Request, Response } from "express";
import { loginBodyValidation, loginIsValid } from "../business/login";
import { userBodyValidation } from "../business/user";
import IEmail from "../models/email";
import ILogin from "../models/login";
import IUser from "../models/user";
import * as yup from "yup";

export let userMock: IUser[] = [
  {
    userId: 1,
    name: "adm1",
    email: "email1",
    password: "password1",
    crmv: "crmv1",
    address: "address1",
  },
  {
    userId: 2,
    name: "adm2",
    email: "email2",
    password: "password2",
    crmv: "crmv2",
    address: "address2",
  },
  {
    userId: 3,
    name: "adm3",
    email: "email3",
    password: "password3",
    crmv: "crmv3",
    address: "address3",
  },
  {
    userId: 4,
    name: "adm4",
    email: "email4",
    password: "password4",
    address: "address4",
  },
  {
    userId: 5,
    name: "adm5",
    email: "email5",
    password: "password5",
    address: "address5",
  },
];

let maxUserId: number = 6;

export const login = async (req: Request<{}, {}, ILogin>, res: Response) => {
  let validatedLogin: ILogin | undefined = undefined;
  let userInfo: IUser | undefined = undefined;

  try {
    validatedLogin = await loginBodyValidation.validate(req.body);

    userInfo = userMock.find(
      (user) =>
        user.email === validatedLogin.email &&
        user.password === validatedLogin.password
    );

    res.status(userInfo ? 200 : 204).send(userInfo);
  } catch (error) {
    const yupError = error as yup.ValidationError;

    return res.json({
      errors: yupError.message,
    });
  }
};

export const getUser = async (req: Request, res: Response) => {
  res.status(200).send(userMock);
};

export const createUser = async (
  req: Request<{}, {}, IUser>,
  res: Response
) => {
  let validatedUser: IUser | undefined = undefined;

  try {
    validatedUser = await userBodyValidation.validate(req.body);

    if (loginIsValid(validatedUser.email)) {
      validatedUser.userId = maxUserId + 1;

      userMock.push(validatedUser);

      return res.status(201).send(validatedUser);
    }

    return res.status(409).json({
      errors: "email já cadastrado, tente novamente",
    });
  } catch (error) {
    const yupError = error as yup.ValidationError;

    return res.json({
      errors: yupError.message,
    });
  }
};

export const deleteUser = (req: Request<{}, {}, IEmail>, res: Response) => {
  const userInfo: IUser | undefined = userMock.find(
    (user) => user.email === req.body.email
  );

  if (userInfo === undefined) {
    return res.status(404).send("Email inexistente, tente novamente");
  }

  userMock = userMock.filter((user) => user.email !== userInfo.email);

  return res.status(204).send("Deletado com sucesso");
};
