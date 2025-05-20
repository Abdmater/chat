import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

export const connectDB = async () => {
  try {
    // console.log(process.env.MONGODB_URI);
    
    const conn = await mongoose.connect("mongodb+srv://120180507mater:ckzyoopdQC6pS6Y2@chat.uecpdrr.mongodb.net/?retryWrites=true&w=majority&appName=chat/chat");
    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    console.log("MongoDB connection error:", error);
  }
};
