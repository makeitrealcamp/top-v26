import mongoose, { Schema } from "mongoose";

const LoteSchema = new Schema({
  name: {
    type: String,
    unique: true,
    required: true,
  },
  product: {
    type: Schema.Types.ObjectId,
    ref: "Product",
  },
});

const Lote = mongoose.model("Lote", LoteSchema);

export default Lote;
