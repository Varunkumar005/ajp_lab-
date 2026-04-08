const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const User = require("./User");

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/testDB")
    .then(() => console.log("MongoDB connected"));

app.post("/register", async(req ,res) => {
    const user = new User(req.body);
    await user.save();
    res.send("Registered Successfully");
});

app.post("/login", async(req ,res) => {
    const user = await User.findOne({
        email: req.body.email,
        password: req.body.password
    });

    if(user){
        res.send("Login Success");
    }else{
        res.send("Invalid Credentials");
    }
});

app.listen(5000, () => console.log("Server running"));
