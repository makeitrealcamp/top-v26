import mongoose, { Schema } from "mongoose";

const IngredientSchema = new Schema({
  name: String,
  recipe: { type: Schema.Types.ObjectId, ref: "Recipe" },
});

const Ingredient = mongoose.model("Ingredient", IngredientSchema);

export default Ingredient;
