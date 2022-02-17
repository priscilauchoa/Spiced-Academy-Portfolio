(function () {
    var container = document.getElementById("kitties");
    var kitties = document.querySelectorAll("#kitties img");
    var kitBtn1 = document.getElementById("kit1");
    var kitBtn2 = document.getElementById("kit2");
    var kitBtn3 = document.getElementById("kit3");
    var kitBtn4 = document.getElementById("kit4");

    var currentKitty = 0;

    kitBtn1.addEventListener("mousedown", function (e) {
        e.target.style.backgroundColor = "white";
        setTimeout(moveKitties, 10);
        kitBtn1.addEventListener("mouseup", function (e) {
            e.target.style.backgroundColor = "";
        });
    });
    kitBtn2.addEventListener("mousedown", function (e) {
        e.target.style.backgroundColor = "white";
        setTimeout(moveKitties, 10);
        kitBtn2.addEventListener("mouseup", function (e) {
            e.target.style.backgroundColor = "";
        });
    });
    kitBtn3.addEventListener("mousedown", function (e) {
        e.target.style.backgroundColor = "white";
        setTimeout(moveKitties, 10);
        kitBtn3.addEventListener("mouseup", function (e) {
            e.target.style.backgroundColor = "";
        });
    });
    kitBtn4.addEventListener("mousedown", function (e) {
        e.target.style.backgroundColor = "white";
        setTimeout(moveKitties, 10);
        kitBtn4.addEventListener("mouseup", function (e) {
            e.target.style.backgroundColor = "";
        });
    });

    // console.log(currentKitty);
    container.addEventListener("transitionend", function (e) {
        if (e.target.classList.contains("exit")) {
            e.target.classList.remove("exit");
            setTimeout(moveKitties, 5000);
        }
    });

    function moveKitties() {
        kitties[currentKitty].classList.remove("onscreen");
        // console.log("no contains");
        kitties[currentKitty].classList.add("exit");
        currentKitty++;

        if (currentKitty == kitties.length) {
            currentKitty = 0;
        }
        kitties[currentKitty].classList.add("onscreen");

        // if (kitties[currentKitty].classList.contains("onscreen")) {
        //     // console.log("contains");

        //     console.log(kitties[currentKitty]);
        //     // console.log("contains exit");
        //     console.log(currentKitty);

        //     // remove onscreen class from kitty at current index
        //     //add exit class from kitty at current index
        //     // console.log("the current is ", currentKitty);
        //     // console.log("now the currrent is ", currentKitty);
        // }
        // setTimeout(moveKitties, 1000);
        //add the onscreen class to kitty at the new current index
        // usar setTimeout 5seconds
        // colocar um if e  um chamar de novo toda vez que o kitty.legth acabou e comecar de novo

        // setTimeout(moveKitties, 1000);?
    }

    setTimeout(moveKitties, 1000);
    // console.log("here");
    // kittie[0].classList.add("exit");
    // event delegation
})();
