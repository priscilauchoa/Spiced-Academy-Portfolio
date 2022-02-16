(function () {
    var bigCanvas = document.getElementById("big-canvas");
    var canvas = document.getElementById("canvas");
    // console.log("canvas", canvas);

    var bigC = bigCanvas.getContext("2d");
    var c = canvas.getContext("2d");

    // BIG Canvas

    bigC.beginPath();
    bigC.fillStyle = "violet";
    bigC.fillRect(0, 0, bigCanvas.width, bigCanvas.height);
    bigC.strokeStyle = "black;";
    bigC.lineWidth = 4;
    bigC.beginPath();

    // Canvas inside
    c.beginPath();
    c.fillStyle = "pink";
    c.fillRect(0, 0, canvas.width, canvas.height);
    c.strokeStyle = "black;";
    c.lineWidth = 4;
    c.beginPath();

    //Circle
    c.strokeStyle = "black";
    c.lineWidth = 2;
    c.beginPath();
    c.arc(250, 180, 70, 0, Math.PI * 2);
    c.fillStyle = "lightyellow";
    c.fill();
    c.stroke();

    //Eyes
    c.strokeStyle = "black";
    c.lineWidth = 1;
    c.beginPath();
    c.arc(220, 150, 10, 0, Math.PI * 2);
    c.fillStyle = "green";
    c.fill();
    c.stroke();

    c.strokeStyle = "black";
    c.lineWidth = 1;
    c.beginPath();
    c.arc(275, 150, 10, 0, Math.PI * 2);
    c.fillStyle = "green";
    c.fill();
    c.stroke();

    // Eyebrows
    c.strokeStyle = "black";
    c.lineWidth = 1;
    c.beginPath();
    c.arc(275, 140, 20, 60, Math.PI * 8);
    c.fillStyle = "brown";
    c.fill();
    c.stroke();

    c.strokeStyle = "black";
    c.lineWidth = 1;
    c.beginPath();
    c.arc(225, 140, 20, 60, Math.PI * 8);
    c.fillStyle = "brown";
    c.fill();
    c.stroke();

    c.strokeStyle = "black";
    c.lineWidth = 1;
    c.beginPath();
    c.arc(250, 220, 10, 0, Math.PI * 1);
    c.fillStyle = "red";
    c.fill();
    c.stroke();

    //Body
    c.moveTo(250, 250);
    c.lineTo(250, 500);
    c.stroke();

    // Left Arm
    c.moveTo(250, 250); // starting poit
    c.lineTo(125, 375);
    c.stroke();

    // Right Arm
    c.moveTo(250, 250); // starting poit
    c.lineTo(375, 375);
    c.stroke();

    //Right Leg
    c.moveTo(250, 500);
    c.lineTo(320, 650);
    c.stroke();

    //Left leg
    c.moveTo(250, 500);
    c.lineTo(160, 650);
    c.stroke();

    // function stickerMoves() {}
})();
