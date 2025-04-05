// src/app/api/user/update-image/route.js

import dbConnect from "@/lib/dbConnect";
import UserModel from "@/model/User";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const body = await request.json();
    const { userId, imageUrl } = body;

    if (!userId || !imageUrl) {
      return NextResponse.json({ success: false, message: "Missing fields" }, { status: 400 });
    }

    await dbConnect();

    const user = await UserModel.findByIdAndUpdate(userId, { image: imageUrl }, { new: true });

    if (!user) {
      return NextResponse.json({ success: false, message: "User not found" }, { status: 404 });
    }

    return NextResponse.json({ success: true, user });
  } catch (error) {
    console.error("Error updating user image:", error);
    return NextResponse.json({ success: false, message: "Internal Server Error" }, { status: 500 });
  }
}
