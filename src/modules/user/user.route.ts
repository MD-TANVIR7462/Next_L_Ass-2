import express from "express";
import { creatUser, getAllusers, getSigleUser, } from "./user.controler";
const router = express.Router();

//routes
router.get('/',getAllusers)
router.get("/:userId",getSigleUser)
router.post("/", creatUser);


export const UserRoutes = router;
