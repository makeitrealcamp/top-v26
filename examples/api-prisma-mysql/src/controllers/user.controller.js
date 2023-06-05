import { PrismaClient } from "@prisma/client";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

export const generateToken = (req, res) => {
  try {
    const { user } = req.body;
    const payload = { ...user };

    console.log(process.env.SECRET);

    const token = jwt.sign(payload, process.env.SECRET, { expiresIn: "1h" });

    res.status(200).json({ ...user, token });
  } catch (error) {
    res.status(500).json({ error: true });
  }
};

// Middleware
export const login = async (req, res, next) => {
  const { username: email, passwd: password } = req.body;
  try {
    const user = await prisma.user.findFirst({
      where: {
        email: email,
      },
    });
    console.log(user);
    const isValidUser = bcrypt.compareSync(password, user.password);
    console.log(isValidUser);
    if (isValidUser) {
      next();
    } else {
      res.status(401).json({ error: true, message: "user or password wrong!" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: true });
  }
};

// Middleware
export const verifyToken = (req, res, next) => {
  const token = req.header("Authorization").split(" ")[1];

  try {
    const decoded = jwt.verify(token, process.env.SECRET);
    console.log(decoded);
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

export const register = async (req, res) => {
  const { email, password } = req.body;
  const hash = bcrypt.hashSync(password, 12);
  const user = await prisma.user.create({
    data: { email, password: hash },
  });
  res.status(201).json(user);
};
