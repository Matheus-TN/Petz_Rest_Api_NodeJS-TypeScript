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
exports.clinicaIsvalid = exports.clinicaBodyValidation = void 0;
var controllers_1 = require("../controllers");
var yup = __importStar(require("yup"));
exports.clinicaBodyValidation = yup.object().shape({
    clinicaId: yup.number().positive().min(0),
    nome: yup.string().required().min(1),
    avaliacao: yup.number().required().positive().min(0),
    endereco: yup.string().required().min(1),
    sobre: yup.string().min(0),
    servicos: yup.string().min(0),
    horarios: yup.array().required().min(1),
    pagamento: yup.array().required().min(1),
    avaliacaoCount: yup.number()
});
var clinicaIsvalid = function (nome) {
    return controllers_1.clinicaMock.find(function (clinica) { return clinica.nome === nome; }) === undefined;
};
exports.clinicaIsvalid = clinicaIsvalid;
//# sourceMappingURL=clinica.js.map