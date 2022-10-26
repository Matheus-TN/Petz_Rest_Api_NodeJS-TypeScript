import IUser from "../models/user";
import * as yup from "yup";

export const userBodyValidation: yup.SchemaOf<IUser> = yup.object().shape({
  userId: yup.number().positive().min(0),
  name: yup.string().required().min(1),
  email: yup.string().required().min(1),
  password: yup.string().required().min(1),
  crmv: yup.string(),
  address: yup.string(),
});
