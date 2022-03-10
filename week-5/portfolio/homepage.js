const fs = require("fs");

function generateHomePage() {
    let listOfProjects = fs.readdirSync(__dirname + "/projects", {
        withFileTypes: true,
    });

    let page = `<head><link rel="stylesheet" href="./styles.css"></head><body><div><h1>Projects</h1></div><section>`;

    listOfProjects.forEach((file) => {
        if (file.name !== "styles.css") {
            page += `<li><a href="${file.name}/index.html">${file.name}</a></li>`;
        }
    });
    page += `</section></body>`;

    return page;
}

module.exports.generateHomePage = generateHomePage;
