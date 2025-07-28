import express from "express";
import { getUserStreak, incrementStreak, resetStreak } from "../controllers/streakController.js";
import { protect } from "../middleware/authMiddleware.js";
import { getFullStreakDetails } from "../controllers/streakController.js";

const router = express.Router();

router.get("/", protect, getUserStreak);       // Get user's streak
router.post("/increment", protect, incrementStreak);  // Increment streak
router.post("/reset", protect, resetStreak);   // Reset streak
router.get("/full", protect, getFullStreakDetails); // 🆕 Unified streak+achievements

export default router;
