import mongoose from "mongoose";

const connectDB = async () => {
    try {
        mongoose.connection.on("connected", () => {
            console.log("✅ MongoDB connected");
        });

        mongoose.connection.on("error", (err) => {
            console.error("❌ MongoDB connection error:", err);
        });

        await mongoose.connect(`${process.env.MONGODB_URI}/study-loop`);
    } catch (error) {
        console.error("❌ DB Connection Failed:", error.message);
        process.exit(1); // Exit on failure
    }
};

export default connectDB;
