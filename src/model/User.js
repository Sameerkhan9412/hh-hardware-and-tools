import mongoose, { Schema } from "mongoose";

const UserSchema = new Schema({
  username: {
    type: String,
    required: [true, "Username is required"],
    trim: true,
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
    match: [/.+\@.+\..+/, "Email is not Valid"],
  },
  password: { type: String, required: [true, "Password is required"] },
  verifyCode: {
    type: String,
    required: [true, "Verification code is required"],
  },
  verifyCodeExpiry: {
    type: Date,
    required: [true, "Verification code Expiry is required"],
  },
  isVerified: { type: Boolean, default: false },
});

const UserModel = mongoose.models.User || mongoose.model("User", UserSchema);

export default UserModel;
