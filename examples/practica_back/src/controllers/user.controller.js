import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const prisma = new PrismaClient();

export const register = async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log("áaaaaaaaaaaaa", req.body);
    const hash = bcrypt.hashSync(password, 12);
    const user = await prisma.user.create({
      data: { email, password: hash },
    });
    res.status(201).json(user);
  } catch (error) {
    console.log(error);
    res.status(500).send();
  }
};

export const generateToken = (req, res) => {
  try {
    const { user } = req.body;
    const payload = { ...user };

    const token = jwt.sign(payload, process.env.SECRET, { expiresIn: "1h" });

    res.status(200).json({ ...user, token });
  } catch (error) {
    console.log(error);

    res.status(500).json({ error: true });
  }
};

// Middleware
export const login = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    const user = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });
    const isValidUser = bcrypt.compareSync(password, user.password);
    if (isValidUser) {
      next();
    } else {
      res.status(401).json({ error: true, message: "user or password wrong!" });
    }
  } catch (error) {
    res.status(500).json({ error: true });
  }
};

// Middleware
export const verifyToken = (req, res, next) => {
  const token = req.header("Authorization").split(" ")[1];

  try {
    const decoded = jwt.verify(token, process.env.SECRET);
    const { exp: expDate } = decoded;

    //expired?
    if (Date.now() / 1000 > expDate) {
      res.status(401).send();
    } else {
      // valid user in bd
      next();
    }
  } catch (error) {
    res.status(401).send();
  }
};
