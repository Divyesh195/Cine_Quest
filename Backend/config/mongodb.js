import mongoose from "mongoose";

const connectDB = async () => {

  mongoose.connection.on("connected", () =>
    console.log("MongoDB is connected successfully")
  );

  await mongoose.connect(`${process.env.MONGODB_URI}/cineQuest`);
};

export default connectDB;
