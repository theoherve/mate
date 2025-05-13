import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import prisma from "@/lib/prisma";
import { profileSchema } from "@/lib/validations/profile";

export async function PATCH(req: Request) {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user?.email) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const body = await req.json();
    const { name } = profileSchema.parse(body);

    const user = await prisma.user.update({
      where: {
        email: session.user.email,
      },
      data: {
        name,
      },
      select: {
        id: true,
        name: true,
        email: true,
      },
    });

    return NextResponse.json({
      user,
      updated: true,
    });
  } catch (error) {
    console.error("[PROFILE_PATCH]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}
