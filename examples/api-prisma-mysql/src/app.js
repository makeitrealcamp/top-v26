import express from "express";
import jwt from "jsonwebtoken"
import cors from "cors"
import nodemailer from "nodemailer"
import smtpTransport from "nodemailer-smtp-transport";

import gestorRoutes from "./routes/gestor.route.js";
import projectRoutes from "./routes/project.route.js";
import gestorProjectRouter from "./routes/gestorproject.route.js";
import userRouter from "./routes/user.route.js"

const app = express();

app.use(cors())

app.get('/token', (req, res) => {
  const user = {id:1, name: "maria"}
  const secret= "$2a$12$V9TcJzy49ylH16DAgaOo.uIPeGAiXC0v7Tf2kAjJ4GSt//ALyBSB6"

  const token = jwt.sign(user, secret)
 // res.set("Access-Control-Allow-Origin", "*")
  res.send(token)
})

app.get("/mail", async (req, res) => {
 

  const transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      type: "OAuth2",
      user: 'mariagiraldo4@gmail.com',
      clientId: '328974681246-bri8cem3dc4bc573fc8qr24lentf0ruu.apps.googleusercontent.com',
      clientSecret: "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",
      refreshToken: "1//04kIKRZye9N-qCgYIARAAGAQSNwF-L9Ir-CQVVLAPmdLbVLvNZhyNQUKbjJBLu_m4P6ltkjS5qtF0JoR3g-scxm16F77xIbsLm-o"
    }
  });




  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"Fred Foo 👻" <mariagiraldo4@gmail.com>', // sender address
    to: "mariagiraldo4@gmail.com", // list of receivers
    subject: "otrooo ✔", // Subject line
    html: "<b>otroo</b>", // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...

  res.send(info)
})

// Middleware
app.use(express.json());
app.use("/gestor", gestorRoutes);
app.use("/project", projectRoutes);
app.use("/gestor-project", gestorProjectRouter);
app.use("/user", userRouter)

export default app


