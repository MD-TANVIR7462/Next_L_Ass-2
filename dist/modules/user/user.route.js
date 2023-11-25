"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRoutes = void 0;
const express_1 = __importDefault(require("express"));
const user_controler_1 = require("./user.controler");
const router = express_1.default.Router();
//routes
router.get("/", user_controler_1.getAllusers);
router.get("/:userId", user_controler_1.getSigleUser);
router.post("/", user_controler_1.creatUser);
router.delete("/:userId", user_controler_1.deleteSigleUser);
router.put("/:userId", user_controler_1.updateUser);
//bonus 
router.get("/:userId/orders", user_controler_1.specificUserOrders);
router.get("/:userId/orders/total-price", user_controler_1.ordersSum);
router.put("/:userId/orders", user_controler_1.orderUserDataAdd);
exports.UserRoutes = router;
