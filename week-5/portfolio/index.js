const http = require("http");
// const projectDirectory = __dirname + "/projects/";
const path = require("path");
const projectDirectory = path.join(__dirname, "projects");
const fs = require("fs");
const homePage = require("./homepage.js");

console.log(projectDirectory);

// req.url.replace("..", "");

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
    // res.end("Hello Truffle");

    //________________________non GET request________________________

    if (req.method !== "GET") {
        // set status code
        res.statusCode = 405;
        return;
    }

    //___________________________HOME PAGE___________________________
    if (req.url === "/") {
        res.end(homePage);
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
        for (const contType in contentType) {
            if (contType == extension) {
                res.setHeader("Content-Type", contentType[contType]);
                // console.log(
                //     "contentType ---->",
                //     contType,
                //     "extension",
                //     extension
                // );
            }
        }

        if (metaData.isFile()) {
            // read file
        } else {
            // send index.html inside of the directory
        }
        fs.createReadStream(requestedEntity)
            .on("error", (error) => console.log(error))
            .pipe(res);
    });

    //_______________!!!!!🚫 Directory Traversal Attack 🚫!!!!!!_______________

    if (!requestedEntity.startsWith(projectDirectory)) {
        res.statusCode = 403;
        return res.end();
    }

    // fs.ReadStream.on("data", (chunk), => console.log("chunk", chunk))
    // fs.readFile(requestedEntity, (err, content)=>{
    //     if(err){
    //         console.log(err);
    //         return;
    //     }
    //     res.end(content);
    // })
}).listen(8080, () => console.log("Listening 8080...\n http://localhost:8080"));
//inlay hints
