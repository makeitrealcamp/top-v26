import { Schema } from "mongoose";

const RecipeSchema = new Schema({
  name: {
    type: String,
    unique: true,
    require: true,
  },
  price: {
    type: Number,
  },
  isVegetarian: {
    type: Boolean,
    default: false,
  },
  category: {
    type: String,
    require: true,
    enum: ["..."], // TODO
  },
});
