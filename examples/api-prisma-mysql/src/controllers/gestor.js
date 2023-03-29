import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const getAllGestor = async (req, res) => {
  try {
    const gestores = await prisma.gestor.findMany();
    if (gestores.length >= 1) {
      res.status(200).json(gestores);
    } else {
      res.status(204).json({ error: true, messageError: "No content" });
    }
  } catch (error) {
    res.status(500).json({ error: true });
  }
};
