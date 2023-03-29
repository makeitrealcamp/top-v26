import express from "express";
import { getAllGestor } from "../controllers/gestor.js";

const router = express.Router();

router.get("/", getAllGestor);

export default router;
