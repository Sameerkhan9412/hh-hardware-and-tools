import mongoose from "mongoose";

const ReviewSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    username: { type: String, required: true },
    email: { type: String, required: true },
    review: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
  }
);

export default mongoose.models.Review || mongoose.model("Review", ReviewSchema);
