import { Request, Response } from "express";
import * as yup from "yup";
import { clinicaBody, clinicaValido } from "../business/clinica/clinica";
import { petBody, petValido, petValidoParaAtualizar } from "../business/pet/pet";
import { petRuaBody } from "../business/petRua/petRua";
import { usuarioBody } from "../business/usuario/usuario";
import { validarEmail } from "../business/validarEmail";
import IClinica from "../models/clinica/clinica";
import ILogin from "../models/login/login";
import IPet from "../models/pet/pet";
import IPetRua from "../models/petRua/petRua";
import IUsuario from "../models/usuario/usuario";

// --- Devido a falta de uma base de dados, foi utilizado uma lista de mock como solução técnica ---
// --- dbo.T_Usuario ---
export let listaDeUsuarios: IUsuario[] = [
  {
    email: 'usuario1',
    senha: 'senha1',
    usuarioId: 1,
    nome:'string1',
    endereco:'string1'
  },
  {
    email: 'usuario2',
    senha: 'senha2',
    usuarioId: 2,
    nome:'string2',
    endereco:'string2'
  },
  {
    email: 'usuario3',
    senha: 'senha3',
    usuarioId: 3,
    nome:'string3',
    endereco:'string3'
  },
  {
    email: 'usuario4',
    senha: 'senha4',
    usuarioId: 4,
    nome:'string4',
    endereco:'string4'
  },
  {
    email: 'usuario5',
    senha: 'senha5',
    usuarioId: 5,
    nome:'string5',
    endereco:'string5'
  }
];

// --- dbo.T_Pet ---
export let listaDePets: IPet[] = [
  {
    petId:1,
    idUsuario: 1,
    nome:'string1',
    raca:'string1',
    idade:1,
    porte:0,
    alergias:'string',
    doencas:'string'
  },
  {
    petId:2,
    idUsuario: 2,
    nome:'string2',
    raca:'string2',
    idade:2,
    porte:1,
    alergias:'string',
    doencas:'string'
  },
  {
    petId:3,
    idUsuario: 3,
    nome:'string3',
    raca:'string3',
    idade:3,
    porte:2
  },
  {
    petId:4,
    idUsuario: 4,
    nome:'string4',
    raca:'string4',
    idade:4,
    porte:0
  },
  {
    petId:5,
    idUsuario: 5,
    nome:'string5',
    raca:'string5',
    idade:5,
    porte:1
  }
];

// --- dbo.T_PetRua ---
export let listDePetsDeRua: IPetRua[] = [
  {
    nome:'string1',
    localEncontrado: 'string1',
    ferido:0,
    desnutrido:0,
    agressivo:0,
    porte:0,
  },
  {
    nome:'string2',
    localEncontrado: 'string2',
    ferido:1,
    desnutrido:1,
    agressivo:1,
    porte:1,
  },
  {
    nome:'string3',
    localEncontrado: 'string3',
    ferido:2,
    desnutrido:2,
    agressivo:2,
    porte:2,
  },
  {
    nome:'string4',
    localEncontrado: 'string4',
    ferido:3,
    desnutrido:3,
    agressivo:3,
    porte:0,
  },
  {
    nome:'string5',
    localEncontrado: 'string5',
    ferido:0,
    desnutrido:0,
    agressivo:0,
    porte:1,
  },
];

// --- dbo.T_Clinica ---
export let listaDeClinicas: IClinica[] = [
  {
    email: 'clinica1',
    senha: 'senha1',
    clinicaId: 1,
    nome:'string1',
    crmv:'string1',
    pontuacao:0,
    endereco:'string1',
    sobre:'string1',
    servicos:'string1',
    horarios: ['Seg. - Sex. das 8:00 - 17:00', 'Sáb. - Dom. das 12:00 - 17:00'],
    pagamentos:['Mastercard', 'Visa']
  },
  {
    email: 'clinica2',
    senha: 'senha2',
    clinicaId: 2,
    nome:'string2',
    crmv:'string2',
    pontuacao:1,
    endereco:'string2',
    sobre:'string2',
    servicos:'string2',
    horarios: ['Seg. - Sex. das 8:00 - 17:00', 'Sáb. - Dom. das 12:00 - 17:00'],
    pagamentos:['Mastercard', 'Visa']
  },
  {
    email: 'clinica3',
    senha: 'senha3',
    clinicaId: 3,
    nome:'string3',
    crmv:'string3',
    pontuacao:2,
    endereco:'string3',
    sobre:'string3',
    servicos:'string3',
    horarios: ['Seg. - Sex. das 8:00 - 17:00', 'Sáb. - Dom. das 12:00 - 17:00'],
    pagamentos:['Mastercard', 'Visa']
  },
  {
    email: 'clinica4',
    senha: 'senha4',
    clinicaId: 4,
    nome:'string4',
    crmv:'string4',
    pontuacao:3,
    endereco:'string4',
    sobre:'string4',
    servicos:'string4',
    horarios: ['Seg. - Sex. das 8:00 - 17:00', 'Sáb. - Dom. das 12:00 - 17:00'],
    pagamentos:['Mastercard', 'Visa']
  },
  {
    email: 'clinica5',
    senha: 'senha5',
    clinicaId: 5,
    nome:'string5',
    crmv:'string5',
    pontuacao:4,
    endereco:'string5',
    sobre:'string5',
    servicos:'string5',
    horarios: ['Seg. - Sex. das 8:00 - 17:00', 'Sáb. - Dom. das 12:00 - 17:00'],
    pagamentos:['Mastercard', 'Visa']
  }
]

// TODO: Implementar tabela de mock das consultas

// Variável para simular o auto-incrementador de um banco de dados
let maxUsuarioId: number = 5;
let maxPetId: number = 5;
let maxClinicaId: number = 5;

// --- ENDPOINTS REFERENTES A USUARIO/LOGIN ----
//
// LOGIN
// GET - http://localhost:3000/login
export const login = async (req: Request<{}, {}, ILogin>, res: Response) => {
  try{
    let usuario: IUsuario | undefined = listaDeUsuarios.find(u => u.email === req.body.email && u.senha === req.body.senha)
    let clinica: IClinica | undefined = listaDeClinicas.find(c => c.email === req.body.email && c.senha === req.body.senha)

    if(usuario){
      res.status(200).send(usuario)
    }
    else if(clinica){
      res.status(200).send(clinica)
    }
    else{
      res.status(404).send("email ou senha incorretos")
    }
  }
  catch (error){
    res.status(404).send(error.message)
  }
};

// GET - http://localhost:3000/usuario
export const buscarUsuarios = async (req: Request, res: Response) => {
  res.status(200).send(listaDeUsuarios);
};

// POST - http://localhost:3000/usuario
export const criarUsuario = async (req: Request<{}, {}, IUsuario>, res: Response) => {
  try {
    let requestBody: IUsuario | undefined = await usuarioBody.validate(req.body);

    if (validarEmail(requestBody.usuarioId, requestBody.email)) {
      maxUsuarioId += 1;

      requestBody.usuarioId = maxUsuarioId;

      listaDeUsuarios.push(requestBody);

      return res.status(201).send(requestBody);
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

// PUT - http://localhost:3000/usuario
export const atualizarUsuario = async (req: Request<{}, {}, IUsuario>, res: Response) => {
  try {
    let requestBody: IUsuario | undefined = await usuarioBody.validate(req.body);
    let usuario: IUsuario | undefined = listaDeUsuarios.find(u => u.usuarioId === requestBody.usuarioId)

    if (usuario && validarEmail(requestBody.usuarioId, requestBody.email)) {
      // Removendo antigo registro
      listaDeUsuarios = listaDeUsuarios.filter(u => u.usuarioId !== requestBody.usuarioId);
      listaDeUsuarios.push(requestBody);

      return res.status(200).send(requestBody);
    }

    return res.status(404).send("Inconsistencia nos dados, tente novamente");
  } catch (error) {
    const yupError = error as yup.ValidationError;

    return res.json({
      errors: yupError.message,
    });
  }
};

// DELETE - http://localhost:3000/usuario/usuarioId
export const deletarUsuario = async (req: Request, res: Response) => {
  try {
    const usuarioId: number = parseInt(req.params.usuarioId);
    const usuario: IUsuario | undefined = listaDeUsuarios.find(u => u.usuarioId === usuarioId);

    if (usuario) {
      listaDeUsuarios = listaDeUsuarios.filter(u => u.usuarioId !== usuario.usuarioId);
      listaDePets = listaDePets.filter(p => p.idUsuario !== usuarioId);

      return res.status(204).send("Deletado com sucesso");
    }

    return res.status(404).send("usuário inexistente, tente novamente");
  } catch (error) {
    return res.status(400).send(error);
  }
};

// --- ENDPOINTS REFERENTES A PET ----
//
// GET - http://localhost:3000/pet
export const buscarPets = async (req: Request, res: Response) => {
  res.status(200).send(listaDePets);
};

// POST - http://localhost:3000/pet
export const criarPet = async (req: Request<{}, {}, IPet>, res: Response) => {
  try {
    let requestBody: IPet | undefined = await petBody.validate(req.body);

    if (petValido(requestBody.idUsuario, requestBody.nome)) {
      maxPetId += 1;

      requestBody.petId = maxPetId;

      listaDePets.push(requestBody);

      return res.status(201).send(requestBody);
    }

    return res.status(409).json({
      errors: "pet já cadastrado, tente novamente",
    });
  } catch (error) {
    const yupError = error as yup.ValidationError;

    return res.json({
      errors: yupError.message,
    });
  }
};

// PUT - http://localhost:3000/pet
export const atualizarPet = async (req: Request<{}, {}, IPet>, res: Response) => {
  try {
    let requestBody: IPet | undefined = await petBody.validate(req.body);
    let pet: IPet | undefined = listaDePets.find(p => p.petId === requestBody.petId)

    if (pet && petValidoParaAtualizar(requestBody.idUsuario, requestBody.petId, requestBody.nome)) {
      // Removendo antigo registro
      listaDePets = listaDePets.filter(p => p.petId !== pet.petId);
      listaDePets.push(requestBody);

      return res.status(200).send(requestBody);
    }

    return res.status(404).send("Inconsistencia nos dados, tente novamente");
  } catch (error) {
    const yupError = error as yup.ValidationError;

    return res.json({
      errors: yupError.message,
    });
  }
};

// DELETE - http://localhost:3000/pet/petId
export const deletarPet = async (req: Request, res: Response) => {
  try {
    const petId: number = parseInt(req.params.petId);
    const pet: IPet | undefined = listaDePets.find(p => p.petId === petId);

    if (pet) {
      listaDePets = listaDePets.filter(p => p.petId !== petId);

      return res.status(204).send("Deletado com sucesso");
    }

    return res.status(404).send("pet inexistente, tente novamente");
  } catch (error) {
    return res.status(400).send(error);
  }
};

// --- ENDPOINTS REFERENTES A PET DE RUA----
//
// GET - http://localhost:3000/petRua
export const buscarPetsRua = async(req: Request, res: Response) => {
  res.status(200).send(listDePetsDeRua);
}

//POST - http://localhost:3000/petRua
export const criarPetRua = async(req: Request<{}, {}, IPetRua>, res: Response) => {
  try{
    const requestBody: IPetRua | undefined = await petRuaBody.validate(req.body);

    listDePetsDeRua.push(requestBody);

    return res.status(201).send(requestBody);
  }
  catch(error){
    const yupError = error as yup.ValidationError;

    return res.json({
      errors: yupError.message,
    });
  }
}

// --- ENDPOINTS REFERENTES A CLINICA----
//
// GET - http://localhost:3000/clinica
export const buscarClinicas = async(req: Request, res: Response) => {
  return res.status(200).send(listaDeClinicas);
}

// POST - http://localhost:3000/clinica
export const criarClinica = async(req: Request<{}, {}, IClinica>, res: Response) => {
  try{
    const requestBody: IClinica | undefined = await clinicaBody.validate(req.body);

    if(validarEmail(requestBody.clinicaId, requestBody.email)){
      maxClinicaId += 1;

      requestBody.clinicaId = maxClinicaId;

      listaDeClinicas.push(requestBody);

      return res.status(201).send(requestBody);
    }

    return res.status(409).json({
      errors: "email já cadastrado, tente novamente",
    });
  }
  catch(error){
    const yupError = error as yup.ValidationError;

    return res.json({
      errors: yupError.message,
    });
  }
}

export const atualizarClinica = async (req: Request<{}, {}, IClinica>, res: Response) => {
  try{
    const requestBody: IClinica | undefined = await clinicaBody.validate(req.body);

    if(requestBody && validarEmail(requestBody.clinicaId, requestBody.email)){
      listaDeClinicas = listaDeClinicas.filter(c => c.clinicaId !== requestBody.clinicaId);
      listaDeClinicas.push(requestBody);

      return res.status(200).send(requestBody);
    }

    return res.status(404).send("Inconsistencia nos dados, tente novamente");
  }
  catch(error){
    const yupError = error as yup.ValidationError;

    return res.json({
      errors: yupError.message,
    });
  }
}

export const deletarClinica = async (req: Request, res: Response) => {
  try {
    const clinicaId: number = parseInt(req.params.clinicaId);
    const clinica: IClinica | undefined = listaDeClinicas.find(c => c.clinicaId === clinicaId);

    if (clinica) {
      listaDeClinicas = listaDeClinicas.filter(c => c.clinicaId !== clinicaId);

      return res.status(204).send("Deletado com sucesso");
    }

    return res.status(404).send("clinica inexistente, tente novamente");
  } catch (error) {
    return res.status(400).send(error);
  }
};

// TODO: Implementar metodos da consulta