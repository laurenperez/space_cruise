var canvas;
var ctx;
var x = 20;
var y = 150;


window.onload = function() {
  //ADD EVENT LISTENER TO CANVAS
  canvas = document.getElementById('canvas');
  canvas.addEventListener('keydown', movePlayer, true);
  canvas.focus();
  ctx = canvas.getContext('2d');
  
  //CREATE FIRST CIRCLE
  ctx.beginPath();
  ctx.arc( 20, 150, 10, 0, Math.PI * 2, false);
  ctx.strokeStyle = '#fa34a3';
  ctx.stroke();
  }

  //CREATE CIRCLE LATER
  

 var movePlayer = function (event) {

  if (event.keyCode == 38) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    y = y - 10;
    ctx.beginPath();
    ctx.arc( x, y, 10, 0, Math.PI * 2, false);
    ctx.strokeStyle = '#fa34a3';
    ctx.stroke();
  };
  if (event.keyCode == 40) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    y = y + 10;
    ctx.beginPath();
    ctx.arc( x, y, 10, 0, Math.PI * 2, false);
    ctx.strokeStyle = '#fa34a3';
    ctx.stroke();
  };
  if (event.keyCode == 37) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    x = x - 10;
    ctx.beginPath();
    ctx.arc( x, y, 10, 0, Math.PI * 2, false);
    ctx.strokeStyle = '#fa34a3';
    ctx.stroke();
  };
  if (event.keyCode == 39) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    x = x + 10;
    ctx.beginPath();
    ctx.arc( x, y, 10, 0, Math.PI * 2, false);
    ctx.strokeStyle = '#fa34a3';
    ctx.stroke();
  };
}

