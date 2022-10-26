"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.petExists = exports.petIsvalid = exports.petBodyValidation = void 0;
var controllers_1 = require("../controllers");
var yup = __importStar(require("yup"));
exports.petBodyValidation = yup.object().shape({
    petId: yup.number().positive().min(0),
    idUser: yup.number().positive().min(0),
    name: yup.string().required().min(1),
    age: yup.number().required().min(0),
    breed: yup.string().required().min(1),
    size: yup.number().positive().min(0).max(2),
    allergy: yup.string(),
    disease: yup.string(),
});
var petIsvalid = function (name, idUser) {
    return (controllers_1.petMock.find(function (pet) { return pet.name === name && pet.idUser === idUser; }) ===
        undefined && controllers_1.userMock.find(function (user) { return user.userId === idUser; }) !== undefined);
};
exports.petIsvalid = petIsvalid;
var petExists = function (petId) {
    return controllers_1.petMock.find(function (pet) { return pet.petId === petId; }) !== undefined;
};
exports.petExists = petExists;
//# sourceMappingURL=pet.js.map