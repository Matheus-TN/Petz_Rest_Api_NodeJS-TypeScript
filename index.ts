import express, { Request, Response } from "express";
import { login, getUser, createUser, deleteUser } from "./src/controllers/user";

const app = express();

app.use(express.json());

app.get("/Login", login);
app.get("/user", getUser);
app.post("/user", createUser);
app.delete("/user", deleteUser);

app.listen(3000, function () {
  console.log("listening on 3000");
});
