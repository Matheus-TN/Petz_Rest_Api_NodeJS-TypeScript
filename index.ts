import express from "express";
import {
  login,
  buscarUsuarios,
  criarUsuario,
  atualizarUsuario,
  deletarUsuario,
  buscarPets,
  criarPet,
  atualizarPet,
  deletarPet,
  buscarPetsRua,
  criarPetRua,
  buscarClinicas,
  criarClinica,
  atualizarClinica,
  deletarClinica
} from "./src/controllers";

const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/login", login);

app.get("/usuario", buscarUsuarios);
app.post("/usuario", criarUsuario);
app.put("/usuario", atualizarUsuario);
app.delete("/usuario/:usuarioId", deletarUsuario);

app.get("/pet", buscarPets);
app.post("/pet", criarPet);
app.put("/pet", atualizarPet);
app.delete("/pet/:petId", deletarPet);

app.get("/petRua", buscarPetsRua),
app.post("/petRua", criarPetRua)

app.get("/clinica", buscarClinicas),
app.post("/clinica", criarClinica),
app.put("/clinica", atualizarClinica),
app.delete("/clinica/:clinicaId", deletarClinica)

app.listen(process.env["PORT"] || 3000, function () {
  console.log(`listening on ${process.env.PORT}`);
});

setInterval(() => {
  fetch("http://petzapi.herokuapp.com/user/1");
}, 600 * 1000);