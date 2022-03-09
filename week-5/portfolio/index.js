const http = require("http");
const path = require("path");
const projectDirectory = path.join(__dirname, "projects");
const fs = require("fs");
const homePage = require("./homepage.js");

const contentType = {
    ".html": "text/html",
    ".css": "text/css",
    ".js": "text/javascript",
    ".json": "application/json",
    ".gif": "image/gif",
    ".jpg": "image/jpeg",
    ".png": "image/png",
    ".svg": "image/svg+xml",
};

http.createServer((req, res) => {
    req.on("error", (err) => console.log(err));
    res.on("error", (err) => console.log(err));

    //________________________non GET request________________________

    if (req.method !== "GET") {
        // set status code
        res.statusCode = 405;
        return;
    }

    //___________________________HOME PAGE___________________________

    if (req.url.endsWith("/")) {
        // Ensure req.url ends with a `/` else redirect
        res.setHeader("Location", req.url + "/");
        res.end();
    }
    if (req.url === "/") {
        return res.end(homePage);
    }

    //_________________Construct the requested path_________________

    const requestedEntity = path.join(projectDirectory, req.url);

    //_______________ Check Entity Exists _______________

    fs.stat(requestedEntity, (err, metaData) => {
        if (err) {
            console.log("error", err);
            res.statusCode = 404;
            res.end();
            return;
        }

        const extension = path.extname(requestedEntity);

        if (metaData.isFile()) {
            //setheader
            for (const contType in contentType) {
                if (contType == extension) {
                    res.setHeader("Content-Type", contentType[contType]);
                    console.log(
                        "contentType ---->",
                        contType,
                        "extension",
                        extension
                    );
                }
            }

            // read file
            const readStream = fs.createReadStream(requestedEntity);
            readStream.on("error", (error) => console.log(error));
            readStream.pipe(res);

            return res.end();
        }
    });

    //_______________!!!!!🚫 Directory Traversal Attack 🚫!!!!!!_______________

    if (!requestedEntity.startsWith(projectDirectory)) {
        res.statusCode = 403;
        return res.end();
    }
}).listen(8080, () => console.log("Listening http://localhost:8080"));
//inlay hints
