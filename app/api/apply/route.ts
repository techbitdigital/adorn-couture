import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import Application from "@/lib/models/ApplicationModel";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { fullName, email, phone, course, experienceLevel, message } = body;

    if (!fullName || !email || !phone || !course || !experienceLevel) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    await connectDB();

    const application = await Application.create({
      fullName,
      email,
      phone,
      course,
      experienceLevel,
      message,
      status: "pending",
    });

    console.log("New application saved:", application._id);

    return NextResponse.json(
      { success: true, message: "Application received successfully", id: application._id },
      { status: 200 }
    );
  } catch (error) {
    console.error("Apply API error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    await connectDB();
    const applications = await Application.find().sort({ createdAt: -1 });
    return NextResponse.json({ success: true, data: applications });
  } catch (error) {
    console.error("Get applications error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}