import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

export const register = async (req, res) => {
    try {
        const { email, password } = req.body;
        const hash = bcrypt.hashSync(password, 12);
        const user = await prisma.user.create({
          data: { email, password: hash },
        });
        res.status(201).json(user);
    } catch (error) {
        console.log(error)
        res.status(500).send()
    }
   
  };
  