import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const createNote = async (req, res) => {
    const {description, user} = req.body
   
    try {
      const note = await prisma.notes.create({
        data: {
            // Needed connectOrCreate to add user in the register
            user: {
                connectOrCreate: {
                    create: {},
                    where: {
                        iduser: user
                    }
                }
            },
            description
        }
      });
      res.status(201).json(note);
    } catch (error) {
      res.status(500).json({ error: true });
    }
  };