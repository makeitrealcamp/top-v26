import { Request, Response, NextFunction } from "express";
import Ingredient from "../models/ingredient";
import Database from "../config/database";

export const create = async (req: Request, res: Response) => {
  try {
    const database = new Database();
    await database.connect();
    const item = new Ingredient(req.body);
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
    const items = await Ingredient.find()
    //.populate("recipe")
      .populate({ path: "recipe", select: "name" })
      .exec();
    await database.disconnect();
    if (items.length) return res.json(items);
    return res.status(204);
  } catch (error) {
    res.status(500).json(error);
  }
};
