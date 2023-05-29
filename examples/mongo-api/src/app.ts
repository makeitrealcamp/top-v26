import dotenv from "dotenv";
import express, { Express, Request, Response } from "express";
import RecipeRouter from "./routes/recipe";

dotenv.config();
const app: Express = express();

// Middleware to handle body.json in the request
app.use(express.json());

// Root route
app.get("/", (req: Request, res: Response) => {
  res.json({ message: "'Hello API mongo" });
});

app.use("/recipe", RecipeRouter);

export default app;
