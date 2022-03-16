const express = require("express");
const app = express();
let { getToken, getTweets, formatTweets } = require("./twitter.js");
let { promisify } = require("util");
app.use(express.static("./public"));

getToken = promisify(getToken);

getTweets = promisify(getTweets);

app.get("/headlines.json", function (req, res) {
    getToken()
        .then((token) => {
            // console.log("token: ", token);
            return getTweets(token);
        })
        .then((tweets) => {
            // console.log("tweets in tweets: ", tweets);
            res.json(formatTweets(tweets));
        })
        .catch((err) => {
            console.log(err);
        });
});

app.listen(8080, () => console.log("listening 8080"));
