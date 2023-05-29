import mongoose, { Schema } from "mongoose";

const RecipeSchema = new Schema({
  name: {
    type: String,
    unique: true,
    require: true,
  },
  price: Number,
  isVegetarian: {
    type: Boolean,
    default: false,
  },
  category: {
    type: String,
    require: true,
    enum: ["Mexican", "Colombian", "Vegetarian"],
  },
  created: {
    type: Date,
    default: Date.now(),
  },
});

const Recipe = mongoose.model("Recipe", RecipeSchema);

export default Recipe;
