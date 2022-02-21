(function () {
    var ticker = $("#ticker-line");
    // var ticker = document.getElementById("ticker-line");
    var left = ticker.offset().left;
    // var left = ticker.offsetLeft;

    var links = $("a");
    // var links = document.getElementsByTagName("a");
    var reqId;

    function moveTickerLine() {
        left -= 2;
        ticker.css(left, left + "px");

        var link = links[0];

        if (left <= -link.offsetWidth) {
            left += link.offsetWidth;
            ticker.style.left = left + "px";
            ticker.appendTo(link);
            // ticker.appendChild(link);
        }

        reqId = requestAnimationFrame(moveTickerLine);
    }
    moveTickerLine();

    for (var i = 0; i < links.length; i++) {
        links[i].on("mouseenter", function (e) {
            cancelAnimationFrame(reqId);
            e.target.css("backgroundColor", "violet");
            // links[i].addEventListener("mouseenter", function (e) {
            //     cancelAnimationFrame(reqId);
            //     e.target.style.backgroundColor = "violet";
        });
        links[i].on("mouseleave", function (e) {
            e.target.css("backgroundColor", "white");
            moveTickerLine();
        });
        // links[i].addEventListener("mouseleave", function (e) {
        //     e.target.style.backgroundColor = "white";
        //     moveTickerLine();
        // });
    }
})();
