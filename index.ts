import express from "express";
import {
  login,
  getUser,
  createUser,
  updateUser,
  deleteUser,
  getPet,
  postPet,
  updatePet,
  deletePet,
} from "./src/controllers";

const app = express();

app.use(express.json());

app.get("/login", login);

app.get("/user/:userId?", getUser);
app.post("/user", createUser);
app.put("/user", updateUser);
app.delete("/user/:userId", deleteUser);

app.get("/pet/:userId?", getPet);
app.post("/pet", postPet);
app.put("/pet", updatePet);
app.delete("/pet/:petId", deletePet);

app.listen(3000, function () {
  console.log("listening on 3000");
});
