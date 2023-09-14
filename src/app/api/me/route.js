import { NextResponse } from "next/server";

export const GET = async () => {
  return NextResponse.json({
    ok: true,
    fullName: "Panida Suthapakti",
    studentId: "650610790",
  });
};
