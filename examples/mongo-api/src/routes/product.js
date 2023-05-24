import express from "express";
import {
  listall,
  show,
  create,
  update,
  deleted,
  find,
} from "../controllers/ProductController";

const router = express.Router();

router
  .get("/", listall)
  .post("/", create)
  .get("/:key/:value", find, show)
  .put("/:key/:value", find, update)
  .delete("/:key/:value", find, deleted);

export default router;
