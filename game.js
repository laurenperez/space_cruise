var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
canvas.Width = 800;
canvas.Height = 500;
//var gameInPlay = true;
var crash = false;
var level = 1;
var gameSpeed = 20;

window.onload = function(){
  startGame();
};

//START ADDS EVENT LISTENER TO CANVAS & GIVES CANVAS FOCUS
var startGame = function() { 
  canvas.addEventListener('keydown', movePlayer, true);
  canvas.focus();
  };

//PLAYER START POSITION
var x = (20 - 20);
var y = (250 - 20);


//CREATE THE PLAYER
var player = function() {
  if (crash === false) {
    var ship = document.getElementById('ship'); 
    ctx.drawImage(ship, x, y, 45, 45);
    } else { 
    var explosion = document.getElementById('ship');
    explosion.src = "img/explosion.png";
    ctx.drawImage(explosion, x, y, 45, 45);
  }
};


//MOVE THE PLAYER AROUND THE CANVAS
 var movePlayer = function (event) {
  if (crash === false) {
    //UP
    if (event.keyCode === 38) {
      y = y - 15;
    }
    //DOWN
    if (event.keyCode === 40) {
      y = y + 15;
    }
    //LEFT
    if (event.keyCode === 37) {
      x = x - 15;
    }
    //RIGHT
    if (event.keyCode === 39) {
      x = x + 15;
    } 
  }
};

//STATIC OBSTACLE GENERATION SETTINGS PER LEVEL
var staticOne = [
  {thing: 'asteroid1', img: 'rock1', x: 550, y: 300, width: 30, height: 30},
  {thing: 'asteroid2', img: 'rock2', x: 350, y: 100, width: 40, height: 40},
  {thing: 'asteroid3', img: 'rock3', x: 150, y: 250, width: 20, height: 20},
  {thing: 'asteroid4', img: 'rock4', x: 200, y: 400, width: 50, height: 50},
  ];

var staticTwo = [
  {thing: 'asteroid1', img: 'rock1', x: 550, y: 300, width: 30, height: 30},
  {thing: 'asteroid2', img: 'rock2', x: 350, y: 200, width: 40, height: 40},
  {thing: 'asteroid3', img: 'rock3', x: 150, y: 250, width: 20, height: 20},
  {thing: 'asteroid4', img: 'rock4', x: 200, y: 300, width: 50, height: 50},
  {thing: 'asteroid1', img: 'rock1', x: 120, y: 425, width: 30, height: 30},
  {thing: 'asteroid2', img: 'rock2', x: 280, y: 100, width: 40, height: 40},
  {thing: 'asteroid3', img: 'rock3', x: 450, y:  50, width: 20, height: 20},
  {thing: 'asteroid4', img: 'rock4', x: 600, y: 400, width: 50, height: 50},
  ];

var staticThree = [
  {thing: 'asteroid1', img: 'rock1', x: 550, y: 400, width: 30, height: 30},
  {thing: 'asteroid2', img: 'rock2', x: 280, y: 200, width: 40, height: 40},
  {thing: 'asteroid3', img: 'rock3', x: 150, y: 250, width: 20, height: 20},
  {thing: 'asteroid4', img: 'rock4', x: 200, y: 400, width: 50, height: 50},
  {thing: 'asteroid1', img: 'rock1', x: 120, y: 325, width: 30, height: 30},
  {thing: 'asteroid2', img: 'rock2', x: 350, y: 100, width: 40, height: 40},
  {thing: 'asteroid3', img: 'rock3', x: 450, y:  50, width: 20, height: 20},
  {thing: 'asteroid4', img: 'rock4', x: 600, y: 300, width: 50, height: 50},
  ];


//CREATES STATIC OBSTACLES
var staticObstacles = function(staticLevel) {
  for (var i = 0; i < staticLevel.length; i++) {
    var asteroid = document.getElementById(staticLevel[i].img);
    ctx.drawImage(asteroid, staticLevel[i].x, staticLevel[i].y, staticLevel[i].width, staticLevel[i].height);
  }
};


//MOVING OBSTACLE GENERATION SETTINGS PER LEVEL
var movingOne = [
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

var movingTwo = [
  {thing: 'asteroid1', img: 'rock1', x: 790, y: Math.random() * 500, dx: -.35, dy: .12, width: 30, height: 30},
  {thing: 'asteroid2', img: 'rock2', x: 550, y: Math.random() * 500, dx:  -.5, dy:  .5, width: 20, height: 20},
  {thing: 'asteroid3', img: 'rock3', x: 790, y: Math.random() * 500, dx:   -2, dy:-.12, width: 35, height: 35},
  {thing: 'asteroid4', img: 'rock4', x: 550, y: Math.random() * 500, dx:  -.5, dy:   0, width: 20, height: 20},
  {thing: 'asteroid1', img: 'rock1', x: 790, y: Math.random() * 500, dx: -.35, dy:   0, width: 30, height: 30},
  {thing: 'asteroid2', img: 'rock2', x: 550, y: Math.random() * 500, dx:  -.5, dy:   0, width: 20, height: 20},
  {thing: 'asteroid3', img: 'rock3', x: 790, y: Math.random() * 500, dx:   -2, dy:   0, width: 35, height: 35},
  {thing: 'asteroid4', img: 'rock4', x: 550, y: Math.random() * 500, dx:  -.5, dy:   0, width: 20, height: 20},
  {thing: 'asteroid1', img: 'rock1', x: 790, y: Math.random() * 500, dx:  -.5, dy: .07, width: 30, height: 30},
  {thing: 'asteroid2', img: 'rock2', x: 550, y: Math.random() * 500, dx:  -.5, dy:-.25, width: 20, height: 20},
  {thing: 'asteroid3', img: 'rock3', x: 790, y: Math.random() * 500, dx: -.35, dy:-.07, width: 35, height: 35},
  {thing: 'asteroid4', img: 'rock4', x: 790, y: Math.random() * 500, dx:   -1, dy:   0, width: 40, height: 40},
  {thing: 'asteroid1', img: 'rock1', x: 550, y: Math.random() * 500, dx:  -.5, dy:-.07, width: 15, height: 15},
  {thing: 'asteroid2', img: 'rock2', x: 790, y: Math.random() * 500, dx:  -.5, dy:-.25, width: 30, height: 30},
  {thing: 'alien1', img:'alien1', x: 790, y: 150, dx: -1, dy:   0, width: 30, height: 30},
  {thing: 'alien2', img:'alien2', x: 790, y: 350, dx:-.5, dy:-.15, width: 40, height: 40},
]; 

var movingThree = [
  {thing: 'asteroid1', img: 'rock1', x: 790, y: Math.random() * 500, dx: -.35, dy:   0, width: 30, height: 30},
  {thing: 'asteroid2', img: 'rock2', x: 550, y: Math.random() * 500, dx:  -.5, dy:   1, width: 20, height: 20},
  {thing: 'asteroid3', img: 'rock3', x: 790, y: Math.random() * 500, dx:   -2, dy:   0, width: 35, height: 35},
  {thing: 'asteroid4', img: 'rock4', x: 550, y: Math.random() * 500, dx:  -.5, dy:-.12, width: 20, height: 20},
  {thing: 'asteroid1', img: 'rock1', x: 790, y: Math.random() * 500, dx: -.35, dy:   0, width: 35, height: 35},
  {thing: 'asteroid2', img: 'rock2', x: 550, y: Math.random() * 500, dx:  -.5, dy: -.5, width: 20, height: 20},
  {thing: 'asteroid3', img: 'rock3', x: 790, y: Math.random() * 500, dx:   -2, dy:   0, width: 35, height: 35},
  {thing: 'asteroid4', img: 'rock4', x: 550, y: Math.random() * 500, dx:  -.5, dy:  -1, width: 25, height: 25},
  {thing: 'asteroid1', img: 'rock1', x: 790, y: Math.random() * 500, dx:  -.5, dy: .07, width: 30, height: 30},
  {thing: 'asteroid2', img: 'rock2', x: 550, y: Math.random() * 500, dx:  -.5, dy:   1, width: 20, height: 20},
  {thing: 'asteroid3', img: 'rock3', x: 790, y: Math.random() * 500, dx: -.35, dy:-.07, width: 35, height: 35},
  {thing: 'asteroid4', img: 'rock4', x: 790, y: Math.random() * 500, dx:   -1, dy:   0, width: 40, height: 40},
  {thing: 'asteroid1', img: 'rock1', x: 790, y: Math.random() * 500, dx:  -.5, dy:   1, width: 35, height: 35},
  {thing: 'asteroid2', img: 'rock2', x: 550, y: Math.random() * 500, dx:  -.5, dy:-.25, width: 20, height: 20},
  {thing: 'asteroid3', img: 'rock3', x: 790, y: Math.random() * 500, dx: -.35, dy:  -2, width: 35, height: 35},
  {thing: 'asteroid4', img: 'rock4', x: 790, y: Math.random() * 500, dx:   -1, dy:   0, width: 40, height: 40},
  {thing: 'asteroid1', img: 'rock1', x: 550, y: Math.random() * 500, dx:  -.5, dy:  -1, width: 15, height: 15},
  {thing: 'asteroid2', img: 'rock2', x: 790, y: Math.random() * 500, dx:  -.5, dy:-.25, width: 30, height: 30},
  {thing: 'alien1', img:'alien1', x: 790, y: 150, dx: -1, dy:   0, width: 30, height: 30},
  {thing: 'alien2', img:'alien2', x: 790, y: 350, dx:-.5, dy:-.15, width: 20, height: 20},
  {thing: 'alien1', img:'alien1', x: 790, y: 250, dx: -2, dy: -.5, width: 30, height: 30},
]; 


//CREATES MOVING OBSTICLES

var movingObstacles = function(movingLevel) {
  for (var i = 0; i < movingLevel.length; i++) {
    if (movingLevel[i].x > 0 && movingLevel[i].x < canvas.Width && movingLevel[i].y > 0 && movingLevel[i].y < canvas.Height) {
      var asteroid = document.getElementById(movingLevel[i].img);
      ctx.drawImage(asteroid, movingLevel[i].x, movingLevel[i].y, movingLevel[i].width, movingLevel[i].height);
      movingLevel[i].x += movingLevel[i].dx;
      movingLevel[i].y += movingLevel[i].dy;
    } 
  }
};

//COLLISION DETECTION
var collisionDetection = function(x1, y1, x2, y2) {
  var xDistance = (x2 - 10) - x1;
  var yDistance = (y2 - 10) - y1;
  var dngrZone = Math.sqrt(Math.pow(xDistance, 2) + Math.pow((yDistance), 2));
  if (dngrZone < 28) {
    crash = true;
  }
};

var checkForCollision = function(level){
  for (var i = 0; i < level.length; i++) {
    collisionDetection(x, y, level[i].x, level[i].y);
    if (crash === true) {
      gameOver();
    }
  }
};


//GAME LOOP
var gameLoop = function() {
  //CLEAR THE CANVAS
  ctx.clearRect(0, 0, canvas.Width, canvas.Height);
  
  //CREATES THE MOVING STARS EFFECT
  var starsX = Math.random() * canvas.Width;
  var starsY = Math.random() * canvas.Height;
  ctx.fillStyle = 'White';
  ctx.fillRect(starsX, starsY, 3, 3);
  
  //DRAW OBSTACLES IN THIS ORDER FOR LAYERS OF CANVAS
  if (level === 1) {
    staticObstacles(staticOne);
    movingObstacles(movingOne)
  } else if (level === 2) {
    staticObstacles(staticTwo);
    movingObstacles(movingTwo)
  } else if (level === 3) {
    staticObstacles(staticThree);
    movingObstacles(movingThree)
  };
 
  //DRAW PLAYER
  player();

  //CHECK FOR COLLISIONS IN ALL LEVELS
if (level === 1) {
    checkForCollision(staticOne);
    checkForCollision(movingOne);
  } else if (level === 2) {
    checkForCollision(staticTwo);
    checkForCollision(movingTwo);
  } else if (level === 3) {
    checkForCollision(staticThree);
    checkForCollision(movingThree);
  };
//END OF GAME LOOP
};

var play = setInterval(gameLoop, gameSpeed);

var gameOver = function() {
  player();
  //clearInterval(play);
}; 


