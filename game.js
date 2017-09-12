var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
canvas.Width = 500;
canvas.Height = 300;

window.onload = function(){
  startGame();
};


var startGame = function() {
  //ADD EVENT LISTENER TO CANVAS, GIVE CANVAS FOCUS, ADD PLAYER TO BOARD
  canvas.addEventListener('keydown', movePlayer, true);
  canvas.focus();
  player();
  };


//PLAYER START POSITION
var x = (20 - 20);
var y = (150 - 20);


//CREATE THE PLAYER
var player = function() {
  var ship = document.getElementById('ship');
  ctx.drawImage(ship, x, y, 40, 40);
};


//MOVE THE PLAYER AROUND THE CANVAS
 var movePlayer = function (event) {
  
  if (event.keyCode === 38) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    y = y - 20;
  }
  if (event.keyCode === 40) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    y = y + 20;
  }
  if (event.keyCode === 37) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    x = x - 20;
  }
  if (event.keyCode === 39) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    x = x + 20;
  } 
};


var levels = [{
  ax: 450, 
  ay: 50,
  bx: 450,
  by: 250,
  cx: 450,
  cy: 150,
  ex: 450, 
  ey: 250
}]; 


//CREATES STATIC OBSTACLES
var staticObstacles = function() {
  var a = 200;
  var b = 175;
  var asteroid1 = document.getElementById('rock1');
  ctx.drawImage(asteroid1, a, b, 30, 30);

  var c = 350;
  var d = 100;
  var asteroid2 = document.getElementById('rock2');
  ctx.drawImage(asteroid2, c, d, 40, 40);
};


//CREATES MOVING OBSTICLES
var currentLevel = levels[0];

var levelOneMovingObstacles = function() {
  if (currentLevel.ax > 0 && currentLevel.ax < canvas.Width) {
    var asteroid1 = document.getElementById('rock1');
    ctx.drawImage(asteroid1, currentLevel.ax, currentLevel.ay, 30, 30);
    currentLevel.ax -= 1;
  } 
  if (currentLevel.bx > 5 && currentLevel.by > 5) {
    var asteroid2 = document.getElementById('rock2');
    ctx.drawImage(asteroid2, currentLevel.bx, currentLevel.by, 30, 30);
    currentLevel.bx -= 1;
    currentLevel.by -= .5; 
  }
  if (currentLevel.cx > 5 && currentLevel.cy < 295) {
    var asteroid3 = document.getElementById('rock3');
    ctx.drawImage(asteroid3, currentLevel.cx, currentLevel.cy, 35, 35);
    currentLevel.cx -= .5;
    currentLevel.cy += .15; 
  }
  if (currentLevel.ex > 5) {
    var asteroid4 = document.getElementById('rock4');
    ctx.drawImage(asteroid4, currentLevel.ex, currentLevel.ey, 20, 20);
    currentLevel.ex -= 1;
  } 
};



//CHECK FOR A COLLISION
var checkForCollision = function(x1, y1, x2, y2) {
  var xDistance = x2 - x1;
  var yDistance = y2 - y1;
  var dngrZone = Math.sqrt(Math.pow(xDistance, 2) + Math.pow(yDistance, 2));
  if (dngrZone < 25) {
    console.log ('crash!');
  }
  return dngrZone;
};


//ANIMATES THE WHOLE GAME
function animateGame() {
  requestAnimationFrame(animateGame);
  ctx.clearRect(0, 0, canvas.Width, canvas.Height);
  
  player();
  staticObstacles();
  levelOneMovingObstacles();
  checkForCollision(x, y, currentLevel.ex, currentLevel.ey);
  checkForCollision(x, y, currentLevel.cx, currentLevel.cy);
  checkForCollision(x, y, currentLevel.bx, currentLevel.by);
  checkForCollision(x, y, currentLevel.ax, currentLevel.ay);

  //CREATES THE MOVING STARS EFFECT
  var starsX = Math.random() * canvas.Width;
  var starsY = Math.random() * canvas.Height;
  ctx.fillStyle = 'White';
  ctx.fillRect(starsX, starsY, 2.5, 2.5);
  
};

//animateGame();



