import dotenv from "dotenv";
import express, { Express, Request, Response } from "express";

dotenv.config();
const app: Express = express();

// Middleware to handle body.json in the request
app.use(express.json());

// Root route
app.get("/", (req: Request, res: Response) => {
  res.json({ message: "'Hello API mongo" });
});

export default app;
