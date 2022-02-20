(function () {
    var kitties = document.querySelectorAll("#kitties img");
    var currentKitty = 0;
    var container = document.getElementById("kitties");
    var circles = document.querySelectorAll(".circle");
    var transitioning = false;
    var timer;
    console.log(timer);
    // console.log(circles);
    var i;

    //     (function () {
    //         circles[i].addEventListener("click", circleClickHandler(i));
    //     })(i);
    //     //SECOND SOLUTION
    //     // circles[i].addEventListener("click", Function (e){
    //     //     var dotIndex = ;e.target.id;
    //     // });
    // }
    // console.log(circles[currentCircle]);
    for (i = 0; i < circles.length; i++) {
        circles[i].addEventListener("click", function (e) {
            if (transitioning) {
                return;
            }
            clearTimeout(timer);
            var j;
            console.log(timer);
            for (j = 0; j < circles.length; j++) {
                if (circles[j] === e.target) {
                    moveKitties(j);
                    break;
                }
            }
        });
    }
    // function circleClickHandler(indexValue) {
    //     return function () {
    //         circles[currentCircle].addEventListener("click", function (e) {
    //             var dotIndex = e.target.id;
    //             console.log("é igual", dotIndex === indexValue);
    //             currentCircle++;
    //             clearTimeout(timer);
    //             // console.log("indexValue", dotIndex);
    //     });
    // };

    container.addEventListener("transitionend", function (e) {
        if (e.target.classList.contains("exit")) {
            transitioning = false;
            e.target.classList.remove("exit");
            setTimeout(moveKitties, 5000);
        }
    });
    // console.log(currentKitty);

    function moveKitties(indexValue) {
        kitties[currentKitty].classList.remove("onscreen");
        transitioning = true;
        circles[currentKitty].classList.remove("on");
        kitties[currentKitty].classList.add("exit");
        currentKitty++;
        console.log(timer);

        if (currentKitty >= kitties.length) {
            currentKitty = 0;
        }

        if (typeof indexValue === "number") {
            currentKitty = indexValue;
        }

        circles[currentKitty].classList.add("on");
        kitties[currentKitty].classList.add("onscreen");
    }
    console.log(circles[currentKitty]);
    console.log(kitties[currentKitty]);
    timer = setTimeout(moveKitties, 5000);
})();

// When a user clicks on a dot, you first of all need to make 2 checks:
// Check if the cats are in mid-transition, and if so do nothing
// We have a variable called 'transitioning', which keeps track of whether on not that is the case
// If we are mid-transition, its value will be true
// Check if the dot which was clicked corresponds to the current cat on the screen, and if so do nothing
// In the click handler, you can do this by comparing the index of the dot which was clicked on, to the index of the current cat on the screen
// If you have made it past these checks, you should now cancel the currently scheduled call to moveKitties
// You can do this by calling clearTimeout, and passing it the value assigned to the 'timer' variable
// You can now call moveKitties again, passing it the index of the dot which was clicked
// moveKitties will use this value to determine which cat to move onscreen next
// If no value if passed, the function will simply move to the next cat is it would have done
