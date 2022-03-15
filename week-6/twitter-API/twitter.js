const https = require("https");
const { key, secret } = require("./secrets.json");

// console.log(https, key, secret);

const authorization = `Basic ${Buffer.from(key + ":" + secret).toString(
    "base64"
)}`;
console.log(authorization);

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
            }
            callback(null, "getToken status code 200");
        }
    );
    req.end("grant_type=client_credentials");
};

exports.getTweets = function (token, callback) {
    const req = https.request(
        {
            method: "GET",
            headers: {
                authorization: `Bearer ${token}`,
            },
            host: "api.twitter.com",
            path: "/1.1/statuses/user_timeline.json?tweet_mode=extended&screen_name=theonion",
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
                        callback(null, body);
                        
                    } catch (err) {
                        callback(err);
                    }
                });
            }
            callback(null, "getTweets status code 200");
        }
    );
    req.end("full_text");
};
exports.formatTweets = function () {};

// const req = https.request(
//     {
//         method: "GET",
//         host: "spicedify.herokuapp.com",
//         path: "/spotify?q=ladygaga&type=artist&limit=1",
//     },
//     (res) => {
//         console.log(res.statusCode);
//         console.log(res.headers);
//         let body = "";
//         res.on("data", (chunk) => (body += chunk))
//             .on("end", () => console.log(body))
//             .on("error", (err) => console.log(err));
//     }
// );

// a post request é pra enviar as credentials

// req.end();
