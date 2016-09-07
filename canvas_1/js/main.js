window.onload=function () {

    canvas();

};

function canvas() {
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    ctx.beginPath();
    ctx.fillStyle="orange";
    ctx.arc(200,100,50,0,360*Math.PI,true);
    ctx.fill();
    ctx.stroke();
    ctx.fillStyle="red";
    ctx.fillRect(50,50,100,100);

}