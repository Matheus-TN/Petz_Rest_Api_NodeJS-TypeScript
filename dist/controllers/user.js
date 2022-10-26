"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.createUser = exports.getUser = exports.login = exports.userMock = void 0;
var login_1 = require("../business/login");
var user_1 = require("../business/user");
exports.userMock = [
    {
        userId: 1,
        name: "adm1",
        email: "email1",
        password: "password1",
        crmv: "crmv1",
        address: "address1",
    },
    {
        userId: 2,
        name: "adm2",
        email: "email2",
        password: "password2",
        crmv: "crmv2",
        address: "address2",
    },
    {
        userId: 3,
        name: "adm3",
        email: "email3",
        password: "password3",
        crmv: "crmv3",
        address: "address3",
    },
    {
        userId: 4,
        name: "adm4",
        email: "email4",
        password: "password4",
        address: "address4",
    },
    {
        userId: 5,
        name: "adm5",
        email: "email5",
        password: "password5",
        address: "address5",
    },
];
var maxUserId = 6;
var login = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var validatedLogin, userInfo, error_1, yupError;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                validatedLogin = undefined;
                userInfo = undefined;
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, login_1.loginBodyValidation.validate(req.body)];
            case 2:
                validatedLogin = _a.sent();
                userInfo = exports.userMock.find(function (user) {
                    return user.email === validatedLogin.email &&
                        user.password === validatedLogin.password;
                });
                res.status(userInfo ? 200 : 204).send(userInfo);
                return [3 /*break*/, 4];
            case 3:
                error_1 = _a.sent();
                yupError = error_1;
                return [2 /*return*/, res.json({
                        errors: yupError.message,
                    })];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.login = login;
var getUser = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        res.status(200).send(exports.userMock);
        return [2 /*return*/];
    });
}); };
exports.getUser = getUser;
var createUser = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var validatedUser, error_2, yupError;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                validatedUser = undefined;
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, user_1.userBodyValidation.validate(req.body)];
            case 2:
                validatedUser = _a.sent();
                if ((0, login_1.loginIsValid)(validatedUser.email)) {
                    validatedUser.userId = maxUserId + 1;
                    exports.userMock.push(validatedUser);
                    return [2 /*return*/, res.status(201).send(validatedUser)];
                }
                return [2 /*return*/, res.status(409).json({
                        errors: "email já cadastrado, tente novamente",
                    })];
            case 3:
                error_2 = _a.sent();
                yupError = error_2;
                return [2 /*return*/, res.json({
                        errors: yupError.message,
                    })];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.createUser = createUser;
var deleteUser = function (req, res) {
    var userInfo = exports.userMock.find(function (user) { return user.email === req.body.email; });
    if (userInfo === undefined) {
        return res.status(404).send("Email inexistente, tente novamente");
    }
    exports.userMock = exports.userMock.filter(function (user) { return user.email !== userInfo.email; });
    return res.status(204).send("Deletado com sucesso");
};
exports.deleteUser = deleteUser;
//# sourceMappingURL=user.js.map