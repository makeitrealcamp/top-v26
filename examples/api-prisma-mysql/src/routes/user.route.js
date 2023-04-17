import express from "express";
import { login, generateToken } from "../controllers/user.controller.js";

const router = express.Router();

//Create a project
router.post("/login", login, generateToken);

export default router;
