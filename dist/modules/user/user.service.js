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
exports.totalOrderPriceIntoDB = exports.ordersPriceSumDB = exports.addOrderUserInDB = exports.specificUserOrdersDB = exports.updateUsersDB = exports.deleteSigleUsersDB = exports.getSigleUsersDB = exports.getAllUsersDB = exports.creatUserInDB = void 0;
const user_model_1 = require("./user.model");
//main marks
const creatUserInDB = (user) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield user_model_1.UserModel.create(user);
    return result;
});
exports.creatUserInDB = creatUserInDB;
const getAllUsersDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield user_model_1.UserModel.find();
    return result;
});
exports.getAllUsersDB = getAllUsersDB;
const getSigleUsersDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield user_model_1.UserModel.findOne({ userId: { $eq: id } });
    return result;
});
exports.getSigleUsersDB = getSigleUsersDB;
const deleteSigleUsersDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(typeof (id));
    const result = yield user_model_1.UserModel.deleteOne({ userId: { $eq: id } });
    return result;
});
exports.deleteSigleUsersDB = deleteSigleUsersDB;
const updateUsersDB = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield user_model_1.UserModel.updateOne({ userId: { $eq: id } }, { $set: data });
    return result;
});
exports.updateUsersDB = updateUsersDB;
//bonus marks
const specificUserOrdersDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const userOrders = yield user_model_1.UserModel.findOne({ userId: { $eq: id } }, { _id: 0, orders: 1 });
    return userOrders;
});
exports.specificUserOrdersDB = specificUserOrdersDB;
const addOrderUserInDB = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield user_model_1.UserModel.updateOne({ userId: id }, { $push: { orders: data } });
    return result;
});
exports.addOrderUserInDB = addOrderUserInDB;
const ordersPriceSumDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield user_model_1.UserModel.aggregate([
        { $match: { userId: { $eq: id } } },
        { $unwind: "$orders" },
        {
            $group: {
                _id: "$orders",
                totalPrice: {
                    $sum: { $multiply: ["$orders.price", "$orders.quantity"] },
                },
            },
        },
        { $project: { _id: 0, totalPrice: 1 } },
    ]);
    return result;
});
exports.ordersPriceSumDB = ordersPriceSumDB;
const totalOrderPriceIntoDB = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    const orderData = yield user_model_1.UserModel.aggregate([
        { $match: { userId } },
        {
            $unwind: '$orders',
        },
        {
            $group: {
                _id: null,
                totalPrice: {
                    $sum: {
                        $multiply: ['$orders.price', '$orders.quantity'],
                    },
                },
            },
        },
        {
            $project: {
                _id: 0,
                totalPrice: 1,
            },
        },
    ]);
    if (orderData.length === 0) {
        return null;
    }
    return orderData;
});
exports.totalOrderPriceIntoDB = totalOrderPriceIntoDB;
