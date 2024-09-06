const { default: mongoose } = require("mongoose");

const hackathonSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    startDate: {
        type: Date,
        required: true,
    },
    endDate: {
        type: Date,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    level: {
        type: String,
        enum: ["Easy", "Medium", "Hard"],
        required: true,
    },
});


const Hackathon = mongoose.model("Hackathon", hackathonSchema);

module.exports = Hackathon;