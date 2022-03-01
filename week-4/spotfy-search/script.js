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
                    } else {
                        $(".more-button").css("visibility", "visible");
                        resultsHtml +=
                            '<h1>Results for: "' + userInput + '"</h1>';
                    }
                    for (var i = 0; i < response.items.length; i++) {
                        var defaultImage =
                            "https://media.istockphoto.com/photos/broken-heart-picture-id534199227";

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
                        if (nextUrl === null) {
                            $(".more-button").hide();
                        } else {
                            $(".more-button").hide();
                            requestAjax(nextUrl);
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
