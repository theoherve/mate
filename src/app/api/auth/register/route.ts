import { NextResponse } from "next/server";
import { hash } from "bcryptjs";
import prisma from "@/lib/db";

export async function POST(req: Request) {
  try {
    console.log("Début de la requête d'inscription");
    const { email, password, name } = await req.json();
    console.log("Données reçues:", { email, name });

    // Check if user already exists
    console.log("Vérification de l'existence de l'utilisateur");
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      console.log("Utilisateur déjà existant");
      return NextResponse.json(
        { error: "User already exists" },
        { status: 400 }
      );
    }

    // Hash password
    console.log("Hachage du mot de passe");
    const hashedPassword = await hash(password, 12);

    // Create user
    console.log("Création de l'utilisateur");
    const user = await prisma.user.create({
      data: {
        email,
        name,
        password: hashedPassword,
      },
    });
    console.log("Utilisateur créé avec succès:", user.id);

    return NextResponse.json(
      { message: "User created successfully" },
      { status: 201 }
    );
  } catch (error) {
    console.error("Erreur détaillée lors de l'inscription:", error);
    return NextResponse.json(
      {
        error: "Error creating user",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}
