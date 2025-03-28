import { prisma } from "@/app/lib/prisma";
import { User } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const data: User = await req.json();
  const user = await prisma.user.create({ data });
  return NextResponse.json(user);
}
