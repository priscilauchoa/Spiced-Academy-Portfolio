(function () {
    var nextUrl = "https://spicedify.herokuapp.com/spotify";
    $("input").on("focus", function () {
        $("input").val("");
    });

    $(".submit-button").on("click", function () {
        var userInput = $("input").val();
        var artistOrAlbum = $("select").val();

        function requestAjax() {
            return $.ajax({
                url: nextUrl,
                data: {
                    query: userInput,
                    type: artistOrAlbum,
                },
                success: function (response) {
                    response = response.artists || response.albums;
                    var resultsHtml = "";

                    if (response.items.length == 0) {
                        resultsHtml += "<h1>No results found</h1>";
                    }
                    // $(".more-button").css("visibility", "visible");
                    else {
                        resultsHtml +=
                            '<h1 id="results-for">Results for: "' +
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
                    console.log("resultsHtml.length", resultsHtml.length);
                    if (resultsHtml.length < 0) {
                        $(".results-container").html(resultsHtml);
                    } else {
                        $(".results-container").append(resultsHtml);
                        $(window).scroll(function () {
                            if (
                                $(window).scrollTop() >=
                                $(document).height() - $(window).height() - 500
                            ) {
                                requestAjax(nextUrl);
                            }
                        });
                    }

                    if (response.next === null) {
                        $(".more-button").css("visibility", "hidden");
                    }
                    $(".more-button").on("click", function (e) {
                        nextUrl =
                            response.next &&
                            response.next.replace(
                                "api.spotify.com/v1/search",
                                "spicedify.herokuapp.com/spotify"
                            );
                        // if (nextUrl === null) {
                        if (location.search.indexOf("scroll=infinite")) {
                            $(".more-button").hide();
                            $(window).scroll(function () {
                                if (
                                    $(window).scrollTop() >=
                                    $(document).height() - $(window).height()
                                ) {
                                    requestAjax(nextUrl);
                                }
                            });
                        } else {
                            $(".more-button").hide();
                            // $(window).scroll(function () {
                            //     if (
                            //         $(window).scrollTop() >=
                            //         $(document).height() - $(window).height()
                            //     ) {
                            //         requestAjax(nextUrl);
                            //     }
                            // });
                        }
                    });
                },
            });
        }
        requestAjax();
    });

    // $(document).on("click", ".more-button", ".submit-button", function (e) {
    //     var submitButtonWasClicked = e.target.id === "submit-button";
    //     var moreButtonWasClicked = e.target.class === "more-button";

    // });
})();
