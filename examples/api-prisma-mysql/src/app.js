import express from "express";
import jwt from "jsonwebtoken"
import cors from "cors"

import gestorRoutes from "./routes/gestor.route.js";
import projectRoutes from "./routes/project.route.js";
import gestorProjectRouter from "./routes/gestorproject.route.js";
import userRouter from "./routes/user.route.js"
import { sendEmail, sendEmailGrid } from "./controllers/email.controller.js";

const app = express();

app.use(cors())

app.get('/token', (req, res) => {
  const user = {id:1, name: "maria"}
  const secret= "$2a$12$V9TcJzy49ylH16DAgaOo.uIPeGAiXC0v7Tf2kAjJ4GSt//ALyBSB6"

  const token = jwt.sign(user, secret)
 // res.set("Access-Control-Allow-Origin", "*")
  res.send(token)
})



// Middleware
app.use(express.json());
app.use("/gestor", gestorRoutes);
app.use("/project", projectRoutes);
app.use("/gestor-project", gestorProjectRouter);
app.use("/user", userRouter)
app.get("/email", sendEmail)
app.get("/send", sendEmailGrid)


const upload = async(req, res) => {
  console.log('upload...', req.body)
  res.json({msg: req.body})
}

app.post('/upload', upload)


export default app


