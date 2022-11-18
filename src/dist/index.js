"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var controllers_1 = require("./src/controllers");
var cors = require("cors");
var app = (0, express_1.default)();
app.use(cors());
app.use(express_1.default.json());
app.get("/login", controllers_1.login);
app.get("/usuario", controllers_1.buscarUsuarios);
app.post("/usuario", controllers_1.criarUsuario);
app.put("/usuario", controllers_1.atualizarUsuario);
app.delete("/usuario/:usuarioId", controllers_1.deletarUsuario);
app.get("/pet", controllers_1.buscarPets);
app.get("/pet/:petId", controllers_1.buscarPetsById);
app.get("/petsByUserId/:userId", controllers_1.buscarPetsByUserId);
app.post("/pet", controllers_1.criarPet);
app.put("/pet", controllers_1.atualizarPet);
app.delete("/pet/:petId", controllers_1.deletarPet);
app.get("/petRua", controllers_1.buscarPetsRua);
app.get("/petRua/:petRuaId", controllers_1.buscarPetsRuaById);
app.post("/petRua", controllers_1.criarPetRua);
app.get("/clinica", controllers_1.buscarClinicas);
app.get("/clinica/:clinicaId", controllers_1.buscarClinicasById);
app.post("/clinica", controllers_1.criarClinica);
app.put("/clinica", controllers_1.atualizarClinica);
app.delete("/clinica/:clinicaId", controllers_1.deletarClinica);
app.get("/consulta", controllers_1.buscarConsultas);
app.get("/consulta/:consultaId", controllers_1.buscarConsultasById);
app.get("/consultasByPetId/:petId", controllers_1.buscarConsultasByPetId);
app.get("/consultasByUserId/:userId", controllers_1.buscarConsultasByUserId);
app.post("/consulta", controllers_1.criarConsulta);
app.put("/consulta", controllers_1.atualizarConsulta);
app.delete("/consulta/:consultaId", controllers_1.deletarConsulta);
app.listen(process.env["PORT"] || 3000, function () {
    console.log("listening on ".concat(process.env.PORT));
});
setInterval(function () {
    fetch("http://petzapi.herokuapp.com/user/1");
}, 600 * 1000);
//# sourceMappingURL=index.js.map