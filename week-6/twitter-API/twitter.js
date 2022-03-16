const https = require("https");
const { key, secret } = require("./secrets.json");

// console.log(https, key, secret);

const authorization = `Basic ${Buffer.from(key + ":" + secret).toString(
    "base64"
)}`;
// console.log(authorization);

exports.getToken = function (callback) {
    const req = https.request(
        {
            method: "post",
            host: "api.twitter.com",
            path: "/oauth2/token",
            headers: {
                authorization,
                "content-type":
                    "application/x-www-form-urlencoded;charset=UTF-8",
            },
        },
        function (res) {
            if (res.statusCode !== 200) {
                return callback(res.statusCode);
            } else {
                let body = "";
                res.on("data", (chunk) => (body += chunk));
                res.on("end", () => {
                    try {
                        body = JSON.parse(body);
                        callback(null, body.access_token);
                    } catch (err) {
                        callback(err);
                    }
                });
                res.on("error", callback);
            }
        }
    );
    req.end("grant_type=client_credentials");
};

exports.getTweets = function (token, nameUser, callback) {
    const req = https.request(
        {
            method: "GET",
            headers: {
                authorization: `Bearer ${token}`,
            },
            host: "api.twitter.com",
            path: `/1.1/statuses/user_timeline.json?tweet_mode=extended&screen_name=${nameUser}`,
        },
        function (res) {
            if (res.statusCode !== 200) {
                return res.statusCode;
            } else {
                let body = "";
                res.on("data", (chunk) => (body += chunk));
                res.on("end", () => {
                    try {
                        body = JSON.parse(body);
                        // console.log("body tweets", body.length);
                        callback(null, body);
                    } catch (err) {
                        callback(err);
                    }
                });
                res.on("error", callback);
            }
        }
    );
    req.end();
};
exports.formatTweets = function (tweets) {
    const newTweets = tweets.flat();
    // console.log(newTweets);

    const listTweets = [];
    for (let i = 0; i < newTweets.length; i++) {
        let text = newTweets[i].full_text;
        let user = newTweets[i].user.name;
        let date = newTweets[i].created_at;

        const index = text.indexOf("https");
        const newText = text.slice(0, index);
        if (newTweets[i].entities.urls.length == 1) {
            let urls = newTweets[i].entities.urls[0].url;
            listTweets.push({
                Text: newText,
                Url: urls,
                User: user,
                Date: date,
            });
        }
        listTweets.sort((a, b) => {
            return new Date(a.created_at) - new Date(b.created_at);
        });
    }
    return listTweets;
};
