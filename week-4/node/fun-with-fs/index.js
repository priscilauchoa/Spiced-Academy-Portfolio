const fs = require("fs");

//SYNC
//readdir
// const files = fs.readdirSync(__dirname); //caminho para fun-with-fs

// const files = fs.readdirSync(`${__dirname}/files`, {
//     withFileTypes: true, //use isso pra ter como retorno um objeto ao inves de string
//     //caminho para files
// });
// console.log(files);

// files.forEach((item) => {
//     console.log(item.name, item.isDirectory(), item.isFile());
// });

//__________________________________

//ASSYNC
//readdir

// fs.readdir(
//     `${__dirname}/files`,
//     {
//         withFileTypes: true,
//     },

//     (err, files) => {
//         if (err) { //err é um erro padrao do nodejs
//             console.log("ERROR--->", err); //TRATAMENTO EM CASO DE NAO ACHAR O ARQUIVO.
//         } else {
//             console.log(files);
// files.forEach((item) => {
//     console.log(item.name, item.isDirectory(), item.isFile());
// });
//         }
//     }
// );

// console.log("waiting readdir");

//SYNC STATS
const stats = fs.statSync(__filename);

// console.log(stats);

fs.stat(__filename, (err, stats) => {
    if (err) {
        console.log("error");
    } else {
        console.log("---->", stats, stats.isFile());
    }
});

logSizes(fs.readdirSync(__dirname))
;

//para cada file chamar .stat e passar o path to the file
//size property 
//console o path + size
