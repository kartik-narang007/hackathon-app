const User = require("../models/User.model");

exports.userLogin = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email });

        if (!user) {
            return res.status(400).json({ message: "User not found" });
        }

        const isMatch = user.password === password;

        if (!isMatch) {
            return res.status(400).json({ message: "Wrong Password" });
        }

        res.status(200).json({ message: "Login Successful", user: user });
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: `Internal server error ${err}` });
    }
};

exports.userSignUp = async (req, res) => {

    console.log("entered in controller");

    try {
        const { firstName, lastName, email, password, role } = req.body;

        const user = await User.findOne({ email });

        if (user) {
            return res.status(400).json({ message: "User already exists" });
        }

        const newUser = new User({
            firstName,
            lastName,
            email,
            password,
            role,
        });

        const savedUser = await newUser.save();

        res.status(201).json({
            message: "User created successfully",
            user: savedUser,
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: `Internal server error ${err}` });
    }
};
