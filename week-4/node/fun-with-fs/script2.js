const fs = require("fs");



// try {
//     const obj = mapSizes(`${__dirname}/files`);
//     // pass obj JSON.stringify and pass the result to writeFileSync
// } catch (err) {
//     console.log(err);
// }

function mapSizes(path) {
    // create an object
    const folderObj = {};
    const items = readdirSync(path, {
        withFileTypes: true,
    });
    items.forEach(function (item) {
        // add a property to the object for each item
        if (item.isFile()) {
            // add a property to the folderObj whose value is the size you get from calling statSync
        } else {
            // add a property to the folderObj whose value is the object you get from calling mapSizes again
        }
    });
    return folderObj;
}

let objFromNotes = {
    "README.md": 12,
    part1: {
        a: {
            images: {
                "cats.png": 573350,
                "kitty1_150x150.jpg": 9279,
                "kitty2_150x150.jpg": 14355,
                "kitty3_150x150.jpg": 13387,
            },
            "index.html": 241,
            "stylesheet.css": 40,
        },
        b: {
            images: {
                "boxes.png": 156804,
            },
            "index.html": 243,
            "stylesheet.css": 39,
        },
    },
    part2: {
        "index.html": 160,
        "script.js": 1998,
    },
};

fs.writeFileSync("filemap.json", JSON.stringify(objFromNotes, null, 4));

// let items = [
//     {name: 'readme.md'},
//     {name: 'part1'}
// ];
// const myObj = {};
// items.forEach(function(item) {
//     myObj[item.name] = 'whatever';
// });

