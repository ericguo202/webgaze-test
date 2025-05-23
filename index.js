const express = require("express");
const app = express();
const path = require("path");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views")); // __dirname is directory name where index.js located

app.get("/", (req, res) => {
    res.render("home");
})

app.listen(3000, () => {
    console.log("LISTENING ON PORT 3000");
})