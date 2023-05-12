import express from "express";
import cors from "cors";
import userRouter from "./src/routes/user.router.js";
import noteRouter from "./src/routes/note.router.js";

const app = express();

app.get("/", (req, res) => {
  res.send("Práctica API");
});

app.use(cors());
app.use(express.json());
app.use("/user", userRouter);
app.use("/notes", noteRouter);

app.listen(4000, () => {
  console.log("Server initialized!");
});
