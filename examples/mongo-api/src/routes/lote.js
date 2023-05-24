import express from "express";
import { create, listall, find, show } from "../controllers/loteController";

const router = express.Router();

router.post("/", create).get("/:key/:value", find, show).get("/", listall);

export default router;
