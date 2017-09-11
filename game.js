var canvas;
var ctx;
var x = 20;
var y = 250;


window.onload = function() {
  //ADD EVENT LISTENER TO CANVAS
  canvas = document.getElementById('canvas');
  canvas.addEventListener('keydown', movePlayer, true);
  ctx = canvas.getContext('2d');
  ctx.fillRect (20, 250, 30, 10);
  }

  //CREATE CIRCLE LATER
  // ctx.beginPath();
  // ctx.strokeStyle = '#fa34a3';
  // ctx.arc( 20, 250, 10, 0, Math.PI * 2, false);
  // ctx.stroke();

  
 var movePlayer = function (event) {
  console.log('in the movePlayer function')

  if (event.keyCode == 38) {
    console.log("key pressed!");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    y = y - 10;
    ctx.fillRect (x, y, 30, 10);
    // ctx.beginPath();
    // ctx.strokeStyle = '#fa34a3';
    // ctx.arc( x, y, 10, 0, Math.PI * 2, false);
    // ctx.stroke();
  };
  if (event.keyCode == 40) {
    console.log("key pressed!");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    y = y + 10;
    ctx.fillRect (x, y, 30, 10);
    // ctx.beginPath();
    // ctx.strokeStyle = '#fa34a3';
    // ctx.arc( x, y, 10, 0, Math.PI * 2, false);
    // ctx.stroke();
  };
  if (event.keyCode == 37) {
    console.log("key pressed!");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    x = x - 10;
    ctx.fillRect (x, y, 30, 10);
    // ctx.beginPath();
    // ctx.strokeStyle = '#fa34a3';
    // ctx.arc( x, y, 10, 0, Math.PI * 2, false);
    // ctx.stroke();
  };
  if (event.keyCode == 39) {
    console.log("key pressed!");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    x = x + 10;
    ctx.fillRect (x, y, 30, 10);
    // ctx.beginPath();
    // ctx.strokeStyle = '#fa34a3';
    // ctx.arc( x, y, 10, 0, Math.PI * 2, false);
    // ctx.stroke();
  };
}

