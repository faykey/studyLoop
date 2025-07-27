import Answer from "../models/Answer.js";
import Question from "../models/Question.js";

// 📌 Create a new answer
export const createAnswer = async (req, res) => {
    try {
        const { content, isAnonymous } = req.body;
        const { questionId } = req.params;

        const question = await Question.findById(questionId);
        if (!question) return res.status(404).json({ message: "Question not found" });

        const answer = new Answer({
            question: question._id,
            user: req.user._id,
            content,
            isAnonymous,
        });

        const savedAnswer = await answer.save();

        // Link the answer to the question
        question.answers.push(savedAnswer._id);
        await question.save();

        res.status(201).json(savedAnswer);
    } catch (error) {
        res.status(500).json({ message: "Failed to create answer", error: error.message });
    }
};

// 📌 Update an answer
export const updateAnswer = async (req, res) => {
    try {
        const { content, isAnonymous } = req.body;
        const answer = await Answer.findById(req.params.id);

        if (!answer) return res.status(404).json({ message: "Answer not found" });

        // Only the owner can update
        if (answer.user.toString() !== req.user._id.toString()) {
            return res.status(403).json({ message: "Not authorized" });
        }

        answer.content = content || answer.content;
        answer.isAnonymous = isAnonymous ?? answer.isAnonymous;

        const updatedAnswer = await answer.save();
        res.status(200).json(updatedAnswer);
    } catch (error) {
        res.status(500).json({ message: "Failed to update answer", error: error.message });
    }
};

// 📌 Upvote an answer
export const upvoteAnswer = async (req, res) => {
    try {
        const answer = await Answer.findById(req.params.id);
        if (!answer) return res.status(404).json({ message: "Answer not found" });

        const userId = req.user._id;
        if (answer.upvotes.includes(userId)) {
            answer.upvotes.pull(userId); // remove upvote
        } else {
            answer.upvotes.push(userId); // add upvote
        }

        await answer.save();
        res.status(200).json({ upvotes: answer.upvotes.length });
    } catch (error) {
        res.status(500).json({ message: "Failed to upvote answer", error: error.message });
    }
};

// 📌 Delete an answer
export const deleteAnswer = async (req, res) => {
    try {
        const answer = await Answer.findById(req.params.id);
        if (!answer) return res.status(404).json({ message: "Answer not found" });

        // Only the owner can delete
        if (answer.user.toString() !== req.user._id.toString()) {
            return res.status(403).json({ message: "Not authorized" });
        }

        // Remove answer from its question
        await Question.findByIdAndUpdate(answer.question, { $pull: { answers: answer._id } });

        await answer.deleteOne();
        res.status(200).json({ message: "Answer deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Failed to delete answer", error: error.message });
    }
};
