import { Request, Response, NextFunction } from "express";
import Recipe from "../models/recipe";
import Database from "../config/database";

export const create = async (req: Request, res: Response) => {
  try {
    const database = new Database();
    await database.connect();
    const item = new Recipe(req.body);
    await item.save();
    await database.disconnect();
    res.status(201).json(item);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const getAll = async (req: Request, res: Response) => {
  try {
    const database = new Database();
    await database.connect();
    const items = await Recipe.find();
    await database.disconnect();
    if (items.length) return res.json(items);
    return res.status(204);
  } catch (error) {
    res.status(500).json(error);
  }
};

// http://localhost:3001/recipe/:key/:value = {params: {key: "", value: ""}}
export const find = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const database = new Database();
    await database.connect();
    const { key, value } = req.params;
    const query: any = {};
    query[key] = value; // name = Arroz ...
    const items = await Recipe.find(query);
    await database.disconnect();
    if (!items.length) return res.status(204).send();
    req.body.items = items;
    next();
  } catch (error) {
    res.status(500).json(error);
  }
};

export const getOne = (req: Request, res: Response) => {
  try {
    console.log(req.body.items);
    res.json(req.body.items[0]);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const update = async (req: Request, res: Response) => {
  try {
    const database = new Database();
    await database.connect();
    let item = req.body.items[0];
    item = Object.assign(item, req.body); // {...item, ...req.body}
    const newItem = await item.save();
    await database.disconnect();
    res.json(newItem);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const deleteOne = async (req: Request, res: Response) => {
  try {
    const database = new Database();
    await database.connect();
    let item = req.body.items[0];
    const deleted = await item.deleteOne();
    await database.disconnect();
    res.json(deleted);
  } catch (error) {
    res.status(500).json(error);
  }
};
