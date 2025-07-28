import Question from "../models/Question.js";
import Answer from "../models/Answer.js";

// 📌 Create a new question
export const createQuestion = async (req, res) => {
    try {
        const { content, subject, tags, isAnonymous } = req.body;

        const question = new Question({
            user: req.user._id,
            content,
            subject,
            tags,
            isAnonymous,
        });

        const savedQuestion = await question.save();
        res.status(201).json(savedQuestion);
    } catch (error) {
        res.status(500).json({ message: "Failed to create question", error });
    }
};

// 📌 Get all questions
export const getAllQuestions = async (req, res) => {
    try {
        const questions = await Question.find()
            .populate("user", "fullName")
            .sort({ createdAt: -1 });

        res.status(200).json(questions);
    } catch (error) {
        res.status(500).json({ message: "Failed to fetch questions", error });
    }
};

// 📌 Get a single question by ID
export const getQuestionById = async (req, res) => {
    try {
        const question = await Question.findById(req.params.id)
            .populate("user", "fullName")
            .populate("answers");

        if (!question) {
            return res.status(404).json({ message: "Question not found" });
        }

        res.status(200).json(question);
    } catch (error) {
        res.status(500).json({ message: "Failed to fetch question", error });
    }
};

// 📌 Update a question
export const updateQuestion = async (req, res) => {
    try {
        const { content, subject, tags, isAnonymous } = req.body;

        const question = await Question.findById(req.params.id);
        if (!question) return res.status(404).json({ message: "Question not found" });

        // Only the owner can update
        if (question.user.toString() !== req.user._id.toString()) {
            return res.status(403).json({ message: "Not authorized" });
        }

        question.content = content || question.content;
        question.subject = subject || question.subject;
        question.tags = tags || question.tags;
        question.isAnonymous = isAnonymous ?? question.isAnonymous;

        const updatedQuestion = await question.save();
        res.status(200).json(updatedQuestion);
    } catch (error) {
        res.status(500).json({ message: "Failed to update question", error });
    }
};

// 📌 Upvote a question
export const upvoteQuestion = async (req, res) => {
    try {
        const question = await Question.findById(req.params.id);
        if (!question) return res.status(404).json({ message: "Question not found" });

        const userId = req.user._id;

        if (question.upvotes.includes(userId)) {
            question.upvotes.pull(userId); // remove upvote
        } else {
            question.upvotes.push(userId); // add upvote
        }

        await question.save();
        res.status(200).json({ upvotes: question.upvotes.length });
    } catch (error) {
        res.status(500).json({ message: "Failed to upvote question", error });
    }
};

// 📌 Delete a question
export const deleteQuestion = async (req, res) => {
    try {
        const question = await Question.findById(req.params.id);
        if (!question) return res.status(404).json({ message: "Question not found" });

        // Only the owner can delete
        if (question.user.toString() !== req.user._id.toString()) {
            return res.status(403).json({ message: "Not authorized" });
        }

        await Question.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: "Question deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Failed to delete question", error });
    }
};

// 📌 Get total number of questions by the logged-in user
export const getUserQuestionCount = async (req, res) => {
    try {
        const userId = req.user._id;
        const count = await Question.countDocuments({ user: userId });
        res.status(200).json({ count });
    } catch (error) {
        res.status(500).json({ message: "Failed to get question count", error });
    }
};
