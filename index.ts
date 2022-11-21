import express from "express";
import {
  login,
  buscarUsuarios,
  criarUsuario,
  atualizarUsuario,
  deletarUsuario,
  buscarPets,
  buscarPetsById,
  buscarPetsByUserId,
  criarPet,
  atualizarPet,
  deletarPet,
  buscarPetsRua,
  buscarPetsRuaById,
  criarPetRua,
  buscarClinicas,
  buscarClinicasById,
  criarClinica,
  atualizarClinica,
  deletarClinica,
  buscarConsultas,
  buscarConsultasById,
  buscarConsultasByPetId,
  buscarConsultasByUserId,
  criarConsulta,
  atualizarConsulta,
  deletarConsulta
} from "./src/controllers";

const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.post("/login", login);

app.get("/usuario", buscarUsuarios);
app.post("/usuario", criarUsuario);
app.put("/usuario", atualizarUsuario);
app.delete("/usuario/:usuarioId", deletarUsuario);

app.get("/pet", buscarPets);
app.get("/pet/:petId", buscarPetsById);
app.get("/petsByUserId/:userId", buscarPetsByUserId);
app.post("/pet", criarPet);
app.put("/pet", atualizarPet);
app.delete("/pet/:petId", deletarPet);

app.get("/petRua", buscarPetsRua);
app.get("/petRua/:petRuaId", buscarPetsRuaById);
app.post("/petRua", criarPetRua);

app.get("/clinica", buscarClinicas);
app.get("/clinica/:clinicaId", buscarClinicasById);
app.post("/clinica", criarClinica);
app.put("/clinica", atualizarClinica);
app.delete("/clinica/:clinicaId", deletarClinica);

app.get("/consulta", buscarConsultas);
app.get("/consulta/:consultaId", buscarConsultasById);
app.get("/consultasByPetId/:petId", buscarConsultasByPetId);
app.get("/consultasByUserId/:userId", buscarConsultasByUserId);
app.post("/consulta", criarConsulta);
app.put("/consulta", atualizarConsulta);
app.delete("/consulta/:consultaId", deletarConsulta)

app.listen(process.env["PORT"] || 3000, function () {
  console.log(`listening on ${process.env.PORT}`);
});

setInterval(() => {
  fetch("http://petzapi.herokuapp.com/user/1");
}, 600 * 1000);