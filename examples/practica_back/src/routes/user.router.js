import express from "express";
import { register, generateToken, login } from "../controllers/user.controller.js";

const router = express.Router();

// Register
router.post("/",  register);
router.post("/login", login, generateToken);

export default router