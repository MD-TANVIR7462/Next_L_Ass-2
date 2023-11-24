import express from "express";
import { creatUser } from "./user.controler";
const router = express.Router();
router.post("/", creatUser);

export const UserRoutes = router;
