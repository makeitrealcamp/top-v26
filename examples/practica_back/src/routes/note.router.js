import express from "express";
import { verifyToken} from "../controllers/user.controller.js";
import { createNote } from "../controllers/note.controller.js";

const router = express.Router();

// Register
router.post("/", verifyToken, createNote);

export default router