var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
canvas.Width = 800;
canvas.Height = 500;

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
var y = (250 - 20);


//CREATE THE PLAYER
var player = function() {
  var ship = document.getElementById('ship');
  ctx.drawImage(ship, x, y, 45, 45);
};


//MOVE THE PLAYER AROUND THE CANVAS
 var movePlayer = function (event) {
  //UP
  if (event.keyCode === 38) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    y = y - 20;
  }
  //DOWN
  if (event.keyCode === 40) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    y = y + 20;
  }
  //LEFT
  if (event.keyCode === 37) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    x = x - 20;
  }
  //RIGHT
  if (event.keyCode === 39) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    x = x + 20;
  } 
};



//CREATES STATIC OBSTACLES
var staticObstacles = function() {
  var a = 550;
  var b = 300;
  var asteroid1 = document.getElementById('rock1');
  ctx.drawImage(asteroid1, a, b, 30, 30);

  var c = 350;
  var d = 100;
  var asteroid2 = document.getElementById('rock2');
  ctx.drawImage(asteroid2, c, d, 40, 40);

  var e = 150;
  var f = 250;
  var asteroid3 = document.getElementById('rock3');
  ctx.drawImage(asteroid3, e, f, 20, 20);

  var g = 350;
  var h = 100;
  var asteroid4 = document.getElementById('rock4');
  ctx.drawImage(asteroid4, g, h, 50, 50);
};

//OBSTACLE GENERATION SETTINGS PER LEVEL
var levels = [
  {
  ax: 790, ay:  25, adx:.75, ady:.25,
  bx: 790, by:  75, bdx: .5, bdy:  0,
  cx: 790, cy: 125, cdx:  2, cdy:.25,
  ex: 790, ey: 200, edx:  1, edy:  0,
  fx: 790, fy: 250, fdx:.75, fdy:.15,
  gx: 790, gy: 300, gdx: .5, gdy:.05,
  hx: 790, hy: 350, hdx:.75, hdy: .5,
  jx: 790, jy: 400, jdx:  1, jdy:  0,
  kx: 790, ky: 450, kdx:  1, kdy:.15,
  lx: 790, ly: 400, ldx:  1, ldy: .5,
  }
]; 


//CREATES MOVING OBSTICLES
var currentLevel = levels[0];

var levelOneMovingObstacles = function() {
  
  if (currentLevel.ax > 0 && currentLevel.ax < canvas.Width && currentLevel.ay > 0 && currentLevel.ay < canvas.Height) {
    var asteroid1 = document.getElementById('rock1');
    ctx.drawImage(asteroid1, currentLevel.ax, currentLevel.ay, 30, 30);
    currentLevel.ax -= currentLevel.adx;
    currentLevel.ay += currentLevel.ady;
  } 
  if (currentLevel.bx > 0 && currentLevel.bx < canvas.Width && currentLevel.by > 0 && currentLevel.by < canvas.Height) {
    var asteroid2 = document.getElementById('rock2');
    ctx.drawImage(asteroid2, currentLevel.bx, currentLevel.by, 20, 20);
    currentLevel.bx -= currentLevel.bdx;
    currentLevel.by += currentLevel.bdy; 
  }
  if (currentLevel.cx > 0 && currentLevel.cx < canvas.Width && currentLevel.cy > 0 && currentLevel.cy < canvas.Height) {
    var asteroid3 = document.getElementById('rock3');
    ctx.drawImage(asteroid3, currentLevel.cx, currentLevel.cy, 35, 35);
    currentLevel.cx -= currentLevel.cdx;
    currentLevel.cy += currentLevel.cdy; 
  }
    if (currentLevel.ex > 0 && currentLevel.ex < canvas.Width && currentLevel.ey > 0 && currentLevel.ey < canvas.Height) {
    var asteroid4 = document.getElementById('rock4');
    ctx.drawImage(asteroid4, currentLevel.ex, currentLevel.ey, 20, 20);
    currentLevel.ex -= currentLevel.edx;
    currentLevel.ey += currentLevel.edy;
  } 
    if (currentLevel.fx > 0 && currentLevel.fx < canvas.Width && currentLevel.fy > 0 && currentLevel.fy < canvas.Height) {
    var asteroid1 = document.getElementById('rock1');
    ctx.drawImage(asteroid1, currentLevel.fx, currentLevel.fy, 30, 30);
    currentLevel.fx -= currentLevel.fdx;
    currentLevel.fy -= currentLevel.fdy;
  } 
    if (currentLevel.gx > 0 && currentLevel.gx < canvas.Width && currentLevel.gy > 0 && currentLevel.gy < canvas.Height) {
    var asteroid2 = document.getElementById('rock2');
    ctx.drawImage(asteroid2, currentLevel.gx, currentLevel.gy, 20, 20);
    currentLevel.gx -= currentLevel.gdx;
    currentLevel.gy -= currentLevel.gdy; 
  }
    if (currentLevel.hx > 0 && currentLevel.hx < canvas.Width && currentLevel.hy > 0 && currentLevel.hy < canvas.Height) {
    var asteroid3 = document.getElementById('rock3');
    ctx.drawImage(asteroid3, currentLevel.hx, currentLevel.hy, 35, 35);
    currentLevel.hx -= currentLevel.hdx;
    currentLevel.hy -= currentLevel.hdy; 
  }
    if (currentLevel.jx > 0 && currentLevel.jx < canvas.Width && currentLevel.jy > 0 && currentLevel.jy < canvas.Height) {
    var asteroid4 = document.getElementById('rock4');
    ctx.drawImage(asteroid4, currentLevel.jx, currentLevel.jy, 40, 40);
    currentLevel.jx -= currentLevel.jdx;
    currentLevel.jy -= currentLevel.jdy;
  } 
   if (currentLevel.kx > 0 && currentLevel.kx < canvas.Width && currentLevel.ky > 0 && currentLevel.ky < canvas.Height) {
    var asteroid1 = document.getElementById('rock1');
    ctx.drawImage(asteroid1, currentLevel.kx, currentLevel.ky, 15, 15);
    currentLevel.kx -= currentLevel.kdx;
    currentLevel.ky -= currentLevel.kdy;
  }
   if (currentLevel.lx > 0 && currentLevel.lx < canvas.Width && currentLevel.ly > 0 && currentLevel.ly < canvas.Height) {
    var asteroid2 = document.getElementById('rock2');
    ctx.drawImage(asteroid2, currentLevel.lx, currentLevel.ly, 30, 30);
    currentLevel.lx -= currentLevel.ldx;
    currentLevel.ly -= currentLevel.ldy;
  }
};



//COLLISION DETECTION
var checkForCollision = function(x1, y1, x2, y2) {
  var xDistance = x2 - x1;
  var yDistance = y2 - y1;
  var dangerZone = Math.sqrt(Math.pow(xDistance, 2) + Math.pow(yDistance, 2));
  if (dangerZone < 20) {
    console.log ('crash!');
  }
  return dangerZone;
};


//ANIMATES THE WHOLE GAME
function animateGame() {
  requestAnimationFrame(animateGame);
  ctx.clearRect(0, 0, canvas.Width, canvas.Height);
  
  player();
  staticObstacles();
  levelOneMovingObstacles();
  
  checkForCollision(x, y, currentLevel.ax, currentLevel.ay);
  checkForCollision(x, y, currentLevel.bx, currentLevel.by);
  checkForCollision(x, y, currentLevel.cx, currentLevel.cy);
  checkForCollision(x, y, currentLevel.ex, currentLevel.ey);
  checkForCollision(x, y, currentLevel.fx, currentLevel.fy);
  checkForCollision(x, y, currentLevel.gx, currentLevel.gy);
  checkForCollision(x, y, currentLevel.hx, currentLevel.hy);
  checkForCollision(x, y, currentLevel.jx, currentLevel.jy);
  checkForCollision(x, y, currentLevel.kx, currentLevel.ky);
  checkForCollision(x, y, currentLevel.lx, currentLevel.ly);
  

  //CREATES THE MOVING STARS EFFECT
  var starsX = Math.random() * canvas.Width;
  var starsY = Math.random() * canvas.Height;
  ctx.fillStyle = 'White';
  ctx.fillRect(starsX, starsY, 2.5, 2.5);
  
};

animateGame();



