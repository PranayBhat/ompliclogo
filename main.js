function Start(){document.getElementById("start_button").style.display="none";
document.getElementById("clear_button").style.display="inline-block";
document.getElementById("firstCanvas").style.display="inline-block";}

canvas=document.getElementById("firstCanvas");
ctx=canvas.getContext("2d");
canvas.addEventListener("click", my_notepadlick);
function my_notepadlick(e){ color = document.getElementById("color1").value;
touchpadlick_x = e.clientX - canvas.offsetLeft;
touchpadlick_y = e.clientY - canvas.offsetTop;
circle(touchpadlick_x,touchpadlick_y);}
function circle(touchpadlick_x,touchpadlick_y)
{ctx.beginPath(); 
ctx.strokeStyle = color;
ctx.arc(touchpadlick_x, touchpadlick_y,50,0 , 2*Math.PI);
ctx.stroke();}

function _clear(){ console.log("HI"); 
ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
ctx2.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
ctx3.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}      