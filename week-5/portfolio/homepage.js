const { fs } = require("fs");

function generateHomePage() {
    const homePageHtml = "<head><link><link></head>";
    fs.readdir();

    return homePageHtml;
}

module.exports.generateHomePage = generateHomePage;
