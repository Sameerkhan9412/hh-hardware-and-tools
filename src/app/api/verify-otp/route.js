import dbConnect from "@/lib/dbConnect";
import UserModel from "@/model/User";

export async function POST(request) {
  await dbConnect();
  try {
    const { email, code } = await request.json();
    const decodedEmail = decodeURIComponent(email);
    const user = await UserModel.findOne({ email: decodedEmail });
    if (!user) {
      return Response.json(
        {
          success: false,
          message: "User not found",
        },
        {
          status: 404,
        }
      );
    }
    const isValid = user.verifyCode === code;
    const isCodeExpired = new Date(user.verifyCodeExpiry) < new Date();
    if (isValid && !isCodeExpired) {
      user.isVerified = true;
      await user.save();
      return Response.json(
        {
          success: true,
          message: "User Verified",
        },
        {
          status: 200,
        }
      );
    } else if (isCodeExpired) {
      return Response.json(
        {
          success: false,
          message: "Verificatio code expired",
        },
        {
          status: 400,
        }
      );
    } else {
      return Response.json(
        {
          success: false,
          message: "Error Verifying user",
        },
        {
          status: 500,
        }
      );
    }
  } catch (error) {
    console.log("Error verifying user", error);
    return Response.json(
      {
        success: false,
        message: "Error verifying user",
      },
      {
        status: 500,
      }
    );
  }
}
