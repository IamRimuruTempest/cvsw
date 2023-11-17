import mongoose from "mongoose";

// const uri: string = "process.env.MONGODB_URI";
const connectMongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI!);
    console.log("Connected to MONGODB");
  } catch (error) {
    console.log(error);
  }
};

export default connectMongoDB;
