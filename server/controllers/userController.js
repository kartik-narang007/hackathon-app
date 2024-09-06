const Hackathon = require("../models/Hackathon.model");


exports.getHackathons = async (req, res) => {
    try {
        const hackathons = await Hackathon.find();

        if (!hackathons || hackathons.length === 0) {
            return res.status(200).json({
                message: "No Hackathons Found",
            });
        }

        res.status(200).json({
            hackathons: hackathons,
        });
    } catch (err) {
        return res.status(500).json({ message: `Internal server err ${err}` });
    }
};

exports.createHackathon = async (req, res) => {
    try {
        const { name, startDate, endDate, description, image, level } =
            req.body;

        const hackathon = new Hackathon({
            name,
            startDate,
            endDate,
            description,
            image,
            level,
        });

        const savedHackathon = await hackathon.save();

        res.status(200).json({
            message: "Hackathon Created Successfully",
            hackathon: savedHackathon,
        });
    } catch (err) {
        res.status(500).json({ message: `Internal server error ${err}` });
    }
};

exports.updateHackathon = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedData = req.body;

        const updatedHackathon = await Hackathon.findByIdAndUpdate(
            id,
            updatedData,
            { new: true }
        );

        if (!updatedHackathon) {
            return res.status(404).json({ message: "Hackathon not found" });
        }

        return res
            .status(200)
            .status({ message: "Hackathon Updated Successfully" });
    } catch (err) {
        res.status(400).json({ message: `Internal server err ${err}` });
    }
};

exports.deleteHackathon = async (req, res) => {
    try {
        const { id } = req.params;
        const hackathon = await Hackathon.findByIdAndDelete(id);

        if (!hackathon) {
            return res.status(404).json({ message: "Hackathon not found" });
        }
        res.status(200).json({ message: "Hackathon Deleted Successfully" });
    } catch (err) {
        return res.status(500).json(`Internal server error ${err}`);
    }
};
