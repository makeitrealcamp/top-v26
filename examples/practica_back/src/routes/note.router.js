import express from "express";
import { verifyToken} from "../controllers/user.controller.js";
import { createNote, getAllNotes, updateNote, deleteOneNote } from "../controllers/note.controller.js";

const router = express.Router();

// Register
router.post("/", verifyToken, createNote);
router.get("/", verifyToken, getAllNotes);
router.put("/:id", verifyToken, updateNote);
router.delete("/:id", verifyToken, deleteOneNote);

export default router