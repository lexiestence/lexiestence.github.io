function drawGraph() {
    var canvas = document.getElementById("graph");

    function drawScale() {
        ctx.clearRect(0, 0, width, height)

        ctx.strokeStyle = "Black";

        ctx.beginPath();
        ctx.moveTo(0, height / 2);
        ctx.lineTo(width, height / 2);
        ctx.stroke();

        ctx.beginPath()
        ctx.moveTo(width / 2, 0);
        ctx.lineTo(width / 2, height);
        ctx.stroke();
    }

    function drawSine() {
        ctx.strokeStyle = "Red";

        ctx.beginPath();
        while (x <= width / 2) {
            y = (-Math.sin((x + panX) / scaleX) * scaleY)+panY;
            ctx.lineTo(x + width / 2, y + height / 2);
            x++
        }
        ctx.stroke();
    }

    function drawCosine(){
        ctx.strokeStyle = "Blue";

        x = -(width / 2);

        ctx.beginPath();
        while (x <= width / 2) {
            y = (-Math.cos((x + panX) / scaleX) * scaleY)+panY;
            ctx.lineTo(x + width / 2, y + height / 2);
            x++
        }
        ctx.stroke();
    }

    if (canvas.getContext) {
        var width = canvas.width;
        var height = canvas.height;

        var x = -(width / 2);
        var y;

        var ctx = canvas.getContext("2d");

        var scaleX = parseInt(document.getElementById("scaleX").value);
        document.getElementById("outX").innerHTML = scaleX;
        var scaleY = parseInt(document.getElementById("scaleY").value);
        document.getElementById("outY").innerHTML = scaleY;
        var panX = parseInt(document.getElementById("panX").value);
        document.getElementById("outPanX").innerHTML = panX;
        var panY = parseInt(document.getElementById("panY").value);
        document.getElementById("outPanY").innerHTML = panY;

        drawScale();
        drawSine();
        drawCosine();
    }
}