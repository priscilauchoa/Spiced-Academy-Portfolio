const story = {
    q: "Welcome to The 🧟‍♂️ Zombieland 🧟‍♀️ game! 🎮 Would you like to play?",
    answers: {
        yes: {
            q: "It's 2060 and we have a Zombie apocalypse 🧟‍♀️. You are in a house and you need to go to find food. You have 2 doors 🚪 and you need to open one to find a safe exit! Which door do you open to the left or to the right?",
            answers: {
                left: {
                    q: "Good Job, right door. Now you find a guy whose has food and if you answer correctly he will give the food to you. what color is Maria's red shirt 👭?",
                    answers: {
                        red: "🌮🍕RIGHT ANSWER🌭🍩!",
                    },
                },
                right: "🧟‍♀️🧟‍♀️🧟‍♀️🧟‍♀️🧟‍♀️🧟Wrong choice, you are dead 🧟‍♀️🧟‍♀️🧟‍♀️🧟‍♀️🧟‍♀️🧟 GAME OVER",
            },
        },
        no: "Alright then. Enjoy your day!",
    },
};

exports.story = story;
