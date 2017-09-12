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
  staticObstacles();
  };

//PLAYER START POSITION
var x = 20;
var y = 150;

//CREATE THE PLAYER
var player = function() {
  ctx.beginPath();
  ctx.arc( x, y, 10, 0, Math.PI * 2, false);
  ctx.strokeStyle = '#fa34a3';
  ctx.stroke();
  staticObstacles();
};

//MOVE THE PLAYER AROUND THE CANVAS
 var movePlayer = function (event) {
  
  if (event.keyCode === 38) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    staticObstacles();
    y = y - 10;
    ctx.beginPath();
    ctx.arc( x, y, 10, 0, Math.PI * 2, false);
    ctx.strokeStyle = '#fa34a3';
    ctx.stroke();
  }
  if (event.keyCode === 40) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    staticObstacles();
    y = y + 10;
    ctx.beginPath();
    ctx.arc( x, y, 10, 0, Math.PI * 2, false);
    ctx.strokeStyle = '#fa34a3';
    ctx.stroke();
  }
  if (event.keyCode === 37) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    staticObstacles();
    x = x - 10;
    ctx.beginPath();
    ctx.arc( x, y, 10, 0, Math.PI * 2, false);
    ctx.strokeStyle = '#fa34a3';
    ctx.stroke();
  }
  if (event.keyCode === 39) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    staticObstacles();
    x = x + 10;
    ctx.beginPath();
    ctx.arc( x, y, 10, 0, Math.PI * 2, false);
    ctx.strokeStyle = '#fa34a3';
    ctx.stroke();
  } 
};

//CREATE SOME STATIC OBSTACLES
var staticObstacles = function() {
  var a = 100;
  var b = 200;
  ctx.fillStyle = 'yellow';
  ctx.fillRect(a, b, 20, 20);

  var c = 350;
  var d = 75;
  ctx.fillStyle = 'yellow';
  ctx.fillRect(c, d, 30, 30);
};


//CREATE SOME MOVING OBSTICLES
var ax = 450
var ay = 250;
var bx = 450;
var by = 150;
var cx = 450;
var cy = 100;


function animateGame() {
  requestAnimationFrame(animateGame);
  ctx.clearRect(0, 0, canvas.Width, canvas.Height);
  player();

  var starsX = Math.random() * canvas.Width;
  var starsY = Math.random() * canvas.Height;
  ctx.fillStyle = 'White';
  ctx.fillRect(starsX, starsY, 2, 2);
  

  if (ax > 5) {
    ctx.fillStyle = 'yellow';
    ctx.fillRect(ax, ay, 20, 20);
    ax -= 1;
  }
  if (bx > 5 && by > 5) {
    ctx.fillStyle = 'yellow';
    ctx.fillRect(bx, by, 20, 20);
    bx -= .5;
    by -= .15; 
  }
  if (cx > 5 && cy < 295) {
    ctx.fillStyle = 'yellow';
    ctx.fillRect(cx, cy, 20, 20);
    cx -= 1;
    cy += .15; 
  }

  
  


// other future obsticles

}

//animateGame();




