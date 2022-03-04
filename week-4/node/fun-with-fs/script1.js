const fs = require("fs");
const { stat } = require("fs");
// console.log("----->", stat);
function logSizes(path) {
    fs.readdir(
        path,
        {
            withFileTypes: true,
        },
        function (err, items) {
            if (err) {
                console.log(err);
                return;
            }
            items.forEach((item) => {
                let nextPath = `${path}/${item.name}`;
                if (item.isFile()) {
                    // console.log(nextPath);
                    stat(nextPath, (err, stat) => {
                        if (err) {
                            console.log("ERROR");
                        } else {
                            console.log(`${nextPath}: ${stat.size}`);
                        }
                    });
                } else {
                    logSizes(nextPath);
                }
            });
        }
    );
}
logSizes(`${__dirname}/files`);
