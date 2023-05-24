import dotenv from "dotenv";
import express, { Express, Request, Response } from "express";
import Product from "./routes/product";
import Lote from "./routes/lote";

dotenv.config();
const app: Express = express();

// Middleware to handle body.json in the request
app.use(express.json());

// Root route
app.get("/", (req: Request, res: Response) => {
  res.json({ message: "'Hello API mongo" });
});

app.use("/product", Product);
app.use("/lote", Lote);

export default app;
