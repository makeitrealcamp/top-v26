import express, { Router } from "express";
import { create, getAll } from "../controllers/IngredientController";

const router: Router = express.Router();

router.post("/", create).get("/", getAll);

export default router;
