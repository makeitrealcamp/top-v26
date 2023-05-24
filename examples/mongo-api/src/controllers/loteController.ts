import { Request, Response, NextFunction } from "express";
import Lote from "../models/Lotes";

function listall(req: Request, res: Response) {
  Lote.find()
    .populate({ path: "product", select: "name" })
    .then((products) => {
      if (products.length) return res.status(200).send({ products });
      return res.status(204).send({ message: "NO CONTENT" });
    })
    .catch((err) => res.status(500).send({ err }));
}

function create(req: Request, res: Response) {
  let product = new Lote(req.body);
  product
    .save()
    .then((product) => res.status(201).send({ product }))
    .catch((err) => res.status(500).send({ err }));
}

function show(req: Request, res: Response) {
  if (req.body.error) return res.status(500).send({ error: "error" });
  if (!req.body.products) return res.status(404).send({ message: "Not Found" });
  let products = req.body.products;
  return res.status(200).send({ products });
}

function find(req: Request, res: Response, next: NextFunction) {
  let query: any = {};
  query[req.params.key] = req.params.value;
  Lote.find(query)
    .populate("product")
    .exec()
    .then((products) => {
      console.log("products");
      if (!products.length) return next();
      req.body.products = products;
      next();
    })
    .catch((err) => {
      req.body.error = err;
      next();
    });
}

export { listall, show, create, find };
