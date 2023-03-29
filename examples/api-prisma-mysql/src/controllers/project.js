import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const getAllProjects = async (req, res) => {
  try {
    const projects = await prisma.gestor_project.findMany({
      orderBy: {
        gestor: {
          name: "asc",
        },
      },
      include: {
        project: {
          select: {
            name: true,
          },
        },
        gestor: {
          select: {
            name: true,
          },
        },
      },
    });
    console.log("projects", projects);
    if (projects.length >= 1) {
      const data = projects.map(({ idgestor, idproject, project, gestor }) => {
        return {
          idgestor,
          idproject,
          projectName: project.name,
          gestorName: gestor.name,
        };
      });
      res.status(200).json(data);
    } else {
      res.status(204).json({ error: true, messageError: "No content" });
    }
  } catch (error) {
    console.log("l;ega al error", error);
    res.status(500).json({ error: true });
  }
};

export const createProject = async (req, res) => {
  const project = await prisma.project.create({
    data: req.body,
  });
  res.json(project);
};

export const addGestorProject = async (req, res) => {
  const project = await prisma.gestor_project.create({
    data: req.body,
  });
  res.json(project);
};
