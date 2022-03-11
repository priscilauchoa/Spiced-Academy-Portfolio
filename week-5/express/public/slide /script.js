(function () {
    var body = $("body");
    var slide = $("#slide");
    var left = $(".container.left");
    var right = $(".container.right");

    $("img").on("mousedown", function (e) {
        e.preventDefault();
    });
    $("img").on("mouseup", function (e) {
        e.preventDefault();
    });

    var isPressed = false;

    slide.on("mousedown", function (e) {
        e.preventDefault();
        isPressed = true;
    });

    slide.on("mouseup", function () {
        isPressed = false;
    });

    body.on("mousemove", function (e) {
        e.preventDefault();
        if (!isPressed) return;

        slide.css("left", e.pageX);

        left.css("width", e.pageX);

        right.css("width", window.innerWidth - e.pageX); // body width - cursor position in x (because it is anchored to the right)
    });
})();
