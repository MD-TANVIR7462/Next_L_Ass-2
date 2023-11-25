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
exports.specificUserOrders = exports.updateUser = exports.deleteSigleUser = exports.getSigleUser = exports.getAllusers = exports.creatUser = void 0;
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
            message: "User's fetched successfully!",
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
            message: "User fetched successfully!",
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
exports.getSigleUser = getSigleUser;
const deleteSigleUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { userId } = req.params;
        const result = yield (0, user_service_1.deleteSigleUsersDB)(userId);
        res.status(200).json({
            success: true,
            message: "User deleted successfully!",
            data: null,
        });
    }
    catch (err) {
        res.status(500).json({
            succcess: false,
            message: "User not deleted",
            error: {
                code: 404,
                description: "Users not deleted",
            },
        });
    }
});
exports.deleteSigleUser = deleteSigleUser;
const updateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { userId } = req.params;
        const data = req.body;
        const result = yield (0, user_service_1.updateUsersDB)(userId, data);
        res.status(200).json({
            success: true,
            message: "User updated successfully!",
            data: result,
        });
    }
    catch (err) {
        res.status(500).json({
            succcess: false,
            message: "User not updated",
            error: {
                code: 404,
                description: "User not updated",
            },
        });
    }
});
exports.updateUser = updateUser;
//bonus part
const specificUserOrders = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { userId } = req.params;
        const result = yield (0, user_service_1.specificUserOrdersDB)(userId);
        res.status(200).json({
            success: true,
            message: "Order fetched successfully!",
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
exports.specificUserOrders = specificUserOrders;
