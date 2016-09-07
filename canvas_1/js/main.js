window.onload=function () {

    canvas();

};

function canvas() {
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    ctx.beginPath();
    ctx.arc(100,100,50,0,360*Math.PI,true);
    ctx.clip();
    ctx.fillStyle="red";
    ctx.fillRect(100,100,25,25);

}