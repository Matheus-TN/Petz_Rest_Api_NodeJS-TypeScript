"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var user_1 = require("./src/controllers/user");
var app = (0, express_1.default)();
app.use(express_1.default.json());
app.get("/login", user_1.login);
app.get("/user/:userId?", user_1.getUser);
app.post("/user", user_1.createUser);
app.put("/user", user_1.updateUser);
app.delete("/user/:userId", user_1.deleteUser);
app.get("/pet/:userId?", user_1.getPet);
app.post("/pet", user_1.postPet);
app.put("/pet", user_1.updatePet);
app.delete("/pet/:petId", user_1.deletePet);
app.listen(3000, function () {
    console.log("listening on 3000");
});
//# sourceMappingURL=index.js.map