"use server";

import dbConnect from "@/lib/dbConnect";
import Review from "@/schemas/Review";

export async function POST(req) {
  await dbConnect();
  try {
    const { userId, username, email, review } = await req.json();
    if (!userId || !username || !email || !review) {
      return Response.json(
        { success: false, message: "All fields are required" },
        { status: 400 }
      );
    }

    // Check if a review already exists for the user
    const existingReview = await Review.findOne({ userId });
    if (existingReview) {
      // Update the existing review
      existingReview.review = review;
      existingReview.updatedAt = new Date();
      await existingReview.save();
      return Response.json(
        { success: true, message: "Review updated successfully" },
        { status: 200 }
      );
    }

    // Create a new review if none exists
    const newReview = new Review({
      userId,
      username,
      email,
      review,
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    await newReview.save();

    return Response.json(
      { success: true, message: "Review submitted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Review submission error:", error);
    return Response.json(
      { success: false, message: "Error saving review" },
      { status: 500 }
    );
  }
}


// GET API to fetch all reviews
export async function GET() {
    await dbConnect();
    try {
      const reviews = await Review.find().sort({ createdAt: -1 }); // Get latest reviews first
      return Response.json(
        { success: true, reviews },
        { status: 200 }
      );
    } catch (error) {
      console.error("Error fetching reviews:", error);
      return Response.json(
        { success: false, message: "Error fetching reviews" },
        { status: 500 }
      );
    }
  }
