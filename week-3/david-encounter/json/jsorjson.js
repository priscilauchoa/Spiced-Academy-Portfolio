(function () {
    // 1 Make a JSON validator website. It should have a <textarea> where users can input their JSON. After clicking a button a message should appear, telling users if the JSON is valid or not.

    // var txt = $("#textarea").val();

    $("#validate").on("click", function (e) {
        var txt = $("textarea").val();
        console.log(typeof txt);

        try {
            JSON.parse(txt);
            console.log(typeof txt);
        } catch {
            alert("this is not json ");
        }
    });
})();
