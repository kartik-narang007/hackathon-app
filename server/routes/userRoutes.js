const express = require("express");
const {
    createHackathon,
    updateHackathon,
    deleteHackathon,
    getHackathons,
} = require("../controllers/userController");

const router = express.Router();

router.get('/get-hackathons', getHackathons)
router.post("/create-hackathon", createHackathon);
router.put("/update-hackathon/:id", updateHackathon);
router.delete("/delete-hackathon/:id", deleteHackathon);

module.exports = router;
