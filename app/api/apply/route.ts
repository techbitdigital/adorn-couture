import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { fullName, email, phone, course, experienceLevel, message } = body;

    if (!fullName || !email || !phone || !course || !experienceLevel) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    console.log("New Application:", { fullName, email, phone, course, experienceLevel, message });

    return NextResponse.json({ success: true, message: "Application received successfully" }, { status: 200 });
  } catch (error) {
    console.error("Apply API error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}