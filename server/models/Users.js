const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    date: { type: Date, default: Date.now },
    budget: { type: Number, default: 0 },
    expense: [
        {
            name: { type: String },
            type: { type: String },
            amount: { type: Number },
        },
    ],
});

const User = new mongoose.model("user", userSchema);

module.exports = User;
