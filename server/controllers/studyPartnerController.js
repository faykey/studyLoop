import StudyPartner from "../models/StudyPartner.js";
import User from "../models/User.js";

// 📌 Create or update study partner preferences
export const upsertStudyPartner = async (req, res) => {
    try {
        const { subjects, preferredStudyTimes, timezone, notes, isLookingForPartner } = req.body;

        let studyPartner = await StudyPartner.findOne({ user: req.user._id });

        if (studyPartner) {
            // Update existing entry
            studyPartner.subjects = subjects || studyPartner.subjects;
            studyPartner.preferredStudyTimes = preferredStudyTimes || studyPartner.preferredStudyTimes;
            studyPartner.timezone = timezone || studyPartner.timezone;
            studyPartner.notes = notes || studyPartner.notes;
            studyPartner.isLookingForPartner = isLookingForPartner ?? studyPartner.isLookingForPartner;
        } else {
            // Create new entry
            studyPartner = new StudyPartner({
                user: req.user._id,
                subjects,
                preferredStudyTimes,
                timezone,
                notes,
                isLookingForPartner,
            });
        }

        const savedPartner = await studyPartner.save();
        res.status(201).json(savedPartner);
    } catch (error) {
        res.status(500).json({ message: "Failed to save study partner preferences", error: error.message });
    }
};

// 📌 Get current user's study partner preferences
export const getMyStudyPartner = async (req, res) => {
    try {
        const studyPartner = await StudyPartner.findOne({ user: req.user._id }).populate("matchedPartner", "fullName email");
        if (!studyPartner) return res.status(404).json({ message: "No study partner preferences found" });

        res.status(200).json(studyPartner);
    } catch (error) {
        res.status(500).json({ message: "Failed to fetch study partner preferences", error: error.message });
    }
};

// 📌 Find potential matches (basic filter by subjects)
export const findMatches = async (req, res) => {
    try {
        const myPrefs = await StudyPartner.findOne({ user: req.user._id });
        if (!myPrefs) return res.status(404).json({ message: "You need to set preferences first" });

        const matches = await StudyPartner.find({
            _id: { $ne: myPrefs._id },
            isLookingForPartner: true,
            subjects: { $in: myPrefs.subjects },
        }).populate("user", "fullName email");

        res.status(200).json(matches);
    } catch (error) {
        res.status(500).json({ message: "Failed to find matches", error: error.message });
    }
};

// 📌 Match with a partner
export const matchPartner = async (req, res) => {
    try {
        const { partnerId } = req.params;
        const myPrefs = await StudyPartner.findOne({ user: req.user._id });
        const partner = await StudyPartner.findById(partnerId);

        if (!myPrefs || !partner) return res.status(404).json({ message: "Study partner not found" });

        myPrefs.matchedPartner = partner.user;
        myPrefs.matchStatus = "matched";
        partner.matchedPartner = myPrefs.user;
        partner.matchStatus = "matched";

        await myPrefs.save();
        await partner.save();

        res.status(200).json({ message: "You are now matched with a study partner!" });
    } catch (error) {
        res.status(500).json({ message: "Failed to match partner", error: error.message });
    }
};

// 📌 Unmatch a partner
export const unmatchPartner = async (req, res) => {
    try {
        const myPrefs = await StudyPartner.findOne({ user: req.user._id });
        if (!myPrefs || !myPrefs.matchedPartner) {
            return res.status(400).json({ message: "You are not matched with any partner" });
        }

        // Unmatch both users
        const partner = await StudyPartner.findOne({ user: myPrefs.matchedPartner });
        if (partner) {
            partner.matchedPartner = null;
            partner.matchStatus = "none";
            await partner.save();
        }

        myPrefs.matchedPartner = null;
        myPrefs.matchStatus = "none";
        await myPrefs.save();

        res.status(200).json({ message: "Successfully unmatched your partner" });
    } catch (error) {
        res.status(500).json({ message: "Failed to unmatch partner", error: error.message });
    }
};
