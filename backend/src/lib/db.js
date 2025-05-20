import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

export const connectDB = async () => {
  try {
    // console.log(process.env.MONGODB_URI);
    
    const conn = await mongoose.connect("mongodb+srv://120180507mater:4ybfa3v95Zda0o9T@cluster0.i7eng2d.mongodb.net/chat_db?retryWrites=true&w=majority&appName=Cluster0");
    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    console.log("MongoDB connection error:", error);
  }
};
