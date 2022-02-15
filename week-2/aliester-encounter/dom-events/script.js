var button = document.getElementById("first-button");
var inputField = document.querySelector("input");
var newDiv = document.getElementsByClassName("new-div")[0]; //return a array-like object, so you can call the exactly position taht you want
// var entirePage = document.getElementsByTagName("body")[0];
var toSpiced = document.querySelector("a");
// console.log("button: ", button);
// console.log("page: ", entirePage);
toSpiced.addEventListener("click", function () {
    event.preventDefault();
    console.log("no, sorry, you have to stay here");
});

newDiv.addEventListener("click", function () {
    newDiv.style.backgroundColor = "blue";
});

button.addEventListener("click", function () {
    console.log("button clicked");
    event.stopImmediatePropagation(); // não propaga o evento, para no button, caso contrario o newDiv tbm iria mudar pq o botao estao dentro dele
    document.body.style.backgroundColor = "green"; // body é um filho direto do document então não precisa chamar ele antes de aplicar algo
});

document.addEventListener("keydown", function (event) {
    console.log("key pressed");
    document.body.style.backgroundColor = "red";
    // console.log(event);
    if (event.keyCode === 80) {
        // document.body.style.backgroundColor = "pink";
        console.log("P pressed 👏");
    }
});

inputField.addEventListener("input", function (e) {
    console.log("input is happening");
    e.target.value = "Olá 🐶";
});
