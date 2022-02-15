// Make a page that has on it an element that is 100px by 100px in size, has absolute positioning, and has a solid background color. Add an event handler that makes this box center itself directly under the user's mouse pointer as it is moved across the screen.

var square = document.getElementsByClassName("square");

function followMouseMoves(e) {
    var x = e.offsetX;
    var y = e.offsetY;
    square[0].style.left = x + "px";
    square[0].style.top = y + "px";
}

document.addEventListener("mousemove", followMouseMoves);
