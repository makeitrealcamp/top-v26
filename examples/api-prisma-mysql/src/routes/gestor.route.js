import express from "express";
import {
  getAllGestor,
  getOneGestor,
  createGestor,
  updateGestor,
  deleteOneGestor,
} from "../controllers/gestor.controller.js";
import { verifyToken } from "../controllers/user.controller.js";

const router = express.Router();

// Select all gestores
router.get("/", verifyToken,  getAllGestor);

// Select one  gestor
router.get("/:id", verifyToken, getOneGestor);

//Create a gestor
router.post("/", verifyToken, createGestor);

//update a gestor
router.put("/:id", updateGestor);

router.delete("/:id", deleteOneGestor);

export default router;
