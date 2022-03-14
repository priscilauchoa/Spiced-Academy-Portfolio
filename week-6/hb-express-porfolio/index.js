const express = require("express");
const app = express();
const projects = require("./projects.json");

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

app.get("/projects/:project", (req, res) => {
    const project = req.params.project;
    // console.log(project);

    const selectedProject = projects.find((item) => item.directory == project);
    // console.log(selectedProject);

    // if (!selectedProject) {
    //     return res.sendStatus(404);
    // }
    res.render("description", {
        layout: "main",
        projects,
        selectedProject,
        title: "description",
        p: true,
        className: "description-page",
    });
});

app.listen(8080, console.log("Listening 8080 🚪👂"));
