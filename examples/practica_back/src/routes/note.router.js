import express from "express";
import { verifyToken} from "../controllers/user.controller.js";
import { createNote, getAllNotes } from "../controllers/note.controller.js";

const router = express.Router();

// Register
router.post("/", verifyToken, createNote);
router.get("/", verifyToken, getAllNotes);

export default router