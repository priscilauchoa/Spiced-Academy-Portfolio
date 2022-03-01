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
                    checkScrollPosition();

                    function checkScrollPosition() {
                        // console.log("running check");
                        //check se meu user atingiu o final da pagina se  sim nos queremos ajax de novo. se nao nos chaamamos
                        // setTimeout(function () {
                        if (location.search.indexOf("scroll=infinite")) {
                            $(".more-button").hide();

                            if (
                                $(window).scrollTop() >=
                                $(document).height() - $(window).height()
                            ) {
                                requestAjax(nextUrl);
                                checkScrollPosition();
                            }
                        }
                        // }, 500);
                    }

                    // $(document).on("click", ".more-button", ".submit-button", function (e) {
                    //     var submitButtonWasClicked = e.target.id === "submit-button";
                    //     var moreButtonWasClicked = e.target.class === "more-button";

                    // });

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

        requestAjax();
    });
})();
