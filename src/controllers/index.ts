import { Request, Response } from "express";
import * as yup from "yup";
import { clinicaBody, clinicaValido } from "../business/clinica/clinica";
import { consultaBody, consultaValida } from "../business/consulta/consulta";
import { petBody, petValido, petValidoParaAtualizar, switchPorte } from "../business/pet/pet";
import { petRuaBody, switchPorteRua} from "../business/petRua/petRua";
import { usuarioBody } from "../business/usuario/usuario";
import { validarEmail } from "../business/validarEmail";
import IClinica from "../models/clinica/clinica";
import IConsulta from "../models/consulta/consulta";
import ILogin from "../models/login/login";
import IPet from "../models/pet/pet";
import IPetRua from "../models/petRua/petRua";
import IUsuario from "../models/usuario/usuario";

// --- Devido a falta de uma base de dados, foi utilizado uma lista de mock como solução técnica ---
// --- dbo.T_Usuario ---
export let listaDeUsuarios: IUsuario[] = [
  {
    email: 'luiz.hkl@gmail.com',
    senha: '2509ui87',
    usuarioId: 1,
    nome:'Luiz Hélio Kleed',
    endereco:'R. Jardins da Amazônia'
  },
  {
    email: 'fernanda33@homail.com',
    senha: 'f3rn4nda6780',
    usuarioId: 2,
    nome:'Fernanda Lima de Souza',
    endereco:'R. Ibirapuera'
  },
  {
    email: 'caio0998@yahoo.com.br',
    senha: '0956iu97ty',
    usuarioId: 3,
    nome:'Caio da Silva Souza ',
    endereco:'R. Felipe Simas'
  },
  {
    email: 'helio123@outlook.com',
    senha: 'euamomeupet09864',
    usuarioId: 4,
    nome:'Hélio Inácio Costa',
    endereco:'R. Ponta da Praia'
  },
  {
    email: 'gabriel432@gmail.com',
    senha: 'pq234fgs5657',
    usuarioId: 5,
    nome:'Gabriel Maia Ferreira',
    endereco:'R. Ana Costa'
  }
];

// --- dbo.T_Pet ---
export let listaDePets: IPet[] = [
  {
    petId:1,
    idUsuario: 1,
    nome:'Apolo',
    raca:'Border Collie',
    idade:1,
    porte:2,
    alergias:'Lactose',
    doencas:'Cinomose'
  },
  {
    petId:2,
    idUsuario: 2,
    nome:'Minnie',
    raca:'Chihuahua',
    idade:2,
    porte:0,
    alergias:'Corantes superficiais',
    doencas:'Não tem'
  },
  {
    petId:3,
    idUsuario: 3,
    nome:'Mel',
    raca:'Buldogue ingês',
    idade:3,
    porte:2,
    alergias: 'Não tem',
    doencas: 'Papiloma'
  },
  {
    petId:4,
    idUsuario: 4,
    nome:'Tony',
    raca:'Dálmata',
    idade:4,
    porte:1,
    alergias: 'Picada de insetos',
    doencas: 'Otite'
  },
  {
    petId:5,
    idUsuario: 5,
    nome:'Bob',
    raca:'Golden Retriever',
    idade:5,
    porte:2,
    alergias: 'Não tem',
    doencas: 'Não tem'
  }
];

// --- dbo.T_PetRua ---
export let listaDePetsDeRua: IPetRua[] = [
  {
    petRuaId: 1,
    nome:'Poppy',
    localEncontrado: 'R. Jardins da Amazônia',
    ferido:1,
    desnutrido:0,
    agressivo:0,
    porte:1,
  },
  {
    petRuaId: 2,
    nome:'Luna',
    localEncontrado: 'Av. Santo Antônio',
    ferido:2,
    desnutrido:2,
    agressivo:3,
    porte:2,
  },
  {
    petRuaId: 3,
    nome:'Chico',
    localEncontrado: 'R. Mar Casado',
    ferido:3,
    desnutrido:3,
    agressivo:1,
    porte:0,
  },
  {
    petRuaId: 4,
    nome:'Amendoim',
    localEncontrado: 'R. Fernando de Moraes',
    ferido:0,
    desnutrido:1,
    agressivo:1,
    porte:2,
  },
  {
    petRuaId: 5,
    nome:'Lua',
    localEncontrado: 'Av. Farias Maia',
    ferido:1,
    desnutrido:2,
    agressivo:3,
    porte:2,
  },
];

// --- dbo.T_Clinica ---
export let listaDeClinicas: IClinica[] = [
  {
    email: 'clinicavidaanimal@hotmail.com',
    senha: '1456879756765',
    clinicaId: 1,
    nome:'Clínica Vida Animal',
    crmv:'MG Nº 11586',
    pontuacao:4,
    endereco:'R. Jardins da Amazônia',
    sobre:'Clinica especializada em reabilitação',
    servicos:'Consultas Básicas e Tratamento de lesões',
    horarios: ['Seg. - Sex. das 8:00 - 17:00', 'Sáb. - Dom. das 12:00 - 17:00'],
    pagamentos:['Mastercard', 'Visa']
  },
  {
    email: 'clinicadermapets@yahoo.com.br',
    senha: '3845i430945843',
    clinicaId: 2,
    nome:'Clínica DermaPets',
    crmv:'SP Nº 10486',
    pontuacao:3,
    endereco:'R. Felipe Simas',
    sobre:'Clinica especializada em tratamento de alergias',
    servicos:'Consultas Básicas e Tratamento de alergia',
    horarios: ['Seg. - Sex. das 8:00 - 17:00', 'Sáb. - Dom. das 12:00 - 17:00'],
    pagamentos:['Mastercard', 'Visa']
  },
  {
    email: 'clinicacaosantista@outlook.com',
    senha: '2546fgfhgfhj54',
    clinicaId: 3,
    nome:'Clínica Cão Santista',
    crmv:'SP Nº 15566 > 5',
    pontuacao:5,
    endereco:'R. Ponta da Praia',
    sobre:'Clinica especializada em tratamento de doênças',
    servicos:'Consultas Básicas, Acompanhamento Veterinário e Tratamento de doênças',
    horarios: ['Seg. - Sex. das 8:00 - 17:00', 'Sáb. - Dom. das 12:00 - 17:00'],
    pagamentos:['Mastercard', 'Visa']
  },
  {
    email: 'clinicaveterinariochico@hotmail.com',
    senha: 'chndfkgml567575',
    clinicaId: 4,
    nome:'Clínica Veterinária Dr. Chico',
    crmv:'BH Nº 13386',
    pontuacao:2,
    endereco:'R. Mar Casado',
    sobre:'Clinica especializada em tratamento de câncer',
    servicos:'Consultas Básicas, Acompanhamento Veterinário e Tratamento de câncer',
    horarios: ['Seg. - Sex. das 8:00 - 17:00', 'Sáb. - Dom. das 12:00 - 17:00'],
    pagamentos:['Mastercard', 'Visa']
  },
  {
    email: 'clinicaciaanimal@gmail.com',
    senha: '546yurty87d4565',
    clinicaId: 5,
    nome:'Clinica Cia Animal',
    crmv:'AM Nº 17789',
    pontuacao:4,
    endereco:'R. Fernando de Moraes',
    sobre:'Clinica especializada em reabilitação',
    servicos:'Consultas Básicas e Tratamento de lesões',
    horarios: ['Seg. - Sex. das 8:00 - 17:00', 'Sáb. - Dom. das 12:00 - 17:00'],
    pagamentos:['Mastercard', 'Visa']
  }
]

export let listaDeConsultas: IConsulta[] = [
  {
    consultaId: 1,
    idPet: 1,
    idClinica: 1,
    data: new Date(2022, 1, 1, 12, 0),
    ativo: true
  },
  {
    consultaId: 2,
    idPet: 2,
    idClinica: 2,
    data: new Date(2022, 1, 2, 13, 0),
    ativo: true
  },
  {
    consultaId: 3,
    idPet: 3,
    idClinica: 3,
    data: new Date(2022, 1, 3, 14, 0),
    ativo: true
  },
  {
    consultaId: 4,
    idPet: 4,
    idClinica: 4,
    data: new Date(2022, 1, 4, 15, 0),
    ativo: true
  },
  {
    consultaId: 5,
    idPet: 5,
    idClinica: 5,
    data: new Date(2022, 1, 4, 16, 0),
    ativo: true
  }
] 

// Variável para simular o auto-incrementador de um banco de dados
let maxUsuarioId: number = 5;
let maxPetId: number = 5;
let maxClinicaId: number = 5;
let maxConsultaId: number = 5;

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

    return res.status(409).send("Email já cadastrado, tente novamente");
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

    return res.status(404).send("Inconsistência nos dados, tente novamente");
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

    return res.status(404).send("Usuário inexistente, tente novamente");
  } catch (error) {
    return res.status(400).send(error);
  }
};

// --- ENDPOINTS REFERENTES A PET ----
//
// GET - http://localhost:3000/pet
export const buscarPets = async (req: Request, res: Response) => {
  res.status(200).send(listaDePets.map(p => switchPorte(p)));
};

// GET - http://localhost:3000/pet/:petId
export const buscarPetsById = async (req: Request, res: Response) => {
  try{
    const petId: number | undefined = parseInt(req.params.petId);

    if(petId !== undefined && petId > 0){
      const petInfo: IPet | undefined = listaDePets.find(p => p.petId === petId);
      
      return petInfo ? 
        res.status(200).send(switchPorte(petInfo)) :
        res.status(404).send("Pet inexistente, tente novamente")
    }

    return res.status(404).send("Por favor inserir petId valido")
  }
  catch(error){
    res.status(404).send(error);
  }
}

// GET - http://localhost:3000/petsByUserId/:userId
export const buscarPetsByUserId = async (req: Request, res: Response) => {
  try{
    const userId: number | undefined = parseInt(req.params.userId);

    if(userId !== undefined && userId > 0){
      const userInfo: IUsuario | undefined = listaDeUsuarios.find(u => u.usuarioId === userId)

      return userInfo ? 
        res.status(200).send(listaDePets.filter(p => p.idUsuario === userId).map(p => switchPorte(p))) : 
        res.status(404).send("Usuario inexistente, tente novamente")
    }

    return res.status(404).send("Por favor inserir userId valido")
  }
  catch(error){
    return res.status(404).send(error)
  }
}

// GET - http://localhost:3000/petsByClinicaId/:clinicaId
export const buscarPetsByClinicaId = async (req: Request, res: Response) => {
  try{
    const clinicaId: number | undefined = parseInt(req.params.clinicaId);

    if(clinicaId !== undefined && clinicaId > 0){
      const petsList: IPet[] = [];

      listaDeConsultas
        .filter(c => c.idClinica === clinicaId)
        .forEach(c => petsList.push(listaDePets.find(p => p.petId === c.idPet)))

      return res.status(200).send(petsList.map(p => switchPorte(p)));
    }
  }
  catch(error){
    return res.status(404).send(error)
  }
}


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
      errors: "Pet já cadastrado, tente novamente",
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

    return res.status(404).send("Inconsistência nos dados, tente novamente");
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

    return res.status(404).send("Pet inexistente, tente novamente");
  } catch (error) {
    return res.status(400).send(error);
  }
};


// --- ENDPOINTS REFERENTES A PET DE RUA----
//
// GET - http://localhost:3000/petRua
export const buscarPetsRua = async(req: Request, res: Response) => {
  res.status(200).send(listaDePetsDeRua.map(p => switchPorteRua(p)));
}

// GET - http://localhost:3000/petRua/:petRuaId
export const buscarPetsRuaById = async (req: Request, res: Response) => {
  try{
    const petRuaId: number | undefined = parseInt(req.params.petRuaId);

    if(petRuaId !== undefined && petRuaId > 0){
      const petRuaInfo: IPetRua | undefined = listaDePetsDeRua.find(p => p.petRuaId === petRuaId)

      return petRuaInfo ? 
        res.status(200).send(switchPorteRua(petRuaInfo)) :
        res.status(404).send("petRua inexistente, tente novamente")
    }

    return res.status(404).send("Por favor inserir petRuaId valido")
  }
  catch(error){
    res.status(404).send(error)
  }
}

//POST - http://localhost:3000/petRua
export const criarPetRua = async(req: Request<{}, {}, IPetRua>, res: Response) => {
  try{
    const requestBody: IPetRua | undefined = await petRuaBody.validate(req.body);

    listaDePetsDeRua.push(requestBody);

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
  listaDeClinicas.forEach(c => c.horarios ?? 'Não tem horários disponíveis');

  return res.status(200).send(listaDeClinicas);
}

// GET - http://localhost:3000/clinica/:clinicaId
export const buscarClinicasById = async (req: Request, res: Response) => {
  try{
    const clinicaId: number | undefined = parseInt(req.params.clinicaId);

    if(clinicaId !== undefined && clinicaId > 0){
      const clinicaInfo: IClinica | undefined = listaDeClinicas.find(c => c.clinicaId === clinicaId);

      clinicaInfo.horarios ?? 'Não tem horários disponíveis';

      return clinicaInfo ?
        res.status(200).send(clinicaInfo) :
        res.status(404).send("Clinica inexistente, tente novamente")
    }

    return res.status(404).send("Por favor inserir clinicaId valido")
  }
  catch(error){
    res.status(404).send(error)
  }
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

    return res.status(409).send("Email já cadastrado, tente novamente");
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

    return res.status(404).send("Inconsistência nos dados, tente novamente");
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

    return res.status(404).send("Clínica inexistente, tente novamente");
  } catch (error) {
    return res.status(400).send(error);
  }
};

// --- ENDPOINTS REFERENTES A CONSULTA----
//
// GET - http://localhost:3000/consulta
export const buscarConsultas = async (req: Request, res: Response) => {
  return res.status(200).send(listaDeConsultas);
}

// GET - http://localhost:3000/consulta/:consultaId
export const buscarConsultasById = async (req: Request, res: Response) => {
  try{
    const consultaId: number | undefined = parseInt(req.params.consultaId);

    if(consultaId !== undefined && consultaId > 0){
      const consultaInfo: IConsulta | undefined = listaDeConsultas.find(c => c.consultaId === consultaId);

      return consultaInfo ?
        res.status(200).send(consultaInfo) :
        res.status(404).send("Consulta inexistente, tente novamente")
    }

    return res.status(404).send("Por favor inserir consultaId valido")
  }
  catch(error){
    return res.status(404).send(error)
  }
}

// GET - http://localhost:3000/consultasByPetId/:petId
export const buscarConsultasByPetId = async (req: Request, res: Response) => {
  try{
    const petId: number | undefined = parseInt(req.params.petId);

    if(petId !== undefined && petId > 0){
      const petInfo: IPet | undefined = listaDePets.find(p => p.petId === petId);

      return petInfo ?
        res.status(200).send(listaDeConsultas.filter(c => c.idPet === petId)) :
        res.status(404).send("Pet inexistente, tente novamnete")
    }

    return res.status(404).send("Por favor inserir petId valido")
  }
  catch(error){
    return res.status(404).send(error);
  }
}

// GET - http://locahost:3000/consultasByUserId/:userId
export const buscarConsultasByUserId = async (req: Request, res: Response) => {
    try{
      const userId: number | undefined = parseInt(req.params.userId);

      if(userId !== undefined && userId > 0){
        let consultasList: IConsulta[] | undefined = []
        
        listaDePets
        .filter(p => p.idUsuario === userId)
        .forEach(p => listaDeConsultas
          .filter(c => c.idPet === p.petId)
          .forEach(c => consultasList.push(c)))
      
        return consultasList ?
          res.status(200).send(consultasList) :
          res.status(404).send("Dados invalidos, tente novamente")
      }

      return res.status(404).send("Por favor inserir userId valido")
    }
    catch(error){
      return res.status(404).send(error)
    }
 }

// GET - http://localhost:3000/consultasByClinicaId/:clinicaId
export const buscarConsultasByClinicaId = async (req: Request, res: Response) => {
  try {
    const clinicaId: number | undefined = parseInt(req.params.clinicaId);

    if(clinicaId !== undefined && clinicaId > 0){
      return res.status(200).send(listaDeConsultas.filter(c => c.idClinica === clinicaId))
    }

    return res.status(404).send("Dados invalidos, tente novamente")
  }
  catch(error){
    return res.status(404).send(error)
  }
}

// POST - http://localhost:3000/consulta
export const criarConsulta = async (req: Request<{}, {}, IConsulta>, res: Response) => {
  try{
    const requestBody: IConsulta | undefined = await consultaBody.validate(req.body);

    const pet = listaDePets.find(p => p.petId === requestBody.idPet)
    const clinica = listaDeClinicas.find(c => c.clinicaId === requestBody.idClinica)

    if(pet && clinica && consultaValida(requestBody.idClinica, requestBody.data)){
      maxConsultaId += 1;

      requestBody.consultaId = maxConsultaId;

      listaDeConsultas.push(requestBody);

      return res.status(201).send(requestBody)
    }

    return res.status(404).send("Inconsistência inexistente, tente novamente")
  }
  catch(error){
    const yupError = error as yup.ValidationError;

    return res.json({
      errors: yupError.message,
    });
  }
}

// PUT - http://localhost:3000/consulta
export const atualizarConsulta = async (req: Request<{}, {}, IConsulta>, res: Response) => {
  try{
    const requestBody: IConsulta | undefined = await consultaBody.validate(req.body);

    const consulta = listaDeConsultas.find(c => c.consultaId === requestBody.consultaId)
    const pet = listaDePets.find(p => p.petId === requestBody.idPet)
    const clinica = listaDeClinicas.find(c => c.clinicaId === requestBody.idClinica)

    if(consulta && pet && clinica && consultaValida(requestBody.idClinica, requestBody.data)){
      listaDeConsultas = listaDeConsultas.filter(c => c.consultaId !== consulta.consultaId)
      listaDeConsultas.push(requestBody);

      return res.status(200).send(requestBody)
    }

    return res.status(404).send("Inconsistência inexistente, tente novamente")
  }
  catch(error){
    const yupError = error as yup.ValidationError;

    return res.json({
      errors: yupError.message,
    });
  }
}

// DELETE - http://localhost:3000/consulta
export const deletarConsulta = async (req: Request, res: Response) => {
  try{
    const consultaId: number | undefined = parseInt(req.params.consultaId);
    const consulta: IConsulta | undefined = listaDeConsultas.find(c => c.consultaId === consultaId);

    if(consulta){
      listaDeConsultas = listaDeConsultas.filter(c => c.consultaId !== consultaId)

      return res.status(200).send("Deletado com sucesso")
    }

    return res.status(404).send("Clínica inexistente, tente novamente");
  }
  catch(error){
    return res.status(400).send(error);
  }
}