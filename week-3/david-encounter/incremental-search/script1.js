var results = $("#results div");
var highlighted = $(".highlighted");

highlighted.index(); //tells you the index of an element in highlight

if (highlighted.length) {
    if (highlighted.index() == results.lenght - 1) {
        console.log();
    }
}
