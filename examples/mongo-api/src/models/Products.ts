import mongoose, { Schema } from "mongoose";

const ProductSchema = new Schema({
  name: {
    type: String,
    unique: true,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true,
    enum: ["Hogar", "Cocina", "Higiene"],
  },
  stock: {
    type: Number,
    default: 10,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
  active: {
    type: Boolean,
    default: false,
  },
  test: {
    type: String,
  },
});

const Product = mongoose.model("Product", ProductSchema);

export default Product;
