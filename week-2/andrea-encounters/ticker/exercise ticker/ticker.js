(function () {
    var ticker = document.getElementById("ticker-line");
    var left = ticker.offsetLeft;
    var links = document.getElementsByTagName("a");

    function moveTickerLine() {
        left -= 2;
        ticker.style.left = left + "px";

        var link = links[0];

        if (left <= -link.offsetWidth) {
            left += link.offsetWidth;
            ticker.style.left = left + "px";
            ticker.appendChild(link);
        }

        requestAnimationFrame(moveTickerLine);
    }
    moveTickerLine();
})();
