import express from "express";
import {
    joinWaitlist,
    getWaitlist,
    removeFromWaitlist,
} from "../controllers/waitlistController.js";
// Optionally, add an admin middleware later

const router = express.Router();

router.post("/join", joinWaitlist);       // Public - join waitlist
router.get("/", getWaitlist);             // Admin - view all waitlist entries (placeholder)
router.delete("/:id", removeFromWaitlist);// Admin - remove an entry (placeholder)

export default router;
