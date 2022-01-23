const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const users = require("./routes/users");

require("dotenv").config();

const PORT = process.env.PORT;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

mongoose
    .connect(process.env.MONGODB_URI, {
        useNewUrlParser: true,
        // useCreateIndex: true,
        useUnifiedTopology: true,
    })
    .then(
        () => {
            console.log("Database is Connected");
        },
        (err) => {
            console.error("Can't connect to database:" + err);
        }
    );

app.use("/api/user", users);
app.get("/", (req, res) => {
    res.send("hello");
});

app.listen(PORT, () => {
    console.log(`Server is running at: http://localhost:${PORT}/`);
});
