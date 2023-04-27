import express from "express";
import { register } from "../controllers/user.controller.js";

const router = express.Router();

// Register
router.post("/",  register);

export default router