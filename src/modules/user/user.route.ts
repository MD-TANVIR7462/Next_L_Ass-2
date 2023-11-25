import express from "express";
import {
  creatUser,
  deleteSigleUser,
  getAllusers,
  getSigleUser,
  orderUserDataAdd,
  ordersSum,
  specificUserOrders,
  updateUser,
} from "./user.controler";
const router = express.Router();

//routes
router.get("/", getAllusers);
router.get("/:userId", getSigleUser);
router.post("/", creatUser);
router.delete("/:userId", deleteSigleUser);
router.put("/:userId", updateUser);

//bonus 
router.get("/:userId/orders",specificUserOrders)
router.get("/:userId/orders/total-price",ordersSum)
router.put("/:userId/orders",orderUserDataAdd)

export const UserRoutes = router;
