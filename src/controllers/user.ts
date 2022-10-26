import { Request, Response } from "express";
import { loginBodyValidation, loginIsValid } from "../business/login";
import { petBodyValidation, petIsvalid, petExists } from "../business/pet";
import { userBodyValidation, userExists } from "../business/user";
import ILogin from "../models/login";
import IPet from "../models/pet";
import IUser from "../models/user";
import * as yup from "yup";

// --- Devido a falta de uma base de dados, foi utilizado uma lista de mock como solução técnica ---
// --- dbo.T_User ---
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

// --- dbo.T_Pet ---
export let petMock: IPet[] = [
  {
    petId: 1,
    idUser: 1,
    name: "pet1",
    age: 1,
    breed: "breed1",
    size: 0,
    allergy: "allergy1",
    disease: "disease1",
  },
  {
    petId: 2,
    idUser: 1,
    name: "pet2",
    age: 2,
    breed: "breed2",
    size: 1,
    allergy: "allergy2",
    disease: "disease2",
  },
  {
    petId: 3,
    idUser: 1,
    name: "pet3",
    age: 3,
    breed: "breed3",
    size: 2,
    allergy: "allergy3",
    disease: "disease3",
  },
  {
    petId: 4,
    idUser: 2,
    name: "pet4",
    age: 4,
    breed: "breed4",
    size: 0,
    allergy: "allergy4",
    disease: "disease4",
  },
  {
    petId: 5,
    idUser: 2,
    name: "pet5",
    age: 5,
    breed: "breed5",
    size: 1,
    allergy: "allergy5",
    disease: "disease5",
  },
];

// Variável para simular o auto-incrementador de um banco de dados
let maxUserId: number = 5;
let maxPetId: number = 5;

// --- ENDPOINTS REFERENTES A USUARIO/LOGIN ----
//
// LOGIN
// GET - http://localhost:3000/login
export const login = async (req: Request<{}, {}, ILogin>, res: Response) => {
  let validatedLogin: ILogin | undefined = undefined;
  let userInfo: IUser | undefined = undefined;
  let pets: IPet[] | undefined = undefined;

  try {
    validatedLogin = await loginBodyValidation.validate(req.body);

    userInfo = userMock.find(
      (user) =>
        user.email === validatedLogin.email &&
        user.password === validatedLogin.password
    );

    pets = petMock.filter((pet) => pet.idUser === userInfo?.userId);

    res.send({
      user: userInfo,
      pets: pets,
    });
  } catch (error) {
    const yupError = error as yup.ValidationError;

    return res.json({
      errors: yupError.message,
    });
  }
};

// GET ALL USERS IF DONT HAVE USER ID OR GET USER BY USER ID
// GET - http://localhost:3000/user/userId?
export const getUser = async (req: Request, res: Response) => {
  try {
    const userId: number = parseInt(req.params.userId);

    if (userId > 0) {
      let users: IUser[] | undefined = undefined;

      users = userMock.filter((user) => user.userId === userId);

      return res.status(200).send(users);
    }

    return res.status(200).send(userMock);
  } catch (error) {
    return res.status(400).send(error);
  }
};

// POST USER
// POST - http://localhost:3000/user
export const createUser = async (
  req: Request<{}, {}, IUser>,
  res: Response
) => {
  let validatedUser: IUser | undefined = undefined;

  try {
    validatedUser = await userBodyValidation.validate(req.body);

    if (loginIsValid(validatedUser.email)) {
      maxUserId += 1;

      validatedUser.userId = maxUserId;

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

// UPDATE USER
// PUT - http://localhost:3000/user
export const updateUser = async (req: Request, res: Response) => {
  let validatedUser: IUser | undefined = undefined;

  try {
    validatedUser = await userBodyValidation.validate(req.body);

    if (userExists(validatedUser.userId)) {
      // Removendo antigo registro
      userMock = userMock.filter(
        (user) => user.userId !== validatedUser.userId
      );

      userMock.push(validatedUser);

      return res.status(200).send(validatedUser);
    }

    return res.status(404).send("Usuário inexistente, tente novamente");
  } catch (error) {
    const yupError = error as yup.ValidationError;

    return res.json({
      errors: yupError.message,
    });
  }
};

// DELETE USER
// DELETE - http://localhost:3000/user/userId
export const deleteUser = async (req: Request, res: Response) => {
  try {
    const userId: number = parseInt(req.params.userId);

    const userInfo: IUser | undefined = userMock.find(
      (user) => user.userId === userId
    );

    if (userInfo === undefined) {
      return res.status(404).send("usuário inexistente, tente novamente");
    }

    userMock = userMock.filter((user) => user.userId !== userId);

    petMock = petMock.filter((pet) => pet.idUser !== userId);

    return res.status(204).send("Deletado com sucesso");
  } catch (error) {
    return res.status(400).send(error);
  }
};

// --- ENDPOINTS REFERENTES A PET ----
//
// GET ALL PETS IF DONT HAVE USER ID OR GET PETS BY USER ID
// GET = http://localhost:3000/pet/userId?
export const getPet = async (req: Request, res: Response) => {
  try {
    const userId: number = parseInt(req.params.userId);

    if (userId > 0) {
      let pets: IPet[] | undefined = undefined;

      pets = petMock.filter((pet) => pet.idUser === userId);

      return res.status(200).send(pets);
    }

    return res.status(200).send(petMock);
  } catch (error) {
    return res.status(400).send(error);
  }
};

// POST PET
// POST - http://localhost:3000/pet
export const postPet = async (req: Request<{}, {}, IPet>, res: Response) => {
  let validatedPet: IPet | undefined = undefined;

  try {
    validatedPet = await petBodyValidation.validate(req.body);

    if (petIsvalid(validatedPet.name, validatedPet.idUser)) {
      maxPetId += 1;

      validatedPet.petId = maxPetId;

      petMock.push(validatedPet);

      return res.status(201).send(validatedPet);
    }

    return res.status(409).json({
      errors:
        "nome de pet já cadastrado para este usuário ou usuário inválido, tente novamente",
    });
  } catch (error) {
    const yupError = error as yup.ValidationError;

    res.json({
      errors: yupError.message,
    });
  }
};

// UPDATE PET
// PUT - http://localhost:3000/pet
export const updatePet = async (req: Request<{}, {}, IPet>, res: Response) => {
  let validatedPet: IPet | undefined = undefined;

  try {
    validatedPet = await petBodyValidation.validate(req.body);

    if (petExists(validatedPet.petId)) {
      // Removendo antigo registro
      petMock = petMock.filter((pet) => pet.petId !== validatedPet.petId);

      petMock.push(validatedPet);

      return res.status(200).send(validatedPet);
    }

    return res.status(404).send("Pet inexistente, tente novamente");
  } catch (error) {
    const yupError = error as yup.ValidationError;

    return res.json({
      errors: yupError.message,
    });
  }
};

// DELETE PET
// DELETE - http://localhost:3000/pet/petId
export const deletePet = async (req: Request, res: Response) => {
  try {
    const petId: number = parseInt(req.params.petId);

    const petInfo: IPet | undefined = petMock.find(
      (pet) => pet.petId === petId
    );

    if (petInfo === undefined) {
      return res.status(404).send("pet inexistente, tente novamente");
    }

    petMock = petMock.filter((pet) => pet.petId !== petId);

    return res.status(204).send("Deletado com sucesso");
  } catch (error) {
    return res.status(400).send(error);
  }
};
