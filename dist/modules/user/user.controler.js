"use strict";
var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value);
          });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done
          ? resolve(result.value)
          : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.ordersSum =
  exports.orderUserDataAdd =
  exports.specificUserOrders =
  exports.updateUser =
  exports.deleteSigleUser =
  exports.getSigleUser =
  exports.getAllusers =
  exports.creatUser =
    void 0;
const user_service_1 = require("./user.service");
const user_validation_1 = require("./user.validation");
const creatUser = (req, res) =>
  __awaiter(void 0, void 0, void 0, function* () {
    try {
      //zod validation
      const user = req.body;
      const zodvalidateData =
        user_validation_1.UserValidationSchema.parse(user);
      const result = yield (0, user_service_1.creatUserInDB)(zodvalidateData);
      res.status(200).json({
        success: true,
        message: "User created successfully!",
        data: result,
      });
    } catch (err) {
      res.status(500).json({
        succcess: false,
        message: "User not found",
        error: {
          code: 404,
          description: "User not found",
          err,
        },
      });
    }
  });
exports.creatUser = creatUser;
const getAllusers = (req, res) =>
  __awaiter(void 0, void 0, void 0, function* () {
    try {
      const result = yield (0, user_service_1.getAllUsersDB)();
      res.status(200).json({
        success: true,
        message: "User's fetched successfully!",
        data: result,
      });
    } catch (err) {
      res.status(500).json({
        succcess: false,
        message: "Users not found",
        error: {
          code: 404,
          description: "Users not found",
          err,
        },
      });
    }
  });
exports.getAllusers = getAllusers;
const getSigleUser = (req, res) =>
  __awaiter(void 0, void 0, void 0, function* () {
    try {
      const { userId } = req.params;
      const result = yield (0, user_service_1.getSigleUsersDB)(userId);
      if (!result) {
        return res.status(404).json({
          succcess: false,
          message: "User not found",
          error: {
            code: 404,
            description: "User not found",
          },
        });
      }
      res.status(200).json({
        success: true,
        message: "User fetched successfully!",
        data: result,
      });
    } catch (err) {
      res.status(500).json({
        succcess: false,
        message: "User not found",
        error: {
          code: 404,
          description: "User not found",
          err,
        },
      });
    }
  });
exports.getSigleUser = getSigleUser;
const deleteSigleUser = (req, res) =>
  __awaiter(void 0, void 0, void 0, function* () {
    try {
      const { userId } = req.params;
      const result = yield (0, user_service_1.deleteSigleUsersDB)(
        parseInt(userId)
      );
      if (!result) {
        return res.status(404).json({
          succcess: false,
          message: "User not found",
          error: {
            code: 404,
            description: "User not found",
          },
        });
      }
      res.status(200).json({
        success: true,
        message: "User deleted successfully!",
        data: null,
      });
    } catch (err) {
      res.status(500).json({
        succcess: false,
        message: "User not deleted",
        error: {
          code: 404,
          description: "Users not deleted",
          err,
        },
      });
    }
  });
exports.deleteSigleUser = deleteSigleUser;
const updateUser = (req, res) =>
  __awaiter(void 0, void 0, void 0, function* () {
    try {
      const { userId } = req.params;
      const data = req.body;
      const result = yield (0, user_service_1.updateUsersDB)(userId, data);
      if (!result) {
        return res.status(404).json({
          succcess: false,
          message: "User not found",
          error: {
            code: 404,
            description: "User not found",
          },
        });
      }
      res.status(200).json({
        success: true,
        message: "User updated successfully!",
        data: result,
      });
    } catch (err) {
      res.status(500).json({
        succcess: false,
        message: "User not updated",
        error: {
          code: 404,
          description: "User not updated",
          err,
        },
      });
    }
  });
exports.updateUser = updateUser;
//bonus part
const specificUserOrders = (req, res) =>
  __awaiter(void 0, void 0, void 0, function* () {
    try {
      const { userId } = req.params;
      const result = yield (0, user_service_1.specificUserOrdersDB)(userId);
      if (!result) {
        return res.status(404).json({
          succcess: false,
          message: "User not found",
          error: {
            code: 404,
            description: "User not found",
          },
        });
      }
      res.status(200).json({
        success: true,
        message: "Order fetched successfully!",
        data: result,
      });
    } catch (err) {
      res.status(500).json({
        succcess: false,
        message: "orders not found",
        error: {
          code: 404,
          description: "orders not found",
          err,
        },
      });
    }
  });
exports.specificUserOrders = specificUserOrders;
const orderUserDataAdd = (req, res) =>
  __awaiter(void 0, void 0, void 0, function* () {
    try {
      const { userId } = req.params;
      const data = req.body;
      const result = yield (0, user_service_1.addOrderUserInDB)(userId, data);
      res.status(200).json({
        success: true,
        message: "Order ADDED successfully!",
        data: result,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "Order does not added",
        error: {
          code: 404,
          description: "Order does not added",
          error,
        },
      });
    }
  });
exports.orderUserDataAdd = orderUserDataAdd;
const ordersSum = (req, res) =>
  __awaiter(void 0, void 0, void 0, function* () {
    try {
      const { userId } = req.params;
      const result = yield (0, user_service_1.totalOrderPriceIntoDB)(
        parseInt(userId)
      );
      res.status(200).json({
        success: true,
        message: "Total price calculated successfully!",
        data: result,
      });
    } catch (err) {
      res.status(500).json({
        succcess: false,
        message: "price not calculated ",
        error: {
          code: 404,
          description: "price not calculated",
          err,
        },
      });
    }
  });
exports.ordersSum = ordersSum;
