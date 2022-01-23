const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    date: { type: Date, default: Date.now },
    expense: [
        {
            name: { type: String },
            type: { type: String },
            amount: { type: Number },
        },
    ],
});

const User = new mongoose.model("user", userSchema);

// const userSchema = new mongoose.Schema({
//     name: { String, required: true },
//     email: { String, required: true },
//     password: { String, required: true },
// });

// const User = new mongoose.model("user", userSchema);

module.exports = User;
