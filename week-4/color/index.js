// let chalk = require("chalk");

// // console.log(chalk);

// // console.log(chalk.cyan("priscila"));
// let qs = require("querystring");

// const http = require("http");
// const server = http.createServer((request, response) => {
//     request.on("error", (error) => console.log("Error", error));
//     response.on("error", (error) => console.log("Error", error));
//     if (request.method == "GET") {
//         response.write(`<!doctype html>
//             <html>
//             <title>Colors</title>
//             <form method="POST">
//             <input type="text" name="text">
//             <select name="color">
//                 <option value="red">red</option>
//                 <option value="blue">blue</option>
//                 <option value="green">green</option>
//                 <option value="yellow">yellow</option>
//                 <option value="gray">gray</option>
//                 <option value="magenta">magenta</option>
//                 <option value="cyan">cyan</option>
//             </select>
//             <button type="submit">Go</button>
//             </form>
//             </html>`);
//         response.end();
//     }
//     if (request.method == "POST") {
//         console.log("");
//         let body = "";
//         request.on("data", (chunk) => {
//             body += chunk;
//         });

//         request.on("end", () => {
//             let parsedBody = qs.parse(body);
//             console.log("parsedBody", parsedBody);
//             // response.end(`chalk.blue("you posted")`);
//             response.end(`${chalk.cyanBright(parsedBody)}`);
//         });
//     }
// });

// server.listen(8080, () => {
//     console.log("8080 running");
// });

const chalk = require("chalk");
const http = require("http");
const qs = require("querystring");
// const chalk = require("chalk");

const server = http.createServer((request, response) => {
    request.on("error", (error) => {
        console.log("error in the request: ", error);
    });
    response.on("error", (error) => {
        console.log("error: ", error);
    });

    if (request.method == "GET") {
        //we need to define the statusCode and the set the headers
        response.statusCode = 200;
        response.setHeader("content-type", "text/html");

        response.write(`
        <!doctype html>
            <html>
            <title>Colors</title>
            <form method="POST">
              <input type="text" name="message">
              <select name="color">
                <option value="red">red</option>
                <option value="blue">blue</option>
                <option value="green">green</option>
                <option value="yellow">yellow</option>
                <option value="gray">gray</option>
                <option value="magenta">magenta</option>
                <option value="cyan">cyan</option>
              </select>
              <button type="submit">Go</button>
            </form>
            </html>
           `);

        response.end();
    }

    if (request.method == "POST") {
        let body = "";
        request.on("data", (chunk) => {
            body += chunk;
        });

        request.on("end", () => {
            response.statusCode = 200;
            response.setHeader("content-type", "text/html");
            let parsedBody = qs.parse(body);
            // console.log(colorMessage);

            console.log(chalk[parsedBody.color](parsedBody.message));

            response.write(`
            <!doctype html>
                <html>
                <title>Colors</title>
                <a href='http://localhost:8080/'<h1 style="color: ${parsedBody.color}">${parsedBody.message}</h1>
                </html>
             `);

            response.end();
        });
    }
});

server.listen(8080, () => console.log("Port 8080 is listening"));
