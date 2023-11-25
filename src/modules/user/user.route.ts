import express from "express";
import { creatUser, getAllusers } from "./user.controler";
const router = express.Router();

//routes
router.get('/',getAllusers)
router.post("/", creatUser);

export const UserRoutes = router;
