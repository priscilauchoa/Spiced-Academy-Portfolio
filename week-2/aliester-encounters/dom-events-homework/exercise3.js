var square = document.getElementById("square");

function randomColor() {
    var arr = [];
    var a = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    var c = Math.floor(Math.random() * 256);
    arr.push(a, b, c);
    return arr;
}

console.log(randomColor());

var colors;

square.addEventListener("mousedown", function () {
    colors = randomColor();

    console.log(colors);
    square.style.backgroundColor =
        "rgb(" + colors[0] + "," + colors[1] + "," + colors[2] + ")";
});

square.addEventListener("mouseup", function () {
    colors = randomColor();
    console.log(colors);
    square.style.backgroundColor =
        "rgb(" + colors[0] + "," + colors[1] + "," + colors[2] + ")";
});
