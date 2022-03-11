const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const basicAuth = require("basic-auth");

app.use(
    express.urlencoded({
        extended: false,
    })
);

app.use(cookieParser());

app.use(function (req, res, next) {
    if (!req.cookies.check && req.url != "/cookie") {
        // cookies have all cookies
        res.cookie("curentUrl", req.url); // create a coockie to save my current URL
        res.redirect("/cookie");
    } else {
        next();
    }
});

const auth = function (req, res, next) {
    const creds = basicAuth(req);
    console.log("req --->>", creds);
    if (!creds || creds.name != "pri" || creds.pass != "flores") {
        res.setHeader(
            "WWW-Authenticate",
            'Basic realm="Enter your credentials to see this stuff."'
        );
        res.sendStatus(401);
    } else {
        next();
    }
};

app.use("/connect4", auth);

app.use(express.static("./public"));

app.get("/cookie", function (req, res) {
    res.send(
        `<!doctype html>
          <h1>Do you accept the users policy?</h1>
        <form method="post">
            <label for="check">Yes</label>
            <input name="check" type="checkbox" />

            <button>submit</button>
        </form>`
    );
});

app.post("/cookie", function (req, res) {
    if (req.body.check == "on") {
        res.cookie("check", true, {});
        // res.send(`<h1>Projects</h1>`);
        res.redirect(req.cookies.curentUrl);
    } else {
        res.cookie("check", false, {});

        res.send(`<h1>You can not see the projects</h1>`);
    }
});

app.listen(8080, () => {
    console.log("I am listening 8080 port 🚪");
});
