const cluster = require("cluster");
const os = require("os");

//tecnique optmize computer process

console.log();
cluster.setupMaster({
    exec: "index.js",
});

for (let i = 0; i < os.cpus().length; i++) {
    // run several times take all advantage from server
    cluster.fork(); // start the server  serveral times (16 in this case)
}

cluster.on("exit", (worker) => {
    console.log("WORKER DIED", worker.process.pid);//se o server cair roda de novo
    cluster.fork();
});
