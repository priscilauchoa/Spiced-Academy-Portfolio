(function () {
    var menuButton = document.getElementById("menu-button"); //button
    var sideNav = document.getElementsByClassName("side-nav"); //<p>
    var menuX = document.getElementById("menu-x"); //<p>
    var overlay = document.getElementsByClassName("overlay"); //<p>
    // console.log(sideNav);

    // console.log(popup);

    function showPopup() {
        window.setTimeout(function () {
            $("#pop-up-container").css("visibility", "visible");
        }, 1000);

        var close = $("#close");
        close.on("click", function () {
            $("#pop-up-container").css("visibility", "hidden");
        });
    }
    showPopup();

    // console.log(popup);
    menuButton.addEventListener("click", function () {
        // console.log("menuButton");
        sideNav[0].classList.add("on");
        overlay[0].classList.add("showOverlay");
        // console.log("added class on");
    });
    menuX.addEventListener("click", function () {
        // console.log("on");
        sideNav[0].classList.remove("on");
        overlay[0].classList.remove("showOverlay");
        // console.log("click  on  button x");
    });
})();
