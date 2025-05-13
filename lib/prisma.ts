import { PrismaClient } from "@prisma/client";

// PrismaClient est attaché à l'objet global en développement pour éviter
// d'épuiser votre limite de connexion à la base de données
declare global {
  var prisma: PrismaClient | undefined;
}

const prisma = global.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") {
  global.prisma = prisma;
}

export default prisma;
