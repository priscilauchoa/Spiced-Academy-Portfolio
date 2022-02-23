(function () {
    // var txt = $("textarea").val();

    // localStorage.setItem("txt", txt);
    // localStorage.setItem("myCat", "Tom");
    $("textarea").on("input", function (e) {
        localStorage.setItem("txt", $(e.target).val());

        // localStorage.setItem("txt", $("textarea").val());
    });
    $("textarea").val(localStorage.getItem("txt"));
})();
