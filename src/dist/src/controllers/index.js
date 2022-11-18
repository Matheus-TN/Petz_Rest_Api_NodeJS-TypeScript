"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletarConsulta = exports.atualizarConsulta = exports.criarConsulta = exports.buscarConsultasByUserId = exports.buscarConsultasByPetId = exports.buscarConsultasById = exports.buscarConsultas = exports.deletarClinica = exports.atualizarClinica = exports.criarClinica = exports.buscarClinicasById = exports.buscarClinicas = exports.criarPetRua = exports.buscarPetsRuaById = exports.buscarPetsRua = exports.deletarPet = exports.atualizarPet = exports.criarPet = exports.buscarPetsByUserId = exports.buscarPetsById = exports.buscarPets = exports.deletarUsuario = exports.atualizarUsuario = exports.criarUsuario = exports.buscarUsuarios = exports.login = exports.listaDeConsultas = exports.listaDeClinicas = exports.listaDePetsDeRua = exports.listaDePets = exports.listaDeUsuarios = void 0;
var clinica_1 = require("../business/clinica/clinica");
var consulta_1 = require("../business/consulta/consulta");
var pet_1 = require("../business/pet/pet");
var petRua_1 = require("../business/petRua/petRua");
var usuario_1 = require("../business/usuario/usuario");
var validarEmail_1 = require("../business/validarEmail");
// --- Devido a falta de uma base de dados, foi utilizado uma lista de mock como solução técnica ---
// --- dbo.T_Usuario ---
exports.listaDeUsuarios = [
    {
        email: 'usuario1',
        senha: 'senha1',
        usuarioId: 1,
        nome: 'nome1',
        endereco: 'endereco1'
    },
    {
        email: 'usuario2',
        senha: 'senha2',
        usuarioId: 2,
        nome: 'nome2',
        endereco: 'endereco2'
    },
    {
        email: 'usuario3',
        senha: 'senha3',
        usuarioId: 3,
        nome: 'nome3',
        endereco: 'endereco3'
    },
    {
        email: 'usuario4',
        senha: 'senha4',
        usuarioId: 4,
        nome: 'nome4',
        endereco: 'endereco4'
    },
    {
        email: 'usuario5',
        senha: 'senha5',
        usuarioId: 5,
        nome: 'nome5',
        endereco: 'endereco5'
    }
];
// --- dbo.T_Pet ---
exports.listaDePets = [
    {
        petId: 1,
        idUsuario: 1,
        nome: 'nomePet1',
        raca: 'raca1',
        idade: 1,
        porte: 0,
        alergias: 'alergia1',
        doencas: 'doenca1'
    },
    {
        petId: 2,
        idUsuario: 2,
        nome: 'nomePet2',
        raca: 'raca2',
        idade: 2,
        porte: 1,
        alergias: 'alergia2',
        doencas: 'doenca2'
    },
    {
        petId: 3,
        idUsuario: 3,
        nome: 'nomePet3',
        raca: 'raca3',
        idade: 3,
        porte: 2
    },
    {
        petId: 4,
        idUsuario: 4,
        nome: 'nomePet4',
        raca: 'raca4',
        idade: 4,
        porte: 0
    },
    {
        petId: 5,
        idUsuario: 5,
        nome: 'nomePet5',
        raca: 'raca5',
        idade: 5,
        porte: 1
    }
];
// --- dbo.T_PetRua ---
exports.listaDePetsDeRua = [
    {
        petRuaId: 1,
        nome: 'nomePetRua1',
        localEncontrado: 'localEncontrado1',
        ferido: 0,
        desnutrido: 0,
        agressivo: 0,
        porte: 0,
    },
    {
        petRuaId: 2,
        nome: 'nomePetRua2',
        localEncontrado: 'localEncontrado2',
        ferido: 1,
        desnutrido: 1,
        agressivo: 1,
        porte: 1,
    },
    {
        petRuaId: 3,
        nome: 'nomePetRua3',
        localEncontrado: 'localEncontrado3',
        ferido: 2,
        desnutrido: 2,
        agressivo: 2,
        porte: 2,
    },
    {
        petRuaId: 4,
        nome: 'nomePetRua4',
        localEncontrado: 'localEncontrado4',
        ferido: 3,
        desnutrido: 3,
        agressivo: 3,
        porte: 0,
    },
    {
        petRuaId: 5,
        nome: 'nomePetRua5',
        localEncontrado: 'localEncontrado5',
        ferido: 0,
        desnutrido: 0,
        agressivo: 0,
        porte: 1,
    },
];
// --- dbo.T_Clinica ---
exports.listaDeClinicas = [
    {
        email: 'clinica1',
        senha: 'senha1',
        clinicaId: 1,
        nome: 'nomeClinica1',
        crmv: 'crmv1',
        pontuacao: 0,
        endereco: 'endereco1',
        sobre: 'sobre1',
        servicos: 'servicos1',
        horarios: ['Seg. - Sex. das 8:00 - 17:00', 'Sáb. - Dom. das 12:00 - 17:00'],
        pagamentos: ['Mastercard', 'Visa']
    },
    {
        email: 'clinica2',
        senha: 'senha2',
        clinicaId: 2,
        nome: 'nomeClinica2',
        crmv: 'crmv2',
        pontuacao: 1,
        endereco: 'endereco2',
        sobre: 'sobre2',
        servicos: 'servicos2',
        horarios: ['Seg. - Sex. das 8:00 - 17:00', 'Sáb. - Dom. das 12:00 - 17:00'],
        pagamentos: ['Mastercard', 'Visa']
    },
    {
        email: 'clinica3',
        senha: 'senha3',
        clinicaId: 3,
        nome: 'nomeClinica3',
        crmv: 'crmv3',
        pontuacao: 2,
        endereco: 'endereco3',
        sobre: 'sobre3',
        servicos: 'servicos3',
        horarios: ['Seg. - Sex. das 8:00 - 17:00', 'Sáb. - Dom. das 12:00 - 17:00'],
        pagamentos: ['Mastercard', 'Visa']
    },
    {
        email: 'clinica4',
        senha: 'senha4',
        clinicaId: 4,
        nome: 'nomeClinica4',
        crmv: 'crmv4',
        pontuacao: 3,
        endereco: 'endereco4',
        sobre: 'sobre4',
        servicos: 'servicos4',
        horarios: ['Seg. - Sex. das 8:00 - 17:00', 'Sáb. - Dom. das 12:00 - 17:00'],
        pagamentos: ['Mastercard', 'Visa']
    },
    {
        email: 'clinica5',
        senha: 'senha5',
        clinicaId: 5,
        nome: 'nomeClinica5',
        crmv: 'crmv5',
        pontuacao: 4,
        endereco: 'endereco5',
        sobre: 'sobre5',
        servicos: 'servicos5',
        horarios: ['Seg. - Sex. das 8:00 - 17:00', 'Sáb. - Dom. das 12:00 - 17:00'],
        pagamentos: ['Mastercard', 'Visa']
    }
];
exports.listaDeConsultas = [
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
];
// Variável para simular o auto-incrementador de um banco de dados
var maxUsuarioId = 5;
var maxPetId = 5;
var maxClinicaId = 5;
var maxConsultaId = 5;
// --- ENDPOINTS REFERENTES A USUARIO/LOGIN ----
//
// LOGIN
// GET - http://localhost:3000/login
var login = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var usuario, clinica;
    return __generator(this, function (_a) {
        try {
            usuario = exports.listaDeUsuarios.find(function (u) { return u.email === req.body.email && u.senha === req.body.senha; });
            clinica = exports.listaDeClinicas.find(function (c) { return c.email === req.body.email && c.senha === req.body.senha; });
            if (usuario) {
                res.status(200).send(usuario);
            }
            else if (clinica) {
                res.status(200).send(clinica);
            }
            else {
                res.status(404).send("email ou senha incorretos");
            }
        }
        catch (error) {
            res.status(404).send(error.message);
        }
        return [2 /*return*/];
    });
}); };
exports.login = login;
// GET - http://localhost:3000/usuario
var buscarUsuarios = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        res.status(200).send(exports.listaDeUsuarios);
        return [2 /*return*/];
    });
}); };
exports.buscarUsuarios = buscarUsuarios;
// POST - http://localhost:3000/usuario
var criarUsuario = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var requestBody, error_1, yupError;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, usuario_1.usuarioBody.validate(req.body)];
            case 1:
                requestBody = _a.sent();
                if ((0, validarEmail_1.validarEmail)(requestBody.usuarioId, requestBody.email)) {
                    maxUsuarioId += 1;
                    requestBody.usuarioId = maxUsuarioId;
                    exports.listaDeUsuarios.push(requestBody);
                    return [2 /*return*/, res.status(201).send(requestBody)];
                }
                return [2 /*return*/, res.status(409).send("Email já cadastrado, tente novamente")];
            case 2:
                error_1 = _a.sent();
                yupError = error_1;
                return [2 /*return*/, res.json({
                        errors: yupError.message,
                    })];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.criarUsuario = criarUsuario;
// PUT - http://localhost:3000/usuario
var atualizarUsuario = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var requestBody_1, usuario, error_2, yupError;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, usuario_1.usuarioBody.validate(req.body)];
            case 1:
                requestBody_1 = _a.sent();
                usuario = exports.listaDeUsuarios.find(function (u) { return u.usuarioId === requestBody_1.usuarioId; });
                if (usuario && (0, validarEmail_1.validarEmail)(requestBody_1.usuarioId, requestBody_1.email)) {
                    // Removendo antigo registro
                    exports.listaDeUsuarios = exports.listaDeUsuarios.filter(function (u) { return u.usuarioId !== requestBody_1.usuarioId; });
                    exports.listaDeUsuarios.push(requestBody_1);
                    return [2 /*return*/, res.status(200).send(requestBody_1)];
                }
                return [2 /*return*/, res.status(404).send("Inconsistência nos dados, tente novamente")];
            case 2:
                error_2 = _a.sent();
                yupError = error_2;
                return [2 /*return*/, res.json({
                        errors: yupError.message,
                    })];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.atualizarUsuario = atualizarUsuario;
// DELETE - http://localhost:3000/usuario/usuarioId
var deletarUsuario = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var usuarioId_1, usuario_2;
    return __generator(this, function (_a) {
        try {
            usuarioId_1 = parseInt(req.params.usuarioId);
            usuario_2 = exports.listaDeUsuarios.find(function (u) { return u.usuarioId === usuarioId_1; });
            if (usuario_2) {
                exports.listaDeUsuarios = exports.listaDeUsuarios.filter(function (u) { return u.usuarioId !== usuario_2.usuarioId; });
                exports.listaDePets = exports.listaDePets.filter(function (p) { return p.idUsuario !== usuarioId_1; });
                return [2 /*return*/, res.status(204).send("Deletado com sucesso")];
            }
            return [2 /*return*/, res.status(404).send("Usuário inexistente, tente novamente")];
        }
        catch (error) {
            return [2 /*return*/, res.status(400).send(error)];
        }
        return [2 /*return*/];
    });
}); };
exports.deletarUsuario = deletarUsuario;
// --- ENDPOINTS REFERENTES A PET ----
//
// GET - http://localhost:3000/pet
var buscarPets = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        res.status(200).send(exports.listaDePets);
        return [2 /*return*/];
    });
}); };
exports.buscarPets = buscarPets;
// GET - http://localhost:3000/pet/:petId
var buscarPetsById = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var petId_1, petInfo;
    return __generator(this, function (_a) {
        try {
            petId_1 = parseInt(req.params.petId);
            if (petId_1 !== undefined && petId_1 > 0) {
                petInfo = exports.listaDePets.find(function (p) { return p.petId === petId_1; });
                return [2 /*return*/, petInfo ?
                        res.status(200).send(petInfo) :
                        res.status(404).send("Pet inexistente, tente novamente")];
            }
            return [2 /*return*/, res.status(404).send("Por favor inserir petId valido")];
        }
        catch (error) {
            res.status(404).send(error);
        }
        return [2 /*return*/];
    });
}); };
exports.buscarPetsById = buscarPetsById;
// GET - http://localhost:3000/petsByUserId/:userId
var buscarPetsByUserId = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var userId_1, userInfo;
    return __generator(this, function (_a) {
        try {
            userId_1 = parseInt(req.params.userId);
            if (userId_1 !== undefined && userId_1 > 0) {
                userInfo = exports.listaDeUsuarios.find(function (u) { return u.usuarioId === userId_1; });
                return [2 /*return*/, userInfo ?
                        res.status(200).send(exports.listaDePets.filter(function (p) { return p.idUsuario === userId_1; })) :
                        res.status(404).send("Usuario inexistente, tente novamente")];
            }
            return [2 /*return*/, res.status(404).send("Por favor inserir userId valido")];
        }
        catch (error) {
            return [2 /*return*/, res.status(404).send(error)];
        }
        return [2 /*return*/];
    });
}); };
exports.buscarPetsByUserId = buscarPetsByUserId;
// POST - http://localhost:3000/pet
var criarPet = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var requestBody, error_3, yupError;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, pet_1.petBody.validate(req.body)];
            case 1:
                requestBody = _a.sent();
                if ((0, pet_1.petValido)(requestBody.idUsuario, requestBody.nome)) {
                    maxPetId += 1;
                    requestBody.petId = maxPetId;
                    exports.listaDePets.push(requestBody);
                    return [2 /*return*/, res.status(201).send(requestBody)];
                }
                return [2 /*return*/, res.status(409).json({
                        errors: "Pet já cadastrado, tente novamente",
                    })];
            case 2:
                error_3 = _a.sent();
                yupError = error_3;
                return [2 /*return*/, res.json({
                        errors: yupError.message,
                    })];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.criarPet = criarPet;
// PUT - http://localhost:3000/pet
var atualizarPet = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var requestBody_2, pet_2, error_4, yupError;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, pet_1.petBody.validate(req.body)];
            case 1:
                requestBody_2 = _a.sent();
                pet_2 = exports.listaDePets.find(function (p) { return p.petId === requestBody_2.petId; });
                if (pet_2 && (0, pet_1.petValidoParaAtualizar)(requestBody_2.idUsuario, requestBody_2.petId, requestBody_2.nome)) {
                    // Removendo antigo registro
                    exports.listaDePets = exports.listaDePets.filter(function (p) { return p.petId !== pet_2.petId; });
                    exports.listaDePets.push(requestBody_2);
                    return [2 /*return*/, res.status(200).send(requestBody_2)];
                }
                return [2 /*return*/, res.status(404).send("Inconsistência nos dados, tente novamente")];
            case 2:
                error_4 = _a.sent();
                yupError = error_4;
                return [2 /*return*/, res.json({
                        errors: yupError.message,
                    })];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.atualizarPet = atualizarPet;
// DELETE - http://localhost:3000/pet/petId
var deletarPet = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var petId_2, pet;
    return __generator(this, function (_a) {
        try {
            petId_2 = parseInt(req.params.petId);
            pet = exports.listaDePets.find(function (p) { return p.petId === petId_2; });
            if (pet) {
                exports.listaDePets = exports.listaDePets.filter(function (p) { return p.petId !== petId_2; });
                return [2 /*return*/, res.status(204).send("Deletado com sucesso")];
            }
            return [2 /*return*/, res.status(404).send("Pet inexistente, tente novamente")];
        }
        catch (error) {
            return [2 /*return*/, res.status(400).send(error)];
        }
        return [2 /*return*/];
    });
}); };
exports.deletarPet = deletarPet;
// --- ENDPOINTS REFERENTES A PET DE RUA----
//
// GET - http://localhost:3000/petRua
var buscarPetsRua = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        res.status(200).send(exports.listaDePetsDeRua);
        return [2 /*return*/];
    });
}); };
exports.buscarPetsRua = buscarPetsRua;
// GET - http://localhost:3000/petRua/:petRuaId
var buscarPetsRuaById = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var petRuaId_1, petRuaInfo;
    return __generator(this, function (_a) {
        try {
            petRuaId_1 = parseInt(req.params.petRuaId);
            if (petRuaId_1 !== undefined && petRuaId_1 > 0) {
                petRuaInfo = exports.listaDePetsDeRua.find(function (p) { return p.petRuaId === petRuaId_1; });
                return [2 /*return*/, petRuaInfo ?
                        res.status(200).send(petRuaInfo) :
                        res.status(404).send("petRua inexistente, tente novamente")];
            }
            return [2 /*return*/, res.status(404).send("Por favor inserir petRuaId valido")];
        }
        catch (error) {
            res.status(404).send(error);
        }
        return [2 /*return*/];
    });
}); };
exports.buscarPetsRuaById = buscarPetsRuaById;
//POST - http://localhost:3000/petRua
var criarPetRua = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var requestBody, error_5, yupError;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, petRua_1.petRuaBody.validate(req.body)];
            case 1:
                requestBody = _a.sent();
                exports.listaDePetsDeRua.push(requestBody);
                return [2 /*return*/, res.status(201).send(requestBody)];
            case 2:
                error_5 = _a.sent();
                yupError = error_5;
                return [2 /*return*/, res.json({
                        errors: yupError.message,
                    })];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.criarPetRua = criarPetRua;
// --- ENDPOINTS REFERENTES A CLINICA----
//
// GET - http://localhost:3000/clinica
var buscarClinicas = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        return [2 /*return*/, res.status(200).send(exports.listaDeClinicas)];
    });
}); };
exports.buscarClinicas = buscarClinicas;
// GET - http://localhost:3000/clinica/:clinicaId
var buscarClinicasById = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var clinicaId_1, clinicaInfo;
    return __generator(this, function (_a) {
        try {
            clinicaId_1 = parseInt(req.params.clinicaId);
            if (clinicaId_1 !== undefined && clinicaId_1 > 0) {
                clinicaInfo = exports.listaDeClinicas.find(function (c) { return c.clinicaId === clinicaId_1; });
                return [2 /*return*/, clinicaInfo ?
                        res.status(200).send(clinicaInfo) :
                        res.status(404).send("Clinica inexistente, tente novamente")];
            }
            return [2 /*return*/, res.status(404).send("Por favor inserir clinicaId valido")];
        }
        catch (error) {
            res.status(404).send(error);
        }
        return [2 /*return*/];
    });
}); };
exports.buscarClinicasById = buscarClinicasById;
// POST - http://localhost:3000/clinica
var criarClinica = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var requestBody, error_6, yupError;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, clinica_1.clinicaBody.validate(req.body)];
            case 1:
                requestBody = _a.sent();
                if ((0, validarEmail_1.validarEmail)(requestBody.clinicaId, requestBody.email)) {
                    maxClinicaId += 1;
                    requestBody.clinicaId = maxClinicaId;
                    exports.listaDeClinicas.push(requestBody);
                    return [2 /*return*/, res.status(201).send(requestBody)];
                }
                return [2 /*return*/, res.status(409).send("Email já cadastrado, tente novamente")];
            case 2:
                error_6 = _a.sent();
                yupError = error_6;
                return [2 /*return*/, res.json({
                        errors: yupError.message,
                    })];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.criarClinica = criarClinica;
var atualizarClinica = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var requestBody_3, error_7, yupError;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, clinica_1.clinicaBody.validate(req.body)];
            case 1:
                requestBody_3 = _a.sent();
                if (requestBody_3 && (0, validarEmail_1.validarEmail)(requestBody_3.clinicaId, requestBody_3.email)) {
                    exports.listaDeClinicas = exports.listaDeClinicas.filter(function (c) { return c.clinicaId !== requestBody_3.clinicaId; });
                    exports.listaDeClinicas.push(requestBody_3);
                    return [2 /*return*/, res.status(200).send(requestBody_3)];
                }
                return [2 /*return*/, res.status(404).send("Inconsistência nos dados, tente novamente")];
            case 2:
                error_7 = _a.sent();
                yupError = error_7;
                return [2 /*return*/, res.json({
                        errors: yupError.message,
                    })];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.atualizarClinica = atualizarClinica;
var deletarClinica = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var clinicaId_2, clinica;
    return __generator(this, function (_a) {
        try {
            clinicaId_2 = parseInt(req.params.clinicaId);
            clinica = exports.listaDeClinicas.find(function (c) { return c.clinicaId === clinicaId_2; });
            if (clinica) {
                exports.listaDeClinicas = exports.listaDeClinicas.filter(function (c) { return c.clinicaId !== clinicaId_2; });
                return [2 /*return*/, res.status(204).send("Deletado com sucesso")];
            }
            return [2 /*return*/, res.status(404).send("Clínica inexistente, tente novamente")];
        }
        catch (error) {
            return [2 /*return*/, res.status(400).send(error)];
        }
        return [2 /*return*/];
    });
}); };
exports.deletarClinica = deletarClinica;
// --- ENDPOINTS REFERENTES A CONSULTA----
//
// GET - http://localhost:3000/consulta
var buscarConsultas = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        return [2 /*return*/, res.status(200).send(exports.listaDeConsultas)];
    });
}); };
exports.buscarConsultas = buscarConsultas;
// GET - http://localhost:3000/consulta/:consultaId
var buscarConsultasById = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var consultaId_1, consultaInfo;
    return __generator(this, function (_a) {
        try {
            consultaId_1 = parseInt(req.params.consultaId);
            if (consultaId_1 !== undefined && consultaId_1 > 0) {
                consultaInfo = exports.listaDeConsultas.find(function (c) { return c.consultaId === consultaId_1; });
                return [2 /*return*/, consultaInfo ?
                        res.status(200).send(consultaInfo) :
                        res.status(404).send("Consulta inexistente, tente novamente")];
            }
            return [2 /*return*/, res.status(404).send("Por favor inserir consultaId valido")];
        }
        catch (error) {
            return [2 /*return*/, res.status(404).send(error)];
        }
        return [2 /*return*/];
    });
}); };
exports.buscarConsultasById = buscarConsultasById;
// GET - http://localhost:3000/consultasByPetId/:petId
var buscarConsultasByPetId = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var petId_3, petInfo;
    return __generator(this, function (_a) {
        try {
            petId_3 = parseInt(req.params.petId);
            if (petId_3 !== undefined && petId_3 > 0) {
                petInfo = exports.listaDePets.find(function (p) { return p.petId === petId_3; });
                return [2 /*return*/, petInfo ?
                        res.status(200).send(exports.listaDeConsultas.filter(function (c) { return c.idPet === petId_3; })) :
                        res.status(404).send("Pet inexistente, tente novamnete")];
            }
            return [2 /*return*/, res.status(404).send("Por favor inserir petId valido")];
        }
        catch (error) {
            return [2 /*return*/, res.status(404).send(error)];
        }
        return [2 /*return*/];
    });
}); };
exports.buscarConsultasByPetId = buscarConsultasByPetId;
// GET - http://locahost:3000/consultasByUserId/:userId
var buscarConsultasByUserId = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var userId_2, consultasList_1;
    return __generator(this, function (_a) {
        try {
            userId_2 = parseInt(req.params.userId);
            if (userId_2 !== undefined && userId_2 > 0) {
                consultasList_1 = [];
                exports.listaDePets
                    .filter(function (p) { return p.idUsuario === userId_2; })
                    .forEach(function (p) { return exports.listaDeConsultas
                    .filter(function (c) { return c.idPet === p.petId; })
                    .forEach(function (c) { return consultasList_1.push(c); }); });
                return [2 /*return*/, consultasList_1 ?
                        res.status(200).send(consultasList_1) :
                        res.status(404).send("Dados invalidos, tente novamente")];
            }
            return [2 /*return*/, res.status(404).send("Por favor inserir userId valido")];
        }
        catch (error) {
            return [2 /*return*/, res.status(404).send(error)];
        }
        return [2 /*return*/];
    });
}); };
exports.buscarConsultasByUserId = buscarConsultasByUserId;
// POST - http://localhost:3000/consulta
var criarConsulta = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var requestBody_4, pet, clinica, error_8, yupError;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, consulta_1.consultaBody.validate(req.body)];
            case 1:
                requestBody_4 = _a.sent();
                pet = exports.listaDePets.find(function (p) { return p.petId === requestBody_4.idPet; });
                clinica = exports.listaDeClinicas.find(function (c) { return c.clinicaId === requestBody_4.idClinica; });
                if (pet && clinica && (0, consulta_1.consultaValida)(requestBody_4.idClinica, requestBody_4.data)) {
                    maxConsultaId += 1;
                    requestBody_4.consultaId = maxConsultaId;
                    exports.listaDeConsultas.push(requestBody_4);
                    return [2 /*return*/, res.status(201).send(requestBody_4)];
                }
                return [2 /*return*/, res.status(404).send("Inconsistência inexistente, tente novamente")];
            case 2:
                error_8 = _a.sent();
                yupError = error_8;
                return [2 /*return*/, res.json({
                        errors: yupError.message,
                    })];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.criarConsulta = criarConsulta;
// PUT - http://localhost:3000/consulta
var atualizarConsulta = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var requestBody_5, consulta_2, pet, clinica, error_9, yupError;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, consulta_1.consultaBody.validate(req.body)];
            case 1:
                requestBody_5 = _a.sent();
                consulta_2 = exports.listaDeConsultas.find(function (c) { return c.consultaId === requestBody_5.consultaId; });
                pet = exports.listaDePets.find(function (p) { return p.petId === requestBody_5.idPet; });
                clinica = exports.listaDeClinicas.find(function (c) { return c.clinicaId === requestBody_5.idClinica; });
                if (consulta_2 && pet && clinica && (0, consulta_1.consultaValida)(requestBody_5.idClinica, requestBody_5.data)) {
                    exports.listaDeConsultas = exports.listaDeConsultas.filter(function (c) { return c.consultaId !== consulta_2.consultaId; });
                    exports.listaDeConsultas.push(requestBody_5);
                    return [2 /*return*/, res.status(200).send(requestBody_5)];
                }
                return [2 /*return*/, res.status(404).send("Inconsistência inexistente, tente novamente")];
            case 2:
                error_9 = _a.sent();
                yupError = error_9;
                return [2 /*return*/, res.json({
                        errors: yupError.message,
                    })];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.atualizarConsulta = atualizarConsulta;
// DELETE - http://localhost:3000/consulta
var deletarConsulta = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var consultaId_2, consulta;
    return __generator(this, function (_a) {
        try {
            consultaId_2 = parseInt(req.params.consultaId);
            consulta = exports.listaDeConsultas.find(function (c) { return c.consultaId === consultaId_2; });
            if (consulta) {
                exports.listaDeConsultas = exports.listaDeConsultas.filter(function (c) { return c.consultaId !== consultaId_2; });
                return [2 /*return*/, res.status(200).send("Deletado com sucesso")];
            }
            return [2 /*return*/, res.status(404).send("Clínica inexistente, tente novamente")];
        }
        catch (error) {
            return [2 /*return*/, res.status(400).send(error)];
        }
        return [2 /*return*/];
    });
}); };
exports.deletarConsulta = deletarConsulta;
//# sourceMappingURL=index.js.map