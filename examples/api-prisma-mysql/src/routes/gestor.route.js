import express from "express";
import {
  getAllGestor,
  getOneGestor,
  createGestor,
  updateGestor,
  deleteOneGestor,
} from "../controllers/gestor.controller.js";

const router = express.Router();

// Select all gestores
router.get("/", getAllGestor);

// Select one  gestor
router.get("/:id", getOneGestor);

//Create a gestor
router.post("/", createGestor);

//update a gestor
router.put("/:id", updateGestor);

router.delete("/:id", deleteOneGestor);

export default router;
