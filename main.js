var mouse_event ="empty";
var last_position_x,last_position_y 
var canvas =  document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var color = "black" ;
var width_of_line = 1 ;

canvas.addEventListener("mousedown" , my_mousedown);

function my_mousedown(e)
{
mouse_event = "mousedown" ;


}

canvas.addEventListener("mouseup" , my_mouseup );

function my_mouseup(e) 
{
mouse_event = "mouseup" ;
}
canvas.addEventListener("mouseleave",my_mouseleve);
function my_mouseleve(e)
{
mouse_event = "mouseleave";

}
canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e)
{

current_position_of_mouse_x = e.clientX - canvas.offsetLeft ;
current_position_of_mouse_y = e.clientY - canvas.offsetTop ;


if (mouse_event=="mousedown")
{
ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = width_of_line;
console.log("last_postion_of_x and last_postion_of_y");
console.log("x="+last_position_x+" y="+last_position_y);
ctx.moveTo(last_position_x,last_position_y);

console.log("current_position_of_x and current_position_of_y");
console.log("x="+current_position_of_mouse_x+" y="+current_position_of_mouse_y);
ctx.lineTo(current_position_of_mouse_x,current_position_of_mouse_y);
ctx.stroke();
}
last_position_x=current_position_of_mouse_x;
last_position_y=current_position_of_mouse_y;
}
