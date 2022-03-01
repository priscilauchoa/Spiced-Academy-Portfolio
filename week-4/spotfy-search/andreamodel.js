(function () {
    var nextUrl = "https://spicedify.herokuapp.com/spotify";

    $("#submit-button").on("click", function () {
        requestAjax(nextUrl);
    });

    //Function AJAX request__________________________________-
    function requestAjax(nextUrl) {
        $.ajax({
            url: nextUrl,
            method: "GET",
            data: {
                query: $("input").val(),
                type: $("select").val(),
            },
            success: function (data) {
                data = data.albums || data.artists;

                var html = generateResultsHtml(data.items);
                $("#results-container").html(html);

                setNextUrl(data.next);
                checkScrollPosition();
            },
        });
    }

    // $("#more").on("click", function () {
    //     $.ajax({
    //         url: nextUrl,
    //         method: "GET",
    //         success: function (data) {
    //             data = data.albums || data.artists;

    //             // option #2 - you can call the generateResultsHtml function directly inside append
    //             $("#results-container").append(generateResultsHtml(data.items));

    //             setNextUrl(data.next);
    //         },
    //     });
    // });

    function setNextUrl(next) {
        nextUrl =
            next &&
            next.replace(
                "https://api.spotify.com/v1/search",
                "https://spicedify.herokuapp.com/spotify"
            );
    }
    function isInBottomPage() {
        if (location.search.indexOf("scroll=infinite")) {
            if (
                $(window).scrollTop() >=
                $(document).height() - $(window).height() - 500
            ) {
                $(".more-button").hide();
            }
        }
    }
    function checkScrollPosition() {
        setTimeout(function () {
            if (isInBottomPage()) {
                //  NOT WORKING -TO DO
                requestAjax(nextUrl);
            } else {
                checkScrollPosition();
            }
        }, 1000);
    }
    checkScrollPosition();

    function generateResultsHtml(items) {
        var resultsHtml = "";
        for (var i = 0; i < items.length; i++) {
            var defaultImage = "./logo.png";

            if (items[i].images.length > 0) {
                defaultImage = items[i].images[0].url;
            }

            resultsHtml +=
                '<a href="' +
                items[i].external_urls.spotify +
                '"><div class="results-div"><p>' +
                items[i].name +
                '</p><img src="' +
                defaultImage +
                '" alt="some image" </a></div>';
        }

        if (resultsHtml.length < 0) {
            $(".results-container").html(resultsHtml);
        } else {
            $(".results-container").append(resultsHtml);

            // if ($(".results-container").hasClass(".results-for")) {
            //     $(".results-for").last().remove();

            // console.log($(".results-for").last());
        }
        return resultsHtml;
    }
})();
