import express from "express";
import {
    createNotification,
    getUserNotifications,
    markAsRead,
    deleteNotification,
} from "../controllers/notificationController.js";
import { protect } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/", protect, createNotification);      // Create a new notification
router.get("/", protect, getUserNotifications);     // Get all notifications for a user
router.put("/:id/read", protect, markAsRead);       // Mark notification as read
router.delete("/:id", protect, deleteNotification); // Delete notification

export default router;
