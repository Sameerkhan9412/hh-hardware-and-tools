import mongoose from "mongoose";

const connection = {};

const dbConnect = async () => {
  if (connection.isConnected) {
    console.log("database already connected");
    return;
  }
  try {
    const db = await mongoose.connect(process.env.DB_URI || "", {});
    connection.isConnected = db.connections[0].readyState;

    console.log("db connected");
  } catch (error) {
    console.log("connection failed", error);
    process.exit(1);
  }
};

export default dbConnect;
