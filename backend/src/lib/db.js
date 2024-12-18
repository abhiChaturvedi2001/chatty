import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect("mongodb+srv://chaturvedia435:G3CcadBo5JxkQb6k@cluster0.qajqp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
    console.log(`MongoDB connected`);
  } catch (error) {
    console.log("MongoDB connection error:", error);
  }
};
