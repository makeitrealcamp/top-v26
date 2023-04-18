import { PrismaClient } from "@prisma/client";
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"

const prisma = new PrismaClient();

export const generateToken = (req, res) => {
  try {
    const { user } = req.body
    const payload = {...user }

    const token = jwt.sign(payload, process.env.SECRET, {expiresIn: "1h"})

    res.status(200).json({ ...user, token })
  } catch (error) {
    res.status(500).json({ error: true });
  }
}

// Middleware
export const login = async (req, res, next) => {
  const {username: email, passwd: password} = req.body
  try {
    const hash = bcrypt.hashSync(password, 12);
    console.log('hash', hash)
    const user = await prisma.user.findFirst({
      where: {
        email: email,
        password: hash
      }
    })
    console.log('user', user)  
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: true });
  }
};

// Middleware
export const verifyToken = (req, res, next) => {
    const token = req.header("Authorization").split(" ")[1]

    try {
      const decoded = jwt.verify(token, process.env.SECRET)
      console.log(decoded)
      const {exp: expDate} = decoded

      //TODO: validate date
      //expired?
      if( Date.now()/1000 > expDate ) {
        console.log('expired')
        res.status(401).send()
      }
      else {
        // valid user in bd
       next()
      }
      
      next()

    } catch (error) {
      res.status(401).send()
    }
}


export const register = async (req, res) => {
  const { email, password } = req.body
  const hash = bcrypt.hashSync(password, 12);
  const user = await prisma.user.create({
    data: {email, password:hash}
  })
  res.status(201).json(user)
}