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

var levelOne = [
  {thing: 'asteroid1', img: 'rock1', x: 790, y: Math.random() * 500, dx: -.35, dy: .12, width: 30, height: 30},
  {thing: 'asteroid2', img: 'rock2', x: 790, y: Math.random() * 500, dx: -.25, dy:   0, width: 20, height: 20},
  {thing: 'asteroid3', img: 'rock3', x: 790, y: Math.random() * 500, dx:   -1, dy: .12, width: 35, height: 35},
  {thing: 'asteroid4', img: 'rock4', x: 790, y: Math.random() * 500, dx:  -.5, dy:   0, width: 20, height: 20},
  {thing: 'asteroid1', img: 'rock1', x: 790, y: Math.random() * 500, dx: -.25, dy: .07, width: 30, height: 30},
  {thing: 'asteroid2', img: 'rock2', x: 790, y: Math.random() * 500, dx:  -.5, dy:-.25, width: 20, height: 20},
  {thing: 'asteroid3', img: 'rock3', x: 790, y: Math.random() * 500, dx: -.35, dy:-.07, width: 35, height: 35},
  {thing: 'asteroid4', img: 'rock4', x: 790, y: Math.random() * 500, dx:  -.5, dy:  -0, width: 40, height: 40},
  {thing: 'asteroid1', img: 'rock1', x: 790, y: Math.random() * 500, dx:   -1, dy:-.07, width: 15, height: 15},
  {thing: 'asteroid2', img: 'rock2', x: 790, y: Math.random() * 500, dx:  -.5, dy:-.25, width: 30, height: 30},
]; 

var levelTwo = [
  {thing: 'asteroid1', img: 'rock1', x: 790, y: Math.random() * 500, dx: -.35, dy: .12, width: 30, height: 30},
  {thing: 'asteroid2', img: 'rock2', x: 790, y: Math.random() * 500, dx: -.25, dy:   0, width: 20, height: 20},
  {thing: 'asteroid3', img: 'rock3', x: 790, y: Math.random() * 500, dx:   -1, dy: .12, width: 35, height: 35},
  {thing: 'asteroid4', img: 'rock4', x: 790, y: Math.random() * 500, dx:  -.5, dy:   0, width: 20, height: 20},
  {thing: 'asteroid1', img: 'rock1', x: 790, y: Math.random() * 500, dx: -.35, dy:   0, width: 30, height: 30},
  {thing: 'asteroid2', img: 'rock2', x: 790, y: Math.random() * 500, dx: -.25, dy:   0, width: 20, height: 20},
  {thing: 'asteroid3', img: 'rock3', x: 790, y: Math.random() * 500, dx:   -1, dy:   0, width: 35, height: 35},
  {thing: 'asteroid4', img: 'rock4', x: 790, y: Math.random() * 500, dx:  -.5, dy:   0, width: 20, height: 20},
  {thing: 'asteroid1', img: 'rock1', x: 790, y: Math.random() * 500, dx: -.25, dy: .07, width: 30, height: 30},
  {thing: 'asteroid2', img: 'rock2', x: 790, y: Math.random() * 500, dx:  -.5, dy:-.25, width: 20, height: 20},
  {thing: 'asteroid3', img: 'rock3', x: 790, y: Math.random() * 500, dx: -.35, dy:-.07, width: 35, height: 35},
  {thing: 'asteroid4', img: 'rock4', x: 790, y: Math.random() * 500, dx:  -.5, dy:  -0, width: 40, height: 40},
  {thing: 'asteroid1', img: 'rock1', x: 790, y: Math.random() * 500, dx:  -.5, dy:-.07, width: 15, height: 15},
  {thing: 'asteroid2', img: 'rock2', x: 790, y: Math.random() * 500, dx:  -.5, dy:-.25, width: 30, height: 30},
]; 

//CREATES MOVING OBSTICLES
//var currentLevel = levelOne[i];

var levelOneMovingObstacles = function() {
  for (var i = 0; i < levelOne.length; i++) {
    if (levelOne[i].x > 0 && levelOne[i].x < canvas.Width && levelOne[i].y > 0 && levelOne[i].y < canvas.Height) {
      var asteroid = document.getElementById(levelOne[i].img);
      ctx.drawImage(asteroid, levelOne[i].x, levelOne[i].y, levelOne[i].width, levelOne[i].height);
      levelOne[i].x += levelOne[i].dx;
      levelOne[i].y += levelOne[i].dy;
    } 
  }
};

var levelTwoMovingObstacles = function() {
  for (var i = 0; i < levelTwo.length; i++) {
    if (levelTwo[i].x > 0 && levelTwo[i].x < canvas.Width && levelTwo[i].y > 0 && levelTwo[i].y < canvas.Height) {
      var asteroid = document.getElementById(levelTwo[i].img);
      ctx.drawImage(asteroid, levelTwo[i].x, levelTwo[i].y, levelTwo[i].width, levelTwo[i].height);
      levelTwo[i].x += levelTwo[i].dx;
      levelTwo[i].y += levelTwo[i].dy;
    } 
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
  // levelOneMovingObstacles();
  levelTwoMovingObstacles()
  
  // for (var i = 0; i < levelOne.length; i++){
  // checkForCollision(x, y, levelOne[i].x, levelOne[i].y);
  // }
  
  for (var i = 0; i < levelTwo.length; i++){
  checkForCollision(x, y, levelTwo[i].x, levelTwo[i].y);
  }

  

  //CREATES THE MOVING STARS EFFECT
  var starsX = Math.random() * canvas.Width;
  var starsY = Math.random() * canvas.Height;
  ctx.fillStyle = 'White';
  ctx.fillRect(starsX, starsY, 2.5, 2.5);
  
};

animateGame();



