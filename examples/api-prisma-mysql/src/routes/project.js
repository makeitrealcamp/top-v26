import express from "express";
import {
  getAllProjects,
  createProject,
  addGestorProject,
} from "../controllers/project.js";

const router = express.Router();

router.get("/", getAllProjects);
router.put("/", createProject);
router.put("/add", addGestorProject);

export default router;
