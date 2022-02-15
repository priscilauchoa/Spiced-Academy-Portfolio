var square = document.getElementById("square");
var smallSquare = document.getElementById("small-square");

function randomColor() {
    var a = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    var c = Math.floor(Math.random() * 256);
    return [a, b, c];
}

var colors;

square.addEventListener("click", function () {
    console.log(" big");
    colors = randomColor();
    console.log("aqui", colors);
    square.style.backgroundColor =
        "rgb(" + colors[0] + "," + colors[1] + "," + colors[2] + ")";
});
smallSquare.addEventListener("click", function () {
    event.stopPropagation();
    colors = randomColor();
    console.log("small");
    smallSquare.style.backgroundColor =
        "rgb(" + colors[0] + "," + colors[1] + "," + colors[2] + ")";
});
