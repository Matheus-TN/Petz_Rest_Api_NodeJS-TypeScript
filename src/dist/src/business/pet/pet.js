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
exports.switchPorte = exports.petValidoParaAtualizar = exports.petValido = exports.petBody = void 0;
var yup = __importStar(require("yup"));
var controllers_1 = require("../../controllers");
exports.petBody = yup.object().shape({
    petId: yup.number(),
    idUsuario: yup.number().required().min(1),
    nome: yup.string().required().min(1),
    raca: yup.string().required().min(1),
    idade: yup.number().required().min(0),
    porte: yup.number().required().min(0).max(2),
    alergias: yup.string(),
    doencas: yup.string()
});
var petValido = function (idUsuario, nome) {
    return controllers_1.listaDePets.find(function (p) { return p.idUsuario === idUsuario && p.nome === nome; }) === undefined;
};
exports.petValido = petValido;
var petValidoParaAtualizar = function (idUsuario, petId, nome) {
    return controllers_1.listaDePets.find(function (p) { return p.idUsuario === idUsuario && p.petId !== petId && p.nome === nome; }) === undefined;
};
exports.petValidoParaAtualizar = petValidoParaAtualizar;
var switchPorte = function (pet) {
    switch (pet.porte) {
        case 0:
            pet.porte = 'Pequeno';
            break;
        case 1:
            pet.porte = 'Medio';
            break;
        case 2:
            pet.porte = 'Grande';
            break;
    }
    return pet;
};
exports.switchPorte = switchPorte;
//# sourceMappingURL=pet.js.map