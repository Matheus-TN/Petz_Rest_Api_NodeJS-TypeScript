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
exports.valoresDefault = exports.clinicaValido = exports.clinicaBody = void 0;
var yup = __importStar(require("yup"));
var controllers_1 = require("../../controllers");
exports.clinicaBody = yup.object().shape({
    email: yup.string().min(1),
    senha: yup.string().min(1),
    clinicaId: yup.number(),
    nome: yup.string().required(),
    crmv: yup.string().required(),
    pontuacao: yup.number().min(0).max(5),
    endereco: yup.string(),
    sobre: yup.string(),
    servicos: yup.string(),
    horarios: yup.array(),
    pagamentos: yup.array()
});
var clinicaValido = function (clinicaId, nome, crmv) {
    return controllers_1.listaDeClinicas.find(function (c) { return c.clinicaId !== clinicaId && (c.nome === nome || c.crmv === crmv); }) === undefined;
};
exports.clinicaValido = clinicaValido;
var valoresDefault = function (clinica) {
    if (clinica.endereco === '')
        clinica.endereco = 'Endereço não cadastrado';
    if (clinica.sobre === '')
        clinica.sobre = 'Sobre não cadastrado';
    if (clinica.servicos === '')
        clinica.servicos = 'Serviços não cadastrado';
    if (clinica.horarios.length === 0)
        clinica.horarios.push('Seg. - Sex. das 8:00 - 17:00');
    if (clinica.pagamentos.length === 0)
        clinica.pagamentos.push('Mastercard');
    return clinica;
};
exports.valoresDefault = valoresDefault;
//# sourceMappingURL=clinica.js.map