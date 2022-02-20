(function () {
    var container = document.getElementById("kitties");
    var kitties = document.querySelectorAll("#kitties img");
    // var kitBtn1 = document.getElementById("kit1");
    // var kitBtn2 = document.getElementById("kit2");
    // var kitBtn3 = document.getElementById("kit3");
    // var kitBtn4 = document.getElementById("kit4");
    var timer;
    var circles = document.querySelectorAll(".circle");
    var currentKitty = 0;
    var transitioning = true;

    console.log(circles);
    var i;
    for (i = 0; i < circles.length; i++) {
        if (transitioning) {
            return true;
        }

        circles[i].addEventListener("click", function (e) {
            for (var j = 0; j < circles.lenght; j++) {
                if (circles[i] === e.target) {
                    console.log(j);
                    break;
                }
            }
        });
    }
    // function circleClickHandler(indexValue) {
    //     return function () {
    //         console.log("indexValue", indexValue);
    //     };
    }

    // console.log(currentKitty);
    container.addEventListener("transitionend", function (e) {
        if (e.target.classList.contains("exit")) {
            transitioning = false;
            e.target.classList.remove("exit");
            setTimeout(moveKitties, 1000);
        }
    });

    function moveKitties() {
        kitties[currentKitty].classList.remove("onscreen");
        circles[currentKitty].classList.remove("on");
        kitties[currentKitty].classList.add("exit");

        currentKitty++;

        if (currentKitty >= kitties.length) {
            currentKitty = 0;
        }
        circles[currentKitty].classList.add("on");
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

    timer = setTimeout(moveKitties, 1000);
    console.log("timer", timer);
    // kittie[0].classList.add("exit");
    // event delegation
})();


// Quando um usuário clica em um ponto, primeiro você precisa fazer 2 verificações:
// Verifique se os gatos estão no meio da transição e, em caso afirmativo, não faça nada
// Temos uma variável chamada 'transição', que acompanha se não é esse o caso
// Se estivermos no meio da transição, seu valor será verdadeiro
// Verifique se o ponto que foi clicado corresponde ao gato atual na tela e, em caso afirmativo, não faça nada
// No manipulador de cliques, você pode fazer isso comparando o índice do ponto que foi clicado com o índice do gato atual na tela
// Se você passou por essas verificações, agora deve cancelar a chamada atualmente agendada para moveKitties
// Você pode fazer isso chamando clearTimeout e passando o valor atribuído à variável 'timer'
// Agora você pode chamar moveKitties novamente, passando o índice do ponto que foi clicado
// moveKitties usará este valor para determinar qual gato mover na tela em seguida
// Se nenhum valor for passado, a função simplesmente passará para o próximo gato que teria feito
