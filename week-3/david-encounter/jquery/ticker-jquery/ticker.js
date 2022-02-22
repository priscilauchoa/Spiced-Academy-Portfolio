(function () {
    var headlines = $("#ticker-line");
    // var ticker = document.getElementById("ticker-line");
    var left = headlines.offset().left;
    // var left = headlines.offsetLeft;

    var links = $("a");
    // var links = document.getElementsByTagName("a");
    var reqId;
    function moveTickerLine() {
        left -= 5;
        headlines.css("left", left + "px");
        var link = links.eq(0);
        console.log(link);

        if (left <= -link.outerWidth()) {
            left += link.outerWidth();
            // console.log(link.outerWidth);
            headlines.css("left", left + "px");
            headlines.append(link);

            links = $("a");
            // headlines.appendChild(link);
        }

        reqId = requestAnimationFrame(moveTickerLine);
    }
    moveTickerLine();
    //call function
    links.on("mouseenter", function (e) {
        cancelAnimationFrame(reqId);
        $(e.target).css("backgroundColor", "violet");
        // links[i].addEventListener("mouseenter", function (e) {
        //     cancelAnimationFrame(reqId);
        //     e.target.style.backgroundColor = "violet";
    });
    links.on("mouseleave", function (e) {
        $(e.target).css("backgroundColor", "white");
        moveTickerLine();
    });
    // links[i].addEventListener("mouseleave", function (e) {
    //     e.target.style.backgroundColor = "white";
    //     moveTickerLine();
    // });
})();
