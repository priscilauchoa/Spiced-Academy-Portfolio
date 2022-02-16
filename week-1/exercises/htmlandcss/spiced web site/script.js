(function () {
    var menuButton = document.getElementById("menu-button"); //button
    var sideNav = document.getElementById("side-nav"); //<p>
    var menuX = document.getElementById("menu-x"); //<p>

    menuButton.addEventListener("click", function () {
        console.log("menuButton");
        // sideNav.style.visibility = "visible";
        sideNav.id = "on";
        // console.log("added class on");
    });
    menuX.addEventListener("click", function () {
        console.log("on");
        sideNav.id = "side-nav";
        // sideNav.style.visibility = "hidden";
        // console.log("click  on X button");
    });
})();
