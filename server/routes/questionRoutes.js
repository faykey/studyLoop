import express from 'express';
import {
    createQuestion,
    getAllQuestions,
    getQuestionById,
    deleteQuestion,
    upvoteQuestion,
    getUserQuestionCount
} from '../controllers/questionController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

// 🔐 Protected routes (requires user to be logged in)
router.post('/', protect, createQuestion); // Ask a new question
router.get('/', protect, getAllQuestions); // Get all questions
router.get('/:id', protect, getQuestionById); // Get a single question by ID
router.delete('/:id', protect, deleteQuestion); // Delete question
router.post('/:id/upvote', protect, upvoteQuestion); // Toggle upvote
router.get('/user/count', protect, getUserQuestionCount); // Get total question count by logged-in user


export default router;
