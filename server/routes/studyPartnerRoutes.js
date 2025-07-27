import express from "express";
import {
    upsertStudyPartner,
    getMyStudyPartner,
    findMatches,
    matchPartner,
    unmatchPartner,
} from "../controllers/studyPartnerController.js";
import { protect } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/", protect, upsertStudyPartner);        // Create or update study partner preferences
router.get("/", protect, getMyStudyPartner);          // Get my partner preferences
router.get("/matches", protect, findMatches);         // Find potential matches
router.post("/match/:partnerId", protect, matchPartner); // Match with a partner
router.post("/unmatch", protect, unmatchPartner);     // Unmatch current partner

export default router;
