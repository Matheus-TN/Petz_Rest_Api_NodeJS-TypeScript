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
exports.deletePet = exports.updatePet = exports.postPet = exports.getPet = exports.deleteUser = exports.updateUser = exports.createUser = exports.getUser = exports.login = exports.petMock = exports.userMock = void 0;
var login_1 = require("../business/login");
var pet_1 = require("../business/pet");
var user_1 = require("../business/user");
// --- Devido a falta de uma base de dados, foi utilizado uma lista de mock como solução técnica ---
// --- dbo.T_User ---
exports.userMock = [
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
exports.petMock = [
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
var maxUserId = 5;
var maxPetId = 5;
// --- ENDPOINTS REFERENTES A USUARIO/LOGIN ----
//
// LOGIN
// GET - http://localhost:3000/login
var login = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var validatedLogin, userInfo, pets, error_1, yupError;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                validatedLogin = undefined;
                userInfo = undefined;
                pets = undefined;
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, login_1.loginBodyValidation.validate(req.body)];
            case 2:
                validatedLogin = _a.sent();
                userInfo = exports.userMock.find(function (user) {
                    return user.email === validatedLogin.email &&
                        user.password === validatedLogin.password;
                });
                pets = exports.petMock.filter(function (pet) { return pet.idUser === (userInfo === null || userInfo === void 0 ? void 0 : userInfo.userId); });
                res.send({
                    user: userInfo,
                    pets: pets,
                });
                return [3 /*break*/, 4];
            case 3:
                error_1 = _a.sent();
                yupError = error_1;
                return [2 /*return*/, res.json({
                        errors: yupError.message,
                    })];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.login = login;
// GET ALL USERS IF DONT HAVE USER ID OR GET USER BY USER ID
// GET - http://localhost:3000/user/userId?
var getUser = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var userId_1, users;
    return __generator(this, function (_a) {
        try {
            userId_1 = parseInt(req.params.userId);
            if (userId_1 > 0) {
                users = undefined;
                users = exports.userMock.filter(function (user) { return user.userId === userId_1; });
                return [2 /*return*/, res.status(200).send(users)];
            }
            return [2 /*return*/, res.status(200).send(exports.userMock)];
        }
        catch (error) {
            return [2 /*return*/, res.status(400).send(error)];
        }
        return [2 /*return*/];
    });
}); };
exports.getUser = getUser;
// POST USER
// POST - http://localhost:3000/user
var createUser = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var validatedUser, error_2, yupError;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                validatedUser = undefined;
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, user_1.userBodyValidation.validate(req.body)];
            case 2:
                validatedUser = _a.sent();
                if ((0, login_1.loginIsValid)(validatedUser.email)) {
                    maxUserId += 1;
                    validatedUser.userId = maxUserId;
                    exports.userMock.push(validatedUser);
                    return [2 /*return*/, res.status(201).send(validatedUser)];
                }
                return [2 /*return*/, res.status(409).json({
                        errors: "email já cadastrado, tente novamente",
                    })];
            case 3:
                error_2 = _a.sent();
                yupError = error_2;
                return [2 /*return*/, res.json({
                        errors: yupError.message,
                    })];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.createUser = createUser;
// UPDATE USER
// PUT - http://localhost:3000/user
var updateUser = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var validatedUser, error_3, yupError;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                validatedUser = undefined;
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, user_1.userBodyValidation.validate(req.body)];
            case 2:
                validatedUser = _a.sent();
                if ((0, user_1.userExists)(validatedUser.userId)) {
                    // Removendo antigo registro
                    exports.userMock = exports.userMock.filter(function (user) { return user.userId !== validatedUser.userId; });
                    exports.userMock.push(validatedUser);
                    return [2 /*return*/, res.status(200).send(validatedUser)];
                }
                return [2 /*return*/, res.status(404).send("Usuário inexistente, tente novamente")];
            case 3:
                error_3 = _a.sent();
                yupError = error_3;
                return [2 /*return*/, res.json({
                        errors: yupError.message,
                    })];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.updateUser = updateUser;
// DELETE USER
// DELETE - http://localhost:3000/user/userId
var deleteUser = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var userId_2, userInfo;
    return __generator(this, function (_a) {
        try {
            userId_2 = parseInt(req.params.userId);
            userInfo = exports.userMock.find(function (user) { return user.userId === userId_2; });
            if (userInfo === undefined) {
                return [2 /*return*/, res.status(404).send("usuário inexistente, tente novamente")];
            }
            exports.userMock = exports.userMock.filter(function (user) { return user.userId !== userId_2; });
            exports.petMock = exports.petMock.filter(function (pet) { return pet.idUser !== userId_2; });
            return [2 /*return*/, res.status(204).send("Deletado com sucesso")];
        }
        catch (error) {
            return [2 /*return*/, res.status(400).send(error)];
        }
        return [2 /*return*/];
    });
}); };
exports.deleteUser = deleteUser;
// --- ENDPOINTS REFERENTES A PET ----
//
// GET ALL PETS IF DONT HAVE USER ID OR GET PETS BY USER ID
// GET = http://localhost:3000/pet/userId?
var getPet = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var userId_3, pets;
    return __generator(this, function (_a) {
        try {
            userId_3 = parseInt(req.params.userId);
            if (userId_3 > 0) {
                pets = undefined;
                pets = exports.petMock.filter(function (pet) { return pet.idUser === userId_3; });
                return [2 /*return*/, res.status(200).send(pets)];
            }
            return [2 /*return*/, res.status(200).send(exports.petMock)];
        }
        catch (error) {
            return [2 /*return*/, res.status(400).send(error)];
        }
        return [2 /*return*/];
    });
}); };
exports.getPet = getPet;
// POST PET
// POST - http://localhost:3000/pet
var postPet = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var validatedPet, error_4, yupError;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                validatedPet = undefined;
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, pet_1.petBodyValidation.validate(req.body)];
            case 2:
                validatedPet = _a.sent();
                if ((0, pet_1.petIsvalid)(validatedPet.name, validatedPet.idUser)) {
                    maxPetId += 1;
                    validatedPet.petId = maxPetId;
                    exports.petMock.push(validatedPet);
                    return [2 /*return*/, res.status(201).send(validatedPet)];
                }
                return [2 /*return*/, res.status(409).json({
                        errors: "nome de pet já cadastrado para este usuário ou usuário inválido, tente novamente",
                    })];
            case 3:
                error_4 = _a.sent();
                yupError = error_4;
                res.json({
                    errors: yupError.message,
                });
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.postPet = postPet;
// UPDATE PET
// PUT - http://localhost:3000/pet
var updatePet = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var validatedPet, error_5, yupError;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                validatedPet = undefined;
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, pet_1.petBodyValidation.validate(req.body)];
            case 2:
                validatedPet = _a.sent();
                if ((0, pet_1.petExists)(validatedPet.petId)) {
                    // Removendo antigo registro
                    exports.petMock = exports.petMock.filter(function (pet) { return pet.petId !== validatedPet.petId; });
                    exports.petMock.push(validatedPet);
                    return [2 /*return*/, res.status(200).send(validatedPet)];
                }
                return [2 /*return*/, res.status(404).send("Pet inexistente, tente novamente")];
            case 3:
                error_5 = _a.sent();
                yupError = error_5;
                return [2 /*return*/, res.json({
                        errors: yupError.message,
                    })];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.updatePet = updatePet;
// DELETE PET
// DELETE - http://localhost:3000/pet/petId
var deletePet = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var petId_1, petInfo;
    return __generator(this, function (_a) {
        try {
            petId_1 = parseInt(req.params.petId);
            petInfo = exports.petMock.find(function (pet) { return pet.petId === petId_1; });
            if (petInfo === undefined) {
                return [2 /*return*/, res.status(404).send("pet inexistente, tente novamente")];
            }
            exports.petMock = exports.petMock.filter(function (pet) { return pet.petId !== petId_1; });
            return [2 /*return*/, res.status(204).send("Deletado com sucesso")];
        }
        catch (error) {
            return [2 /*return*/, res.status(400).send(error)];
        }
        return [2 /*return*/];
    });
}); };
exports.deletePet = deletePet;
//# sourceMappingURL=index.js.map