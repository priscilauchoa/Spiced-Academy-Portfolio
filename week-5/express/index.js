const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const { get } = require("http");

// ------MIDDLEWARE function
//midleware = things that happen in the midlle the execution

// app.use(function (req, res, next) {
//     // console.log(`middleware says url is ${req.url}`);
//     next();
// });

app.use(
    express.urlencoded({
        extended: false,
    })
);

app.use(cookieParser());

app.use(function (req, res, next) {
    if (!req.cookies.check && req.url != "/cookie") {
        res.redirect("/cookie");
    } else {
        next();
    }
});

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
    // console.log("body--->", req.body);
});

app.post("/cookie", function (req, res) {
    // res.send("Enviado");
    if (req.body.check == "on") {
        res.cookie("check", true, {});

        res.send(`<h1>Projects</h1>`);
    } else {
        res.cookie("check", "", {});

        res.send(`<h1>You can not see the projects</h1>`);
    }
});

app.listen(8080, () => {
    console.log("I am listening 8080 port 🚪");
});
