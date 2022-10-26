"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var controllers_1 = require("./src/controllers");
var app = (0, express_1.default)();
app.use(express_1.default.json());
app.get("/login", controllers_1.login);
app.get("/user/:userId?", controllers_1.getUser);
app.post("/user", controllers_1.createUser);
app.put("/user", controllers_1.updateUser);
app.delete("/user/:userId", controllers_1.deleteUser);
app.get("/pet/:userId?", controllers_1.getPet);
app.post("/pet", controllers_1.postPet);
app.put("/pet", controllers_1.updatePet);
app.delete("/pet/:petId", controllers_1.deletePet);
app.listen(3000, function () {
    console.log("listening on 3000");
});
//# sourceMappingURL=index.js.map