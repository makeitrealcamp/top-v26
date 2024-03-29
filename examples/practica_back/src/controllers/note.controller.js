import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const createNote = async (req, res) => {
  const { description, user } = req.body;

  try {
    const note = await prisma.notes.create({
      data: {
        // Needed connectOrCreate to add user in the register
        user: {
          connectOrCreate: {
            create: {},
            where: {
              iduser: user,
            },
          },
        },
        description,
      },
    });
    res.status(201).json(note);
  } catch (error) {
    res.status(500).json({ error: true });
  }
};

export const getAllNotes = async (req, res) => {
  try {
    const notes = await prisma.notes.findMany();
    if (notes.length >= 1) {
      res.status(200).json(notes);
    } else {
      res.status(204).send();
    }
  } catch (error) {
    res.status(500).json({ error: true });
  }
};

export const updateNote = async (req, res) => {
  try {
    const { id } = req.params;
    const note = await prisma.notes.update({
      where: {
        idnotes: +id,
      },
      data: req.body,
    });
    res.json(note);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: true });
  }
};

export const deleteOneNote = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await prisma.notes.delete({
      where: {
        idnotes: +id,
      },
    });
    res.json(deleted);
  } catch (error) {
    res.status(500).json({ error: true });
  }
};
