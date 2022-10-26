"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var user_1 = require("./src/controllers/user");
var app = (0, express_1.default)();
app.use(express_1.default.json());
app.get("/Login", user_1.login);
app.get("/user", user_1.getUser);
app.post("/user", user_1.createUser);
app.delete("/user", user_1.deleteUser);
app.listen(3000, function () {
    console.log("listening on 3000");
});
//# sourceMappingURL=index.js.map