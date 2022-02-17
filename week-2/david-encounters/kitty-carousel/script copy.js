(function () {
    var container = document.getElementById("kitties");
    var kitties = document.querySelectorAll("#kitties img");
    var currentKitty = 0;

    container.addEventListener("transitionend", function (e) {
        if (e.target.classList.contains("exit")) {
            e.target.classList.remove("exit");
            setTimeout(moveKitties, 1000);
        }
    });
    // console.log("here", kittie[0]);

    // event delegation
    //

    function moveKitties() {
        // remove onscreen class from kitty at current index
        //add exit class from kitty at current index
        console.log("the currrent is ", currentKitty);
        currentKitty++;
        console.log("now the currrent is ", currentKitty);

        //add the onscreen class to kitty at the new current index
        // usar setTimeout 5seconds
        // colocar um if e  um chamar de novo toda vez que o kitty.legth acabou e comecar de novo
        if (currentKitty == kitties.length) {
            currentKitty = 0;
        }
        // setTimeout(moveKitties, 1000);
    }

    setTimeout(moveKitties, 1000);
    // kittie[0].classList.add("exit");
})();
