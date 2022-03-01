(function () {
    //////////////////////////////////🚫DO NOT TOUCH🚫/////////////////////////////////
    Handlebars.templates = Handlebars.templates || {};

    var templates = document.querySelectorAll(
        'script[type="text/x-handlebars-template"]'
    );

    Array.prototype.slice.call(templates).forEach(function (script) {
        Handlebars.templates[script.id] = Handlebars.compile(script.innerHTML);
    });
    //////////////////////////////////🚫DO NOT TOUCH🚫/////////////////////////////////

    var truffleObj = {
        name: "Truffle",
        nickname: "The Truffles",
        favouriteFood: ["Truffle", "Pasta", "Pizza", "Waffles", "chocolate"],
        skills: {
            javascript: true,
            html: 10,
        },
    };

    $(".truffle-info").html(Handlebars.templates.truffle(truffleObj));
})();
