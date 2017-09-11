var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

canvas.Width = 500;
canvas.Height = 300;

window.onload = function(){
  startGame();
};

var startGame = function() {
  //ADD EVENT LISTENER TO CANVAS, GIVE CANVAS FOCUS, 
  canvas.addEventListener('keydown', movePlayer, true);
  canvas.focus();
  player();
  obsticle();
  };

var x = 20;
var y = 150;


//CREATE THE PLAYER
var player = function() {
  ctx.beginPath();
  ctx.arc( x, y, 10, 0, Math.PI * 2, false);
  ctx.strokeStyle = '#fa34a3';
  ctx.stroke();
  obsticle();
};


//CREATE A STATIC OBSTICLE
var obsticle = function() {
  var bx = 100;
  var by = 200;
  ctx.fillStyle = 'blue';
  ctx.fillRect(bx, by, 20, 20);
};

//MOVE THE PLAYER AROUND THE CANVAS
 var movePlayer = function (event) {
  
  if (event.keyCode === 38) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    obsticle();
    y = y - 15;
    ctx.beginPath();
    ctx.arc( x, y, 10, 0, Math.PI * 2, false);
    ctx.strokeStyle = '#fa34a3';
    ctx.stroke();
  }
  if (event.keyCode === 40) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    obsticle();
    y = y + 15;
    ctx.beginPath();
    ctx.arc( x, y, 10, 0, Math.PI * 2, false);
    ctx.strokeStyle = '#fa34a3';
    ctx.stroke();
  }
  if (event.keyCode === 37) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    obsticle();
    x = x - 15;
    ctx.beginPath();
    ctx.arc( x, y, 10, 0, Math.PI * 2, false);
    ctx.strokeStyle = '#fa34a3';
    ctx.stroke();
  }
  if (event.keyCode === 39) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    obsticle();
    x = x + 15;
    ctx.beginPath();
    ctx.arc( x, y, 10, 0, Math.PI * 2, false);
    ctx.strokeStyle = '#fa34a3';
    ctx.stroke();
  } 
};

//MAKE A MOVING OBSTICLE
var ax = 100;
var ay = 100;
var dx = 1;
var dy = 1;
var radius = 10;
function animate() {
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, canvas.Width, canvas.Height);
    player();
    ctx.beginPath();
    ctx.arc( ax, ay, radius, 0, Math.PI * 2, false);
    ctx.strokeStyle = '#fa34a3';
    ctx.stroke();
    if (ax + radius > canvas.Width || ax - radius < 0) {
        dx = -dx;
    }
    if ( ay + radius > canvas.Height || ay - radius < 0) {
        dy = -dy
    }
    ax += dx;
    ay += dy;
}
animate();




