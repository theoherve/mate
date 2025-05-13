import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import prisma from "@/lib/prisma";
import { hash, compare } from "bcryptjs";

export async function PATCH(req: Request) {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user?.email) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const body = await req.json();
    const { currentPassword, newPassword } = body;

    if (!currentPassword || !newPassword) {
      return new NextResponse("Missing required fields", { status: 400 });
    }

    const user = await prisma.user.findUnique({
      where: {
        email: session.user.email,
      },
    });

    if (!user) {
      return new NextResponse("User not found", { status: 404 });
    }

    const isPasswordValid = await compare(currentPassword, user.password);

    if (!isPasswordValid) {
      return new NextResponse("Current password is incorrect", { status: 400 });
    }

    const hashedPassword = await hash(newPassword, 12);

    await prisma.user.update({
      where: {
        email: session.user.email,
      },
      data: {
        password: hashedPassword,
      },
    });

    return new NextResponse("Password updated successfully");
  } catch (error) {
    console.error("[PASSWORD_PATCH]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}
