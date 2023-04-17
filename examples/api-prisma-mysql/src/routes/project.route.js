import express from "express";
import { createProject } from "../controllers/project.controller.js";
import { verifyToken } from "../controllers/user.controller.js";

const router = express.Router();

//Create a project
router.post("/", verifyToken, createProject);

export default router;
