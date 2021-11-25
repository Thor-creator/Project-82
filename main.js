canvas = document.getElementById("mycanvas")
ctx = canvas.getContext("2d")

mouseevent = "empty";
var last_position_of_x, last_position_of_y;
color = "black"
width = 1;

canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e){
    color = document.getElementById("color").value
    width = document.getElementById("width").value
    radius = document.getElementById("radius").value
    mouseevent = "mousedown";
}

canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e){
    mouseevent = "mouseup";
}

canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(e){
    mouseevent = "mouseleave";
}

canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e){
    current_position_of_mouse_x = e.clientX-canvas.offsetLeft;
    current_position_of_mouse_y = e.clientY-canvas.offsetTop;
if (mouseevent=="mousedown"){
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = width;
    ctx.arc(current_position_of_mouse_x ,current_position_of_mouse_y, radius, 0, 2 * Math.PI );
    ctx.stroke();
}
last_position_of_x = current_position_of_mouse_x
last_position_of_y = current_position_of_mouse_y
}

function cleararea(){
ctx.clearRect(0, 0, canvas.width, canvas.height)
}
