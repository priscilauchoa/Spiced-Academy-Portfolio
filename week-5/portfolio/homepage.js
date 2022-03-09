const { fs } = require("fs");

function generateHomePage() {
    // 1) Pick up the content of your projects directory with fs.readdirSync() (start with         the sync version!)
    // 2) Loop over the array of project directories and construct a list
    // of html tags representing them

    let listOfProjects = fs.readdirSync(__dirname + "/projects", {
        withFileTypes: true,
    });

    let page = `<h1>Projects</h1><ul>`;

    listOfProjects.forEach((file) => {
        page += `</li>${file.name}</li></ul>`;
    });
    return page;
}

module.exports.generateHomePage = generateHomePage;
