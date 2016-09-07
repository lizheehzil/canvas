window.onload=function () {

    canvas();

};

function canvas() {
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    
    
    ctx.beginPath();
    ctx.moveTo(23,50);
    ctx.lineTo(100,200);
    ctx.stroke();

    ctx.beginPath();
    ctx.fontStyle="blue";
    ctx.lineWidth=20;
    ctx.strokeStyle="blue";
    ctx.moveTo(23,100);
    ctx.lineTo(200,100);
    ctx.stroke();

    ctx.beginPath();
    ctx.fillStyle="red";
    ctx.fillRect(100,100,500,100);

    //创建一个图片的实例
    var img=new Image();
    img.src="../image/1.jpg";
    img.onload=function(){
        ctx.drawImage(img,10,10,300,300,50,5,200,50);
    };

    //画个圆
    ctx.lineWidth=2;
    ctx.arc(100,100,50,0,360*Math.PI/2,true);

    ctx.stroke();

    //画个实行正放心
    ctx.fillRect(50,80,100,100);

    //在画条线
    ctx.beginPath();
    ctx.strokeStyle="black";
    ctx.moveTo(100,100);
    ctx.lineTo(100,300);
    ctx.stroke();

}