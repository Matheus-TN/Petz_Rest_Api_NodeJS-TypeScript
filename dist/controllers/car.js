"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCar = exports.createCar = exports.getCar = void 0;
var carros = [
    {
        nome: "car",
        velocidade: 5,
    },
    {
        nome: "car1",
        velocidade: 10,
    },
];
var getCar = function (req, res) {
    if (!req.params.nome) {
        return res.status(200).send(carros);
    }
    var carro = carros.find(function (c) { return c.nome === req.params.nome; });
    if (!carro) {
        return res.status(404).send("Carro não encontrado");
    }
    res.status(200).send(carro).end();
};
exports.getCar = getCar;
var createCar = function (req, res) {
    var carro = req.body;
    if (!(carro === null || carro === void 0 ? void 0 : carro.nome) || !(carro === null || carro === void 0 ? void 0 : carro.velocidade)) {
        return res.status(400).send("Campos faltando").end();
    }
    if ((carro === null || carro === void 0 ? void 0 : carro.nome) && typeof carro.nome !== "string") {
        return res.status(400).send("Nome precisa ser string").end();
    }
    if ((carro === null || carro === void 0 ? void 0 : carro.velocidade) && typeof carro.velocidade !== "number") {
        return res.status(400).send("Velocidade precisa ser número").end();
    }
    carros.push(carro);
    res.status(201).send(carro).end();
};
exports.createCar = createCar;
var deleteCar = function (req, res) {
    var carro = carros.find(function (c) { return c.nome === req.params.nome; });
    if (!carro) {
        return res.status(404).send("Carro não encontrado").end();
    }
    carros = carros.filter(function (c) { return c.nome !== carro.nome; });
    return res.status(204).send("Deletado com sucesso");
};
exports.deleteCar = deleteCar;
//# sourceMappingURL=car.js.map