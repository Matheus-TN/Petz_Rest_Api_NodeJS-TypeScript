import { petMock, userMock } from "../controllers/user";
import IPet from "../models/pet";
import * as yup from "yup";

export const petBodyValidation: yup.SchemaOf<IPet> = yup.object().shape({
  petId: yup.number().positive().min(0),
  idUser: yup.number().positive().min(0),
  name: yup.string().required().min(1),
  age: yup.number().required().min(0),
  breed: yup.string().required().min(1),
  size: yup.number().positive().min(0).max(2),
  allergy: yup.string(),
  disease: yup.string(),
});

export const petIsvalid = (name: string, idUser: number): boolean => {
  return (
    petMock.find((pet) => pet.name === name && pet.idUser === idUser) ===
      undefined && userMock.find((user) => user.userId === idUser) !== undefined
  );
};

export const petExists = (petId: number): boolean => {
  return petMock.find((pet) => pet.petId === petId) !== undefined;
};
