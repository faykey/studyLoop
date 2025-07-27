import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import connectDB from "./configs/db.js";
import userRoutes from "./routes/userRoutes.js";
import questionRoutes from "./routes/questionRoutes.js";
import answerRoutes from "./routes/answerRoutes.js"
import achievementRoutes from "./routes/achievementRoutes.js"
import notificationRoutes from "./routes/notificationRoutes.js";
import streakRoutes from "./routes/streakRoutes.js";
import studyPartnerRoutes from "./routes/studyPartnerRoutes.js";
import userAchievementRoutes from "./routes/userAchievementRoutes.js";
import waitlistRoutes from "./routes/waitlistRoutes.js";

dotenv.config();

// Initialize app
const app = express();

// Connect to DB
await connectDB();

app.use(cors());
app.use(express.json());  // <--- MUST be here


// Routes
app.get('/test', (req, res) => {
    res.send('Test route works!');
});

app.use("/api/user", userRoutes);
app.use("/api/questions", questionRoutes);
app.use("/api/answers", answerRoutes);
app.use("/api/achievements", achievementRoutes);
app.use("/api/notifications", notificationRoutes);
app.use("/api/streaks", streakRoutes);
app.use("/api/study-partners", studyPartnerRoutes);
app.use("/api/user-achievements", userAchievementRoutes);
app.use("/api/waitlist", waitlistRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
