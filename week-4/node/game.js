const readline = require("readline");
const { story } = require("./game");
// const story = require('./story1').story;
// const chalk = require("chalk");

// console.log(chalk.magenta("Count Chalkula"));

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

// function fn() {
//     rl.question("Do you enjoy learning Node.js?", function(answer) {
//         if (answer === "yes") {
//             console.log("great!");
//             rl.close();
//         } else {
//             console.log('WRONG ANSWER');
//         }
//     });
// }

// fn();

//ask(story);

// story.q;
// story["q"]

function ask(storyItem) {
    // console.log(storyItem);
    rl.question(storyItem.q, function (answer) {
        //console.log(`you typed ${answer}`)
        if (storyItem.answers[answer]) {
            //console.log('valid answer');
            if (typeof storyItem.answers[answer] == "object") {
                // game continues
                // call the function again and pass the new story item
            } else {
                console.log(storyItem.answers[answer]);
                rl.close();
            }
        } else {
            //console.log('INVALID');
            // Maybe log a message asking the user to stop being wrong
            // ask the same question again
        }
    });
}
