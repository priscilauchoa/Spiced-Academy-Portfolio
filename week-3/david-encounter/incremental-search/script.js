(function () {
    var inp = $("input");
    var resultsContainer = $("#results");
    // console.log("here", resultsContainer);
    // console.log("here");

    inp.on("input focus", function (e) {
        var val = inp.val();
        // console.log(val);
        //pega o valor dentro do do input

        if (!val) {
            //empty and or hide results
            return resultsContainer.hide();
        }

        var matches = [];
        for (var i = 0; i < countries.length; i++) {
            if (countries[i].toLowerCase().startsWith(val.toLowerCase())) {
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
        if (matches.length) {
            //retorna true se tiver algo dentro
            // loop into and create a html for each match
            var resultsHtml = "";
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
    });
    // document olha pra página e ve se o evento acontece no results div, se sim executa a function and hide all other results
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

            // inp.on("keydown", function (e) {
            //     var resulElem = $("#results div");
            //     var highlighted = $(".highlight");
            //     if (e.keyCode === 40) {
            //         // down arrow
            //         if (highlighted.length > 0) {
            //             highlighted.removeClass("highlight");
            //             highlighted.next().addClass("highlight");
            //         } else {
            //             resulElem.first().addClass("highlight");
            //         }
            //     }
            //     if (e.keyCode === 38) {
            //         // down arrow
            //         if (highlighted.length > 0) {
            //             highlighted.removeClass("highlight");
            //             highlighted.prev().addClass("highlight");
            //         } else {
            //             resulElem.last().addClass("highlight");
            //         }
            //     }
            //     if (e.keyCode === 13) {
            //         inp.val($(".highlight").text());
            //         resultsContainer.hide();
            //     }
            // });

            // } else if (resultsContainerDiv.hasClass(highlighted)) {
            //     resultsContainerDiv.prev().removeClass("highlighted");
            //     resultsContainerDiv.next().addClass("highlighted");
            // }
            // else if(focused)
        });
    //                 // if ($(e.target).is(":focus")) {
    //                 // if ($(e.target).is(":focus")) {
    //                     // for (i; i < resultsContainerDiv.length; i++) {
    //                     //     // console.log(resultsContainer.eq(0));
    //                     // resultsContainerDiv.first().removeClass("highlighted");
    //                     // resultsContainerDiv
    //                     //     .eq(i)
    //                     //     .next()
    //                     //     .focus()
    //                     //     .addClass("highlighted");

    //                     //     console.log("down");
    //                     // }

    //                 // } else if (e.keyCode == 38) {
    //                 //     for (var j = 0; j > resultsContainer.length; j--) {
    //                 //         // $(i).focus();
    //                 //         resultsContainer.eq(j).focus();
    //                 //         $(e.target).addClass("highlighted");
    //                 //         console.log("up");
    //                 // }
    //             // } else if (e.keyCode == 38) {
    //                 // for (var j = 0; j > resultsContainer.length; j--) {
    //                 // $(i).focus();
    //                 // resultsContainer.eq(j).focus();
    //                 // resultsContainerDiv.last().addClass("highlighted");

    //         });

    //if none of the results are current displaed has the higlight class add highlight class to the fisrt one
    // if there is a resukt with the highlight class remove the  highlight class from it and add highligth to next one
    //if there is a result with highlight class to the last on do nothing

    //window.on("keyCode") pega a tecla difitada na página

    var countries = [
        "Afghanistan",
        "Albania",
        "Algeria",
        "Andorra",
        "Angola",
        "Antigua and Barbuda",
        "Argentina",
        "Armenia",
        "Australia",
        "Austria",
        "Azerbaijan",
        "Bahamas",
        "Bahrain",
        "Bangladesh",
        "Barbados",
        "Belarus",
        "Belgium",
        "Belize",
        "Benin",
        "Bhutan",
        "Bolivia",
        "Bosnia and Herzegovina",
        "Botswana",
        "Brazil",
        "Brunei Darussalam",
        "Bulgaria",
        "Burkina Faso",
        "Burundi",
        "Cabo Verde",
        "Cambodia",
        "Cameroon",
        "Canada",
        "Central African Republic",
        "Chad",
        "Chile",
        "China",
        "Colombia",
        "Comoros",
        "Congo",
        "Costa Rica",
        "Côte D'Ivoire",
        "Croatia",
        "Cuba",
        "Cyprus",
        "Czech Republic",
        "Democratic People's Republic of Korea",
        "Democratic Republic of the Congo",
        "Denmark",
        "Djibouti",
        "Dominica",
        "Dominican Republic",
        "Ecuador",
        "Egypt",
        "El Salvador",
        "Equatorial Guinea",
        "Eritrea",
        "Estonia",
        "Eswatini",
        "Ethiopia",
        "Fiji",
        "Finland",
        "France",
        "Gabon",
        "Gambia",
        "Georgia",
        "Germany",
        "Ghana",
        "Greece",
        "Grenada",
        "Guatemala",
        "Guinea",
        "Guinea Bissau",
        "Guyana",
        "Haiti",
        "Honduras",
        "Hungary",
        "Iceland",
        "India",
        "Indonesia",
        "Iran",
        "Iraq",
        "Ireland",
        "Israel",
        "Italy",
        "Jamaica",
        "Japan",
        "Jordan",
        "Kazakhstan",
        "Kenya",
        "Kiribati",
        "Kuwait",
        "Kyrgyzstan",
        "Lao People’s Democratic Republic",
        "Latvia",
        "Lebanon",
        "Lesotho",
        "Liberia",
        "Libya",
        "Liechtenstein",
        "Lithuania",
        "Luxembourg",
        "Madagascar",
        "Malawi",
        "Malaysia",
        "Maldives",
        "Mali",
        "Malta",
        "Marshall Islands",
        "Mauritania",
        "Mauritius",
        "Mexico",
        "Micronesia",
        "Monaco",
        "Mongolia",
        "Montenegro",
        "Morocco",
        "Mozambique",
        "Myanmar",
        "Namibia",
        "Nauru",
        "Nepal",
        "Netherlands",
        "New Zealand",
        "Nicaragua",
        "Niger",
        "Nigeria",
        "North Macedonia",
        "Norway",
        "Oman",
        "Pakistan",
        "Palau",
        "Panama",
        "Papua New Guinea",
        "Paraguay",
        "Peru",
        "Philippines",
        "Poland",
        "Portugal",
        "Qatar",
        "Republic of Korea",
        "Republic of Moldova",
        "Romania",
        "Russian Federation",
        "Rwanda",
        "Saint Kitts and Nevis",
        "Saint Lucia",
        "Saint Vincent and the Grenadines",
        "Samoa",
        "San Marino",
        "Sao Tome and Principe",
        "Saudi Arabia",
        "Senegal",
        "Serbia",
        "Seychelles",
        "Sierra Leone",
        "Singapore",
        "Slovakia",
        "Slovenia",
        "Solomon Islands",
        "Somalia",
        "South Africa",
        "South Sudan",
        "Spain",
        "Sri Lanka",
        "Sudan",
        "Suriname",
        "Sweden",
        "Switzerland",
        "Syrian Arab Republic",
        "Tajikistan",
        "Thailand",
        "Timor-Leste",
        "Togo",
        "Tonga",
        "Trinidad and Tobago",
        "Tunisia",
        "Turkey",
        "Turkmenistan",
        "Tuvalu",
        "Uganda",
        "Ukraine",
        "United Arab Emirates",
        "United Kingdom",
        "United Republic of Tanzania",
        "United States of America",
        "Uruguay",
        "Uzbekistan",
        "Vanuatu",
        "Venezuela",
        "Viet Nam",
        "Yemen",
        "Zambia",
        "Zimbabwe",
    ];
})();
