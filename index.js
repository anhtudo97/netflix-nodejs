const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();
app.use(cors());
app.use(express.json());

mongoose
    .connect(process.env.MONGODB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
    })
    .then(() => console.log("DB Connection Successfully!"))
    .catch((err) => {
        console.error(err);
    });

app.get("/", (req, res) => {
    res.send("tuanh");
});

app.listen(8080, () => {
    console.log("Backend is listening on port 8080");
});