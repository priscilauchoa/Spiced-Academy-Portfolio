(function () {
    var currentPlayer = "player1";
    //Switch Player__________________________________________
    function switchPlayers() {
        if (currentPlayer == "player1") {
            currentPlayer = "player2";
        } else {
            currentPlayer = "player1";
        }
    }

    $(".turn1").hide();
    $(".turn2").show();
    $("#play").on("click", function () {
        location.reload();
    });
    //Column click____________________________________________
    $(".column").on("click", function (e) {
        switchPlayers();
        var col = $(e.currentTarget);
        var slotsInCol = col.children();

        if (currentPlayer === "player1") {
            $(".turn2").hide();
            $(".turn1").show();
            // );
        } else if (currentPlayer === "player2") {
            $(".turn1").hide();
            $(".turn2").show();
        }

        for (var i = 5; i >= 0; i--) {
            if (
                !slotsInCol.eq(i).hasClass("player1") &&
                !slotsInCol.eq(i).hasClass("player2")
            ) {
                // slotsInCol.eq(i).hasClass(currentPlayer);
                slotsInCol.eq(i).addClass(currentPlayer);

                break;
            }
        }

        // TODO: implement
        if (i < 0) {
            //  ninguem ganhou, começa de novo
            return;
        }

        var hasWinner = false;
        function winner() {
            $(".container").css("visibility", "visible");
            if (currentPlayer === "player1") {
                var imageUrl = "./connect4.png";
                $(".play").css("background-image", "url(" + imageUrl + ")");
                console.log("ganhou");
            } else if (currentPlayer === "player2") {
                var imageUrl2 = "./1200px-Ampelmann_Rot.svg.png";
                $(".play").css("background-image", "url(" + imageUrl2 + ")");
                console.log("ganhou");
            }
        }
        // check for victory__________________________________
        if (checkForVictoryColumnOrRow(slotsInCol)) {
            //  victory
            hasWinner = true;
            winner();

            console.log(currentPlayer, "is the  Winner - column");
            return;
        } else if (checkForVictoryColumnOrRow($(".row" + i))) {
            hasWinner = true;
            winner();

            //  victory
            console.log(currentPlayer, "is the  Winner - row");
            return;
        } else if (checkDiagonal($(".slot"))) {
            hasWinner = true;
            winner();

            console.log(currentPlayer, "is the  Winner - diagonal");
            //  victory
        }

        return;

        // if no victory was found above, switch players
    });

    function checkForVictoryColumnOrRow(columnOrRow) {
        var count = 0;
        for (var i = 0; i < columnOrRow.length; i++) {
            if (columnOrRow.eq(i).hasClass(currentPlayer)) {
                count++;

                if (count == 4) {
                    return true;
                }
            } else {
                count = 0;
            }
        }
    }

    function checkDiagonal(rows) {
        // console.log(rows.index(rows.eq(i).hasClass(currentPlayer)));
        // console.log(rows.index(rows.eq(25).hasClass(currentPlayer)));
        var hasCurrentIndexArray = [];
        var count = 0;
        var hasWineer = false;

        console.log("### rows.length", rows.length);
        for (var j = 0; j < rows.length; j++) {
            if (hasWineer) break;
            // console.log("### row", rows.eq(j).attr("class"));
            if (rows.eq(j).hasClass(currentPlayer)) {
                var hasCurrentIndex = rows.index(
                    rows.eq(j).hasClass(currentPlayer)
                );

                //  = board.eq(i).hasClass(currentPlayer);
                // hasCurrentIndexArray = currentIndex.indexOf(currentIndex);
                // hasCurrentIndexArray.push(hasCurrentIndex);
                hasCurrentIndexArray.push(j);
                console.log("### hascurrentindex", j, hasCurrentIndexArray);

                count++;
                console.log("### count", count);
                if (count >= 4) {
                    var winningCombos = [
                        [0, 7, 14, 21],
                        [1, 8, 15, 22],
                        [2, 9, 16, 23],
                        [6, 13, 20, 27],
                        [7, 14, 21, 28],
                        [8, 15, 22, 29],
                        [12, 19, 26, 33],
                        [13, 20, 27, 34],
                        [14, 21, 28, 35],
                        [18, 25, 32, 39],
                        [19, 26, 33, 40],
                        [20, 27, 34, 41],
                        [3, 8, 13, 18],
                        [4, 9, 14, 19],
                        [5, 10, 15, 20],
                        [9, 14, 19, 24],
                        [10, 15, 20, 25],
                        [11, 16, 21, 26],
                        [15, 20, 25, 30],
                        [16, 21, 26, 31],
                        [17, 22, 27, 32],
                        [21, 26, 31, 36],
                        [22, 27, 32, 37],
                        [23, 28, 33, 38],
                    ];

                    // for (var i = 0; i < winningCombos.length; i++) {
                    //     if (hasCurrentIndexArray[i] == winningCombos[j]) {
                    //         return console.log(
                    //             currentPlayer,
                    //             "is the  Winner - diagonal"
                    //         );
                    //     }
                    //     return;
                    // }

                    for (var i = 0; i < winningCombos.length; i++) {
                        var matches = true;
                        var validationArray = winningCombos[i];
                        for (var l = 0; l < validationArray.length; l++) {
                            // console.log(
                            //     "### match",
                            //     matches,
                            //     hasCurrentIndexArray[l],
                            //     validationArray[l]
                            // );

                            var isInArray =
                                hasCurrentIndexArray.indexOf(
                                    validationArray[l]
                                ) >= 0;

                            if (!isInArray) {
                                matches = false;
                                break;
                            }
                        }

                        if (matches) {
                            hasWineer = true;
                        }
                    }

                    console.log("### hasWineer", hasWineer);
                }
            }
        }
        return hasWineer;
    }

    // checkDiagonal();
})();

// (function () {
//     var currentPlayer = "player1";

//     function switchPlayer() {
//         if (currentPlayer === "player1") {
//             currentPlayer = "player2";
//         } else {
//             currentPlayer = "player1";
//         }
//         // console.log("aqui", currentPlayer);
//     }

//     // quando clica na coluna verifica o buraco que  está mais baixo na coluna e ocupa
//     $(".column").on("click", function (e) {
//         var col = $(e.currentTarget); // currentTarget é o elemento que tá atualmente lidando com o evento
//         console.log("children", col.children().hasClass("player1"));

//         var slotsInCol = col.children();
//         // console.log("i was cicked", slotsInCol);

//         //Add move to board______________________________________________________
//         for (var i = 5; i >= 0; i--) {
//             if (
//                 !slotsInCol.eq(i).hasClass("player1") &&
//                 !slotsInCol.eq(i).hasClass("player2")
//             ) {
//                 slotsInCol.eq(i).hasClass(currentPlayer);
//                 slotsInCol.eq(i).addClass(currentPlayer);
//                 break;
//             }
//         }

//         if (i < 0) {
//             console.log("coluna completa ");
//             return;
//         }
//         // ________________________________________________________________________

//         ____

//         // console.log(slotsInCol);
//         if (checkVictory(slotsInCol)) {
//             console.log("victory");
//             // faça a animação do vencedor
//             console.log("slot maior que 4");
//         } else if (checkVictory($(".row" + i))) {
//             // faça a animação do vencedor
//             //
//         } else {
//             //check diagonally
//         }
//         //________________________________________________________________________
//         function checkVictory(slots) {
//             var count = 0;
//             // console.log("slotttttt ===>", slots.eq(i));

//             for (var i = 0; i < slots.lenght; i++) {
//                 if (slots.eq(i).hasClass(currentPlayer)) {
//                     count++;

//                     console.log("count---->", count, slots.eq(i));
//                     if (count == 3) {
//                         console.log("victory");
//                     }
//                 } else {
//                     count = 0;
//                 }
//             }
//         }
//         //se nao tiver vencedor switch os jogadores player

//         //check for victory
//         //verifica se existe 4 holes seguidos preechidos pela mesma classe player.. se sim é o vencedor
//         //checa a coluna que o jogador selecionou de tem 4
//         //checa a linha que a peça acabou de entrar
//         //check diagonal
//         // se determinou quem é o vencedor mostrar uma animação
//         switchPlayer();
//         // var col = $(e.currentTarget);
//     });
//     // checkVictory($(".column"));
// })();
