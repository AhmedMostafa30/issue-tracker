import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";

// add request as a parameter to prevent caching
export async function GET(request: NextRequest) {
  const users = await prisma.user.findMany({ orderBy: { name: "asc" } });
  return NextResponse.json(users);
}
