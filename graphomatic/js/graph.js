function drawGraph() {
    var canvas = document.getElementById("graph");

    if (canvas.getContext) {

        var width = canvas.width;
        var height = canvas.height;

        var ctx = canvas.getContext("2d");

        ctx.clearRect (0, 0, width, height)

        ctx.strokeStyle = "Black";

        ctx.beginPath();
        ctx.moveTo(0, height / 2);
        ctx.lineTo(width, height / 2);
        ctx.stroke();

        ctx.beginPath()
        ctx.moveTo(width / 2, 0);
        ctx.lineTo(width / 2, height);
        ctx.stroke();


        var x = -(width / 2);
        var y;

        var scaleX = document.getElementById("scaleX").value;
        document.getElementById("outX").innerHTML = scaleX;
        var scaleY = document.getElementById("scaleY").value;
        document.getElementById("outY").innerHTML = scaleY;

        ctx.strokeStyle = "Red";

        ctx.beginPath();
        while (x <= width / 2) {
            y = -Math.sin(x / scaleX) * scaleY;
            ctx.lineTo(x + width / 2, y + height / 2);
            x++
        }
        ctx.stroke();

        ctx.strokeStyle = "Blue";

        x = -(width / 2);

        ctx.beginPath();
        while (x <= width / 2) {
            y = -Math.cos(x / scaleX) * scaleY;
            ctx.lineTo(x + width / 2, y + height / 2);
            x++
        }
        ctx.stroke();
    }
}