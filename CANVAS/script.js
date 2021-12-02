//GETTING THE CANVAS
const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');

//console.log(ctx);
canvas.width = window.innerWidth;
canvas.height= window.innerHeight;

//DRAWING A RECTANGLE
window.addEventListener('resize', function(){
    canvas.width = window.innerWidth;
    canvas.height= window.innerHeight;
    ctx.fillStyle = 'white';
    ctx.fillRect(10,10,50,50);
})

ctx.fillStyle = 'white';
ctx.fillRect(10,10,50,50);
//DRAWING A CIRCLE



ctx.fillStyle = 'red';

ctx.strokeStyle='red';
ctx.lineWidth=5;
ctx.beginPath();
ctx.arc(100,100,50,0, Math.PI*2);
ctx.fill();
ctx.stroke();

