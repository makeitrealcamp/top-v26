import { Request, Response, NextFunction } from "express";
import Product from "../models/Products";

function listall(req: Request, res: Response) {
  Product.find({})
    .then((products) => {
      if (products.length) return res.status(200).send({ products });
      return res.status(204).send({ message: "NO CONTENT" });
    })
    .catch((err) => res.status(500).send({ err }));
}

function create(req: Request, res: Response) {
  let product = new Product(req.body);
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

function update(req: Request, res: Response) {
  if (req.body.error) return res.status(500).send({ error: req.body.error });
  if (!req.body.products) return res.status(404).send({ message: "Not Found" });
  let product: any = req.body.products[0];
  product = Object.assign(product, req.body);
  product
    .save()
    .then((product: any) =>
      res.status(200).send({ message: "Product Updated", product })
    )
    .catch((err: Error) => res.status(500).send({ err }));
}

function deleted(req: Request, res: Response) {
  if (req.body.error) return res.status(500).send({ error: req.body.error });
  if (!req.body.products) return res.status(404).send({ message: "Not Found" });
  console.log(req.body.products);

  req.body.products[0]
    .deleteOne()
    .then((product: any) => {
      res.status(200).send({ message: "Product removed", product });
    })
    .catch((err: Error) => res.status(500).send({ err }));
}

function find(req: Request, res: Response, next: NextFunction) {
  let query: any = {};
  query[req.params.key] = req.params.value;
  Product.find(query)
    .then((products) => {
      if (!products.length) return next();
      req.body.products = products;
      next();
    })
    .catch((err) => {
      req.body.error = err;
      next();
    });
}

export { listall, show, create, update, deleted, find };
