const express = require("express");
const app = express();
const { getToken, getTweets, formatTweets } = require("./twitter.js");

app.use(express.static("./public"));

app.get("/headlines.json", function (req, res) {
    getToken(function (err, token) {
        if (err) {
            //error
            res.sendStatus(500);
        } else {
            console.log("token----> ", token);

            //i have token
            getTweets(token, (err, tweets) => {
                if (err) {
                    res.sendStatus(500);
                } else {
                    console.log("tweets--->", tweets);
                }
                // formatTweets();
                // res.json(tweets);
            });
        }
    });
});

app.listen(8080, () => console.log("listening 8080"));
