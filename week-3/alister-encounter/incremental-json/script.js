(function () {
    var inp = $("input");
    var resultsContainer = $("#results");

    inp.focus(); // foca o elemento em questão
    // console.log("here", resultsContainer);

    inp.on("input", function (e) {
        // cleanSetTimeout
        var val = inp.val();
        // console.log(val);

        if (!val) {
            //empty and or hide results
            return resultsContainer.hide();
        }
        // if (val) {
        //     setTimeout(() => {}, 500); // 
        // }
        $.ajax({
            url: "https://spicedworld.herokuapp.com/",
            data: {
                q: val,
            },
            success: function (response) {
                if (inp.val() === val) {
                    // console.log("response: ", response);
                } else {
                    console.log("This is an out of date response");
                }

                // setTimeout(function () {
                //     console.log("");
                // }, 500);

                var countries = response;
                var matches = [];
                for (var i = 0; i < countries.length; i++) {
                    if (
                        countries[i].toLowerCase().startsWith(val.toLowerCase())
                    ) {
                        //case ensitive
                        // if (countries[i].indexOf(val) === 0) {

                        matches.push(countries[i]);
                        if (matches.length == 4) {
                            break;
                        }
                        // console.log(val);
                    }
                }
                // function selectCountry() {
                //     for(var i = 0; i < countries.length;
                // }
                // selectCountry();
                var resultsHtml = "";
                if (matches.length) {
                    //retorna true se tiver algo dentro
                    // loop into and create a html for each match
                    for (i = 0; i < matches.length; i++) {
                        resultsHtml += "<div>" + matches[i] + "</div>";
                    }
                    resultsContainer.html(resultsHtml).show();
                    // resultsContainer.html(resultsHtml).show();
                } else {
                    resultsHtml += "<p style='color: gray'>No results 👎</p>";
                    // console.log("no resulst");
                    resultsContainer.html(resultsHtml).show();
                    // se matches is empty show no results message
                }
            },
        });
    });

    $(document)
        .on("mouseenter", "#results div", function (e) {
            $(e.target).addClass("highlighted");
            // add  higlhtih class to event.target
        })
        .on("mouseleave", "#results div", function (e) {
            $(e.target).removeClass("highlighted");
            //remove highlight class if the element has
        })
        .on("mousedown", "#results div", function (e) {
            var resultsHtml = "";
            //set the value of text field to the string conitained by the event target
            // console.log($(e.target));
            inp.val($(e.target).text());
            resultsContainer.html(resultsHtml).hide();
        })
        .on("keydown", function (e) {
            var resultsContainerDiv = $("#results div");
            //if key up arrow or down down ;

            var highlighted = $(".highlighted");

            //If down
            if (e.keyCode == 40) {
                // console.log(e.keyCode);
                if (!resultsContainerDiv.hasClass("highlighted")) {
                    resultsContainerDiv.first().addClass("highlighted");
                } else {
                    highlighted.removeClass("highlighted");
                    highlighted.next().addClass("highlighted");
                }
            }
            //If up
            if (e.keyCode == 38) {
                if (!resultsContainerDiv.hasClass("highlighted")) {
                    resultsContainerDiv.last().addClass("highlighted");
                } else {
                    highlighted.removeClass("highlighted");
                    highlighted.prev().addClass("highlighted");
                }
            }

            if (e.keyCode == 13) {
                // var resultHide = "";
                inp.val(highlighted.text()); // highlighted é um object jquery, portanto devemos usar highlighted.text() para pegar o texto de highlighted
                // console.log("aqui", highlighted.text());
                resultsContainer.hide();

                // inp.val($(e.target).text());
            }
        });
})();
