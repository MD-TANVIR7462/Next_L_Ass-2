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
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSigleUser = exports.getAllusers = exports.creatUser = void 0;
const user_service_1 = require("./user.service");
const creatUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = req.body; //post man give data in a user object
        const result = yield (0, user_service_1.creatUserInDB)(user);
        res.status(200).json({
            success: true,
            message: "User created successfully!",
            data: result,
        });
    }
    catch (err) {
        res.status(500).json({
            succcess: false,
            message: "User not found",
            error: {
                code: 404,
                description: "User not found",
            },
        });
    }
});
exports.creatUser = creatUser;
const getAllusers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield (0, user_service_1.getAllUsersDB)();
        res.status(200).json({
            success: true,
            message: "User's are retrived successfully!",
            data: result,
        });
    }
    catch (err) {
        res.status(500).json({
            succcess: false,
            message: "Users not found",
            error: {
                code: 404,
                description: "Users not found",
            },
        });
    }
});
exports.getAllusers = getAllusers;
const getSigleUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { userId } = req.params;
        const result = yield (0, user_service_1.getSigleUsersDB)(userId);
        res.status(200).json({
            success: true,
            message: "User's are retrived successfully!",
            data: result,
        });
    }
    catch (err) {
        res.status(500).json({
            succcess: false,
            message: "Single User not found",
            error: {
                code: 404,
                description: "Sigle Users not found",
            },
        });
    }
});
exports.getSigleUser = getSigleUser;
