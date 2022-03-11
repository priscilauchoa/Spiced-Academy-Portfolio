const express = require("express");
const app = express();
const projects = require("./projects.json");
//SETUP for express-handlebars

const { engine } = require("express-handlebars");

app.engine("handlebars", engine());
app.set("view engine", "handlebars");

app.use(express.static("./projects"));
app.use(express.static("./public"));

app.get("/", (req, res) => {
    res.render("welcome", {
        projects,
        title: "HB Portfolio",
    });
});

app.get("/about", (req, res) => {
    res.render("about", {
        layout: "main",
        emojis: ["🐈", "🌳", "🌞", "🌈"],
        title: "about",
    });
});

app.listen(8080, console.log("Listening 8080 🚪👂"));
