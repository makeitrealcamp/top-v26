import express from "express";
import gestorRoutes from "./routes/gestor.route.js";
import projectRoutes from "./routes/project.route.js";
import gestorProjectRouter from "./routes/gestorproject.route.js";

const app = express();
const PORT = process.env.PORT

// Middleware
app.use(express.json());
app.use("/gestor", gestorRoutes);
app.use("/project", projectRoutes);
app.use("/gestor-project", gestorProjectRouter);

app.listen(PORT, () => {
  console.log("Server Initialized...");
});

