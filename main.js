canvas= document.getElementById("mycanvas");
ctx = canvas.getcontext("2d");
color= "red";
ctx.beginpath();
ctx.strokeStyle = color;
ctx.lineWidth = 2;
ctx.arc(200,200,40,0,2*Math.PI);
ctx.stroke();
canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e) {
    color= document.getElementById("color").value;
    console.log(color);
    mouse_x= e.clintX - canvas.offsetLeft;
    mouse_y= e.clintY - canvas.offsetTop;
    console.log("X= " + mouse_x + "Y= " + mouse_y );
    circle(mouse_x, mouse_y);
}
