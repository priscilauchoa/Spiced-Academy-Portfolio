(function () {
    (function () {
        var ticker = document.getElementById("ticker");

        var left = ticker.offsetLeft;

        function moveTickerLine() {
            left--;

            ticker.style.left = left + "px";
            requestAnimationFrame(moveTickerLine);
        }
        moveTickerLine();
    })();
})();
