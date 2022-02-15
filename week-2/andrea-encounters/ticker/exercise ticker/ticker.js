(function () {
    var ticker = document.getElementById("ticker-line");
    var left = ticker.offsetLeft;
    var links = document.getElementsByTagName("a");
    var reqId;

    function moveTickerLine() {
        left -= 2;
        ticker.style.left = left + "px";

        var link = links[0];

        if (left <= -link.offsetWidth) {
            left += link.offsetWidth;
            ticker.style.left = left + "px";
            ticker.appendChild(link);
        }

        reqId = requestAnimationFrame(moveTickerLine);
    }
    moveTickerLine();

    for (var i = 0; i < links.length; i++) {
        links[i].addEventListener("mouseenter", function (e) {
            cancelAnimationFrame(reqId);
            e.target.style.backgroundColor = "violet";
        });
        links[i].addEventListener("mouseleave", function (e) {
            e.target.style.backgroundColor = "white";
            moveTickerLine();
        });
    }
})();
