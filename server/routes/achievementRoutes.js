import express from "express";
import {
    createAchievement,
    getAllAchievements,
    getAchievementById,
    updateAchievement,
    deleteAchievement,
} from "../controllers/achievementController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

// Admin-protected routes (optional — add admin check middleware later)
router.post("/", protect, createAchievement);      // Create a new achievement
router.get("/", protect, getAllAchievements);      // Get all achievements
router.get("/:id", protect, getAchievementById);   // Get one achievement
router.put("/:id", protect, updateAchievement);    // Update an achievement
router.delete("/:id", protect, deleteAchievement); // Delete an achievement

export default router;
