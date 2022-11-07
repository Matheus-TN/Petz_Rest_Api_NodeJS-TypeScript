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
exports.consultaValida = exports.consultaBody = void 0;
var yup = __importStar(require("yup"));
var controllers_1 = require("../../controllers");
exports.consultaBody = yup.object().shape({
    consultaId: yup.number().min(0),
    idPet: yup.number().required().min(1),
    idClinica: yup.number().required().min(1),
    data: yup.date().required(),
    ativo: yup.boolean()
});
var consultaValida = function (idClinica, data) {
    return controllers_1.listaDeConsultas.find(function (c) { return c.idClinica === idClinica && c.data === data; }) === undefined;
};
exports.consultaValida = consultaValida;
//# sourceMappingURL=consulta.js.map