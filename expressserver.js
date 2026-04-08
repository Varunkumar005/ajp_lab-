const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send("Hello from Express!");
});

app.get("/about", (req, res) => {
    res.send("This is About Page!");
});

app.get("/contact", (req, res) => {
    res.send("Contact Page");
});

app.listen(2000, () => {
    console.log("Server running on http://localhost:2000");
});