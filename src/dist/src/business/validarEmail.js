"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validarEmail = void 0;
var controllers_1 = require("../controllers");
var validarEmail = function (id, email) {
    var usuario = controllers_1.listaDeUsuarios.find(function (u) { return u.usuarioId !== id && u.email === email; });
    var clinica = controllers_1.listaDeClinicas.find(function (c) { return c.clinicaId !== id && c.email === email; });
    return usuario === undefined && clinica === undefined;
};
exports.validarEmail = validarEmail;
//# sourceMappingURL=validarEmail.js.map