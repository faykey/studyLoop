import express from "express";
import {
    unlockAchievement,
    getMyAchievements,
    removeAchievement,
} from "../controllers/userAchievementController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/unlock", protect, unlockAchievement);    // Unlock a new achievement
router.get("/", protect, getMyAchievements);           // Get all my achievements
router.delete("/:id", protect, removeAchievement);     // Remove an unlocked achievement

export default router;
