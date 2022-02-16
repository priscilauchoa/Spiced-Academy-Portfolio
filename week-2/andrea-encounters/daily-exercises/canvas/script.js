(function () {
    var canvas = document.getElementById("canvas");
    // console.log("canvas", canvas);

    var c = canvas.getContext("2d");

    c.beginPath();
    c.fillStyle = "yellow";
    //c.fillRect9x, y, witdh, height
    c.fillRect(0, 0, canvas.width, canvas.height);

    // Canvas
    c.strokeStyle = "black;";
    c.lineWidth = 4;
    c.beginPath();

    //Triangule
    // (x,y)
    c.moveTo(250, 125); // starting poit
    c.lineTo(125, 375);
    c.stroke();
    c.lineTo(375, 375);
    c.stroke();
    c.closePath();
    c.stroke();
    c.fillStyle = "brown";
    c.fill();

    //Circle
    //c.arc(x, y, radius, startAngles, endAngle)
    c.strokeStyle = "black";
    c.lineWidth = 2;
    c.beginPath();
    c.arc(250, 280, 70, 0, Math.PI * 2);
    c.fillStyle = "bluviolet";
    c.fill();
    c.stroke();

    // Small Circle
    c.strokeStyle = "red";
    c.lineToWidth = 2;
    c.beginPath();
    c.arc(250, 280, 50, 0, Math.PI * 2);
    c.fillStyle = "yellow";
    c.fill();
    c.stroke();
})();
