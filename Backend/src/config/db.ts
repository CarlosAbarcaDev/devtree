import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const { connection } = await mongoose.connect(process.env.MONGO_URI);
    const information = `${connection.host}:${connection.port}`;

    console.log("MongoDB connected");
    console.log("Database Information:", information);
  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
    process.exit(1);
  }
};
