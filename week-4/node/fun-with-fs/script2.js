const fs = require("fs");

try {
    const obj = mapSizes(`${__dirname}/files`);

    fs.writeFileSync("newFile.json", JSON.stringify(obj, null, 4));
} catch (err) {
    console.log(err);
}

function mapSizes(path) {
    const folderObj = {};
    const items = fs.readdirSync(path, {
        withFileTypes: true,
    });

    items.forEach(function (item) {
        // add a property to the object for each item
        let nextPath = `${path}/${item.name}`;
        let stats = fs.statSync(nextPath);
        let itemName = `${item.name}`;

        if (item.isFile()) {
            folderObj[itemName] = stats.size;
            console.log(folderObj);
        } else {
            folderObj[itemName] = mapSizes(nextPath);
        }
    });
    return folderObj;
}
