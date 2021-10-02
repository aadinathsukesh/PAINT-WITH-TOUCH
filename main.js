var mouseEvent= "empty";
console.log(mouseEvent);
canvas= document.getElementById("myCanvas");
ctx= canvas.getContext("2d");
color= "red";
width_of_line= 5;
document.getElementById("color_input").value=color;
document.getElementById("width_input").value=width_of_line;
var last_position_X, last_position_Y;
canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e){
      
    color=document.getElementById("color_input").value;
    width_of_line=document.getElementById("width_input").value;
    console.log(color,width_of_line);
    mouseEvent= "mousedown"
    console.log(mouseEvent);
}

canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e){

    mouseEvent= "mouseup"
    console.log(mouseEvent);
}

canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(e){

    mouseEvent= "mouseleave"
    console.log(mouseEvent);
}

canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e){

    current_position_X= e.clientX - canvas.offsetLeft;
    current_position_Y= e.clientY - canvas.offsetTop;

    if (mouseEvent == "mousedown" ){
        console.log("mousedown + mousemove")
        ctx.beginPath();
        ctx.strokeStyle= color;
        ctx.lineWidth= width_of_line;
        ctx.moveTo(last_position_X,last_position_Y);
        console.log("last position coordinates are- " + last_position_X+ "," + last_position_Y);
        ctx.lineTo(current_position_X,current_position_Y);
        console.log("current position coordinates are- " + current_position_X+ "," + current_position_Y);
        ctx.stroke();
   
    }
last_position_X= current_position_X;
last_position_Y= current_position_Y;
}

width_of_screen= screen.width;

new_width= screen.width - 100;
new_height= screen.height - 250;
if (width_of_screen<992){
  document.getElementById("myCanvas").width= new_width;
  document.getElementById("myCanvas").height= new_height;
  document.body.style.overflow="hidden";
}


canvas.addEventListener("touchstart", my_touchstart);
function my_touchstart(e){

    color = document.getElementById("color_input").value;
    width_of_line = document.getElementById("width_input").value;


    last_position_of_x = e.touches[0].clientX - canvas.offsetLeft;
    last_position_of_y = e.touches[0].clientY - canvas.offsetTop;

}

canvas.addEventListener("touchmove", my_touchmove);
function my_touchmove(e)
{

     current_position_of_touch_x = e.touches[0].clientX - canvas.offsetLeft;
     current_position_of_touch_y = e.touches[0].clientY - canvas.offsetTop;

    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = width_of_line;
    ctx.moveTo(last_position_of_x, last_position_of_y);
    ctx.lineTo(current_position_of_touch_x, current_position_of_touch_y);
    ctx.stroke();

    last_position_of_x = current_position_of_touch_x; 
    last_position_of_y = current_position_of_touch_y;
}


 function clearArea(){
      ctx.clearRect(0, 0, canvas.width, canvas.height);
 }
