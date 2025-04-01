import { sendVerificationMail } from "@/helpers/sendVerificationMail";
import dbConnect from "@/lib/dbConnect";
import UserModel from "@/model/User";
import bcrypt from "bcryptjs";
export async function POST(req) {
  await dbConnect();
  try {
    const { username, email, password } = await req.json();
    const userVerifiedByEmail = await UserModel.findOne({ email });
    const verifyCode = Math.floor(100000 + Math.random() * 900000).toString();
    if (userVerifiedByEmail) {
      if (userVerifiedByEmail.isVerified) {
        return Response.json(
          {
            success: false,
            message: "User already exists",
          },
          { status: 400 }
        );
      } else {
        const hash = await bcrypt.hash(password, 10);
        userVerifiedByEmail.password = hash;
        userVerifiedByEmail.verifyCode = verifyCode;
        userVerifiedByEmail.verifyCodeExpiry = new Date(Date.now() + 3600000);
        await userVerifiedByEmail.save();
      }
    } else {
      const hash = await bcrypt.hash(password, 10);
      const expiry = new Date();
      expiry.setHours(expiry.getHours() + 1);
      const user = new UserModel({
        username,
        email,
        password: hash,
        verifyCode,
        verifyCodeExpiry: expiry,
        isVerified: false,
      });
      await user.save();
    }
    const emailResponse = await sendVerificationMail(
      email,
      username,
      verifyCode
    );
    if (!emailResponse.success) {
      return Response.json(
        { success: false, message: emailResponse.message },
        { status: 500 }
      );
    }
    return Response.json(
      {
        success: true,
        message: "User Resgistered verify your email",
      },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return Response.json(
      {
        success: false,
        message: "Error in Connecting to db",
      },
      { status: 500 }
    );
  }
}
