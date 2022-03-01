(function () {
    var nextUrl = "https://spicedify.herokuapp.com/spotify";
    $("input").on("focus", function () {
        $("input").val("");
    });

    var res = null;

    function requestAjax() {

        
        var userInput = $("input").val();
        var artistOrAlbum = $("select").val();
        return $.ajax({
            url: nextUrl,
            data: {
                query: userInput,
                type: artistOrAlbum,
            },
            success: function (response) {
                res = response;
                response = response.artists || response.albums;
                var resultsHtml = "";

                if (response.items.length == 0) {
                    resultsHtml += "<h1>No results found</h1>";
                } else {
                    resultsHtml +=
                        '<h1 class="results-for">Results for: "' +
                        userInput +
                        '"</h1>';
                }

                for (var i = 0; i < response.items.length; i++) {
                    var defaultImage = "./logo.png";

                    if (response.items[i].images.length > 0) {
                        defaultImage = response.items[i].images[0].url;
                    }

                    resultsHtml +=
                        '<a href="' +
                        response.items[i].external_urls.spotify +
                        '"><div class="results-div"><p>' +
                        response.items[i].name +
                        '</p><img src="' +
                        defaultImage +
                        '" alt="some image" </a></div>';
                }

                if (resultsHtml.length < 0) {
                    $(".results-container").html(resultsHtml);
                } else {
                    $(".results-container").append(resultsHtml);
                    if ($(".results-container").hasClass(".results-for")) {
                        $(".results-for").last().remove();
                    }
                    console.log($(".results-for").last());
                }

                if (response.next === null) {
                    $(".more-button").css("visibility", "hidden");
                }

                // else {
                //     $(".more-button").hide();
                //     $(window).scroll(function () {
                //         if (
                //             $(window).scrollTop() >=
                //             $(document).height() -
                //                 $(window).height() -
                //                 100
                //         ) {
                //             requestAjax(nextUrl);
                //         }
                //     });
                // }
            },
        });
    }

    $(".submit-button").on("click", function () {
        requestAjax();
    });

    $(window).scroll(function () {
        console.log("### scroll");

        if (location.search.indexOf("scroll=infinite")) {
            if (!res) return;
            $(".more-button").hide();
            nextUrl =
                res.next &&
                res.next.replace(
                    "api.spotify.com/v1/search",
                    "spicedify.herokuapp.com/spotify"
                );
            // return; // TODO: remove return
            if (
                $(window).scrollTop() >=
                $(document).height() - $(window).height() - 500
            ) {
                console.log("### timeout begin");
                setTimeout(function () {
                    console.log("### timeout done", nextUrl);

                    requestAjax(nextUrl);
                }, 500);
            }
        }
    });
})();
