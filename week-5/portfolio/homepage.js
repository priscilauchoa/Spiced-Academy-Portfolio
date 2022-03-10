const fs = require("fs");

function generateHomePage() {
    let listOfProjects = fs.readdirSync(__dirname + "/projects", {
        withFileTypes: true,
    });

    let page = `<h1>Projects</h1><ul>`;

    listOfProjects.forEach((file) => {
        console.log(file.name);
        page += `<a href="${file.name}/index.html"</li>${file.name}</li></br></br></ul>`;
    });
    return page;
}

module.exports.generateHomePage = generateHomePage;
