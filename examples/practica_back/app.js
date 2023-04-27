import express from "express"
import userRouter from "./src/routes/user.router.js"

const app = express()

app.get("/", (req, res) => {
    res.send("Práctica API")
} )

app.use(express.json())
app.use("/user", userRouter)

app.listen(4000, ()=> {
    console.log('Server initialized!')
})
