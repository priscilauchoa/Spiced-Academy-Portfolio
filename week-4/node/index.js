const readline = require("readline");
const { story } = require("./story1");
// const story = require("./story1").story;
const chalk = require("chalk");

// console.log("story", story);

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function ask(storyItem) {
    // console.log(storyItem.q);
    rl.question(chalk.green(storyItem.q), function (answer) {
        //FIRST QUESTION
        if (storyItem.answers[answer]) {
            if (typeof storyItem.answers[answer] == "object") {
                // game continues✅
                ask(storyItem.answers[answer]);
            } else {
                console.log(storyItem.answers[answer]);
                rl.close();
            }
        } else {
            console.log(chalk.red("INVALID ANSWER, PLEASE TRY AGAIN"));
            ask(storyItem);
        }
    });
}

ask(story);
