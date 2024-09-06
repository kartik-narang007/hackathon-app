const express = require("express");
const { userLogin, userSignUp } = require("../controllers/authController");
const router = express.Router();

router.post("/login", userLogin);
router.post("/signup", userSignUp);

module.exports = router;
