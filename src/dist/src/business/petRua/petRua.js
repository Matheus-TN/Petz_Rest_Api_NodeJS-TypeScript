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
exports.switchPorteRua = exports.petRuaBody = void 0;
var yup = __importStar(require("yup"));
exports.petRuaBody = yup.object().shape({
    petRuaId: yup.number(),
    nome: yup.string().required(),
    localEncontrado: yup.string(),
    ferido: yup.number().required().min(0).max(4),
    desnutrido: yup.number().required().min(0).max(4),
    agressivo: yup.number().required().min(0).max(4),
    porte: yup.number().required().min(0).max(2),
    observacoes: yup.string()
});
var switchPorteRua = function (pet) {
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
exports.switchPorteRua = switchPorteRua;
//# sourceMappingURL=petRua.js.map