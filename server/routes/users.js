const express = require("express");
const User = require("../models/Users");

const router = express.Router();

// Register
router.post("/register", (req, res) => {
    // res.send("Register Route");
    // console.log(req.body);
    const { name, email, password } = req.body;
    User.findOne({ email: email }, (err, user) => {
        if (user) {
            res.send({ message: "User Already Exists" });
        } else {
            const user = new User({
                name,
                email,
                password,
            });
            user.save((err) => {
                if (err) {
                    res.send(err);
                } else {
                    res.send({ message: "Successfully Registered" });
                }
            });
        }
    });
});

// Login
router.post("/login", (req, res) => {
    // res.send("Login Route");
    const { email, password } = req.body;
    User.findOne({ email: email }, (err, user) => {
        if (user) {
            if (password === user.password) {
                res.send({ message: "Login Successfull", user: user });
            } else {
                res.send({ message: "Password didn't Match" });
            }
        } else {
            res.send({ message: "User Not Exits" });
        }
    });
});

// add expense
router.post("/addExpense", (req, res) => {
    // res.send("Register Route");
    // console.log(req.body);
    const { _id, name, type, amount } = req.body;
    const newExpense = {
        name,
        type,
        amount,
    };
    User.findOneAndUpdate({ _id: _id }, { $push: { expense: newExpense } }, (err) => {
        // User.findOneAndUpdate({ _id: _id }, { $last: { expense } });
        // log({$last:"expense"});
        if (err) {
            res.send({ message: "Error" });
        } else {
            res.send({ message: "Success" });
        }
    });
});

// fetchExpense
router.post("/fetchExpense", (req, res) => {
    // res.send("Login Route");
    const { _id } = req.body;
    User.findOne({ _id: _id }, (err, user) => {
        if (user) {
            const expenses = {
                budget: user.budget,
                expenses: user.expense,
            };
            res.send({ message: "Successfully Fetched", expenses: expenses });
        } else {
            res.send({ message: "User Not Exits" });
        }
    });
});

// updateBudget
router.post("/updateBudget", (req, res) => {
    // res.send("Login Route");
    const { _id, budget} = req.body;
    User.updateOne({ _id: _id }, {budget: budget}, (err) => {
        if (!err) {
            
            res.send({ message: "Successfully Updated" });
        } else {
            res.send({ message: "User Not Exits" });
        }
    });
});

module.exports = router;
