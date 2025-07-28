import express from "express";
import {
    createAnswer,
    updateAnswer,
    deleteAnswer,
    upvoteAnswer,
    getUserAnswerCount
} from "../controllers/answerController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

// 🔐 Protected routes
router.post("/:questionId", protect, createAnswer);        // Create a new answer for a question
router.put("/:id", protect, updateAnswer);                 // Update an answer
router.delete("/:id", protect, deleteAnswer);              // Delete an answer
router.post("/:id/upvote", protect, upvoteAnswer);         // Toggle upvote on an answer
router.get('/user/count', protect, getUserAnswerCount);    // Get total question count by logged-in user
export default router;
