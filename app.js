const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d");

canvas.width = 500;
canvas.height = 500;
//default setting of ctx

ctx.strokeStyle = "2c2c2c10";
ctx.fillStyle = "2c2c2c";
ctx.lineWidth = 1;

let painting = false;

function onMouseMove(event) {
    const x = event.offsetX;
    const y = event.offsetY;

    if(!painting){
        console.log("creating path", x, y);
        //ctx.beginPath();
        ctx.moveTo(x, y);
    }else{
        console.log("creating line", x, y);
        ctx.lineTo(x, y);
        ctx.stroke();
    }
}

function startPainting() {
    painting = true;
}

function stopPainting() {
    painting = false;
}

function onMouseDown(event) {
    painting = true;
}

if(canvas) {
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mousedown", startPainting);
    canvas.addEventListener("mouseup", stopPainting);
    canvas.addEventListener("mouseleave", stopPainting);
}