const http = require("http"); // Require the http module✅

const server = http.createServer(function (request, response) {
    //Use the createServer method of that module to create your server. You can pass a request listener (a function that handles requests) to that function.✅
    console.log(
        "request received!", //For each request, log the method, url, and request headers to the console.✅

        request.method, //The request object will have method, url, and headers properties.✅
        request.url,
        request.headers
    );
    request.on("error", function (err) {
        console.log(err);
    });
    response.on("error", function (err) {
        //You should listen for 'error' events on both because if either emits an 'error' event and it is not handled, the process will end. It is ok if the error handlers simply log the error to the console.✅

        console.log(err);
    });
    if (request.method == "GET" || request.method == "HEAD") {
        response.statusCode = 200;
        response.setHeader("content-type", "text/html");
        // response.write(
        //     `<!doctype html>
        //     <title>my page!</title>
        //     <h1>Hello, World!</h1>`
        // );
        if (request.method == "GET") {
            response.end(
                //If the request method is GET, send the following HTML as the body of the response:✅
                `<!doctype html>
            <html>
            <title>Hello World!</title>
            <p>Hello World!</p>
            </html>`
            );
        }

        // if (request.url == '/funky/chicken') {

        // } else if (request.url == '/disco/duck') {

        // } else {

        // }
    } else if (request.method == "POST") {
        //To get the request body, you should create a variable for it and concatenate the chunks that come with the 'data' events emitted by the request object. When the 'end' event is emitted, you have the body in its entirety.✅
        let body = "";
        request.on("data", function (chunk) {
            body += chunk;
        });
        request.on("end", function () {
            console.log(body);
        });

        response.statusCode = 302;
        response.setHeader("content-type", "text/html/");
        response.end();
        //If the request method is POST, log the request body to the console. Do not write a body to the response. Instead, set the 'Location' header of the response to '/' and the status code to 302. This will cause a redirect.✅
        // `<!doctype html>
        // <title>thanks</title>
        // <h1>thanks</h1>
        // </form>`
        // ();
    } else {
        response.statusCode = 405;
        // console.log(" NOT ALLOWED", response.statusCode);
    }
});

server.listen(8080, () => console.log(`I'm listening.`)); //Call the listen method on your server to start listening for requests. Pass it the port you would like to listen on (use 8080).✅
