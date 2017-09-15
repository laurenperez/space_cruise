var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var display = document.getElementById("displayMessage");
var gameOverMessage = document.getElementById("gameOverMessage");
var levelMessage = document.getElementById("levelMessage");
canvas.Width = 800;
canvas.Height = 500;


var crash = false;
var lost = false;
var win = false;
var play1 = null;
var play2 = null;
var play3 = null;
var levelOneSpeed = 15;
var levelTwoSpeed = 20;
var levelThreeSpeed = 25;

//CURRENT LEVEL
var level = 1;


//RESETS THE CURRENT LEVEL
var resetBoard = function() {
  if (crash === true || lost === true || level === 4 || win === true) {
    for (var i = 0; i < movingOne.length; i++) {
      movingOne[i].x = movingOne[i].oX;
      movingOne[i].y = movingOne[i].oY;
    }
    for (var i = 0; i < movingTwo.length; i++) {
      movingTwo[i].x = movingTwo[i].oX;
      movingTwo[i].y = movingTwo[i].oY;
    }
    for (var i = 0; i < movingThree.length; i++) {
      movingThree[i].x = movingThree[i].oX;
      movingThree[i].y = movingThree[i].oY;
    }
    gameOverMessage.textContent = " ";
    display.textContent = " ";
    levelMessage.textContent = " ";
    x = 20;
    y = 230;
    crash = false;
    lost = false;
    win = false;
    play1 = null;
    play2 = null;
    play3 = null;
    if (level === 4) {
      level = 1;
    }
  }
  canvas.focus()
  startGame();
 };



//START ADDS EVENT LISTENER TO CANVAS & GIVES CANVAS FOCUS
var startGame = function() {
  canvas.addEventListener('keydown', movePlayer);
  canvas.focus();
  if (!play1 && level === 1) {
    levelMessage.textContent = "LEVEL " + level;
    play1 = window.setInterval(gameLoop, levelOneSpeed);
  } else if (!play2 && level === 2) {
    levelMessage.textContent = "LEVEL " + level;
    play2 = window.setInterval(gameLoop, levelTwoSpeed);
  } else if (!play3 && level === 3) {
    levelMessage.textContent = "LEVEL " + level;
    play3 = window.setInterval(gameLoop, levelThreeSpeed);
  }
  };

//CLICK START TO START GAME
var start = document.getElementById("start");
start.addEventListener('click', startGame);

//CLICK RESET TO RESET GAME
var reset = document.getElementById("reset");
reset.addEventListener('click', resetBoard);



//MESSAGE ON CONSOLE
var gameOver = function() {
  gameOverMessage.textContent = "GAME OVER"
  if (level === 1) {
    clearInterval(play1);
  }
  if (level === 2) {
    clearInterval(play2);
  }
  if (level === 3) {
    clearInterval(play3);
  } 
};

//PLAYER START POSITION
var x = 20;
var y = 230;


//CREATE THE PLAYER
var player = function() {
    var ship = document.getElementById('ship'); 
    ctx.drawImage(ship, x, y, 40, 40);
};


//MOVE THE PLAYER AROUND THE CANVAS
 var movePlayer = function (event) {
  if (crash === false && lost === false) {
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
  {thing: 'asteroid1', img: 'rock1', x: 790, y: Math.random() * 500, dx: -.35, dy: .12, width: 30, height: 30, oX: 790, oY: Math.random() * 500}, 
  {thing: 'asteroid2', img: 'rock2', x: 790, y: Math.random() * 500, dx: -.25, dy:   0, width: 20, height: 20, oX: 790, oY: Math.random() * 500},
  {thing: 'asteroid3', img: 'rock3', x: 790, y: Math.random() * 500, dx:   -1, dy: .12, width: 35, height: 35, oX: 790, oY: Math.random() * 500},
  {thing: 'asteroid4', img: 'rock4', x: 790, y: Math.random() * 500, dx:  -.5, dy:   0, width: 20, height: 20, oX: 790, oY: Math.random() * 500},
  {thing: 'asteroid1', img: 'rock1', x: 790, y: Math.random() * 500, dx: -.25, dy: .07, width: 30, height: 30, oX: 790, oY: Math.random() * 500},
  {thing: 'asteroid2', img: 'rock2', x: 790, y: Math.random() * 500, dx:  -.5, dy:-.25, width: 20, height: 20, oX: 790, oY: Math.random() * 500},
  {thing: 'asteroid3', img: 'rock3', x: 790, y: Math.random() * 500, dx: -.35, dy:-.07, width: 35, height: 35, oX: 790, oY: Math.random() * 500},
  {thing: 'asteroid4', img: 'rock4', x: 790, y: Math.random() * 500, dx:  -.5, dy:  -0, width: 40, height: 40, oX: 790, oY: Math.random() * 500},
  {thing: 'asteroid1', img: 'rock1', x: 790, y: Math.random() * 500, dx:   -1, dy:-.07, width: 15, height: 15, oX: 790, oY: Math.random() * 500},
  {thing: 'asteroid2', img: 'rock2', x: 790, y: Math.random() * 500, dx:  -.5, dy:-.25, width: 30, height: 30, oX: 790, oY: Math.random() * 500},
]; 

var movingTwo = [
  {thing: 'asteroid1', img: 'rock1', x: 790, y: Math.random() * 500, dx: -.35, dy: .12, width: 30, height: 30, oX: 790, oY: Math.random() * 500},
  {thing: 'asteroid2', img: 'rock2', x: 550, y: Math.random() * 500, dx:  -.5, dy:  .5, width: 20, height: 20, oX: 550, oY: Math.random() * 500},
  {thing: 'asteroid3', img: 'rock3', x: 790, y: Math.random() * 500, dx:   -2, dy:-.12, width: 35, height: 35, oX: 790, oY: Math.random() * 500},
  {thing: 'asteroid4', img: 'rock4', x: 550, y: Math.random() * 500, dx:  -.5, dy:   0, width: 20, height: 20, oX: 550, oY: Math.random() * 500},
  {thing: 'asteroid1', img: 'rock1', x: 790, y: Math.random() * 500, dx: -.35, dy:   0, width: 30, height: 30, oX: 790, oY: Math.random() * 500},
  {thing: 'asteroid2', img: 'rock2', x: 550, y: Math.random() * 500, dx:  -.5, dy:   0, width: 20, height: 20, oX: 550, oY: Math.random() * 500},
  {thing: 'asteroid3', img: 'rock3', x: 790, y: Math.random() * 500, dx:   -2, dy:   0, width: 35, height: 35, oX: 790, oY: Math.random() * 500},
  {thing: 'asteroid4', img: 'rock4', x: 550, y: Math.random() * 500, dx:  -.5, dy:   0, width: 20, height: 20, oX: 550, oY: Math.random() * 500},
  {thing: 'asteroid1', img: 'rock1', x: 790, y: Math.random() * 500, dx:  -.5, dy: .07, width: 30, height: 30, oX: 790, oY: Math.random() * 500},
  {thing: 'asteroid2', img: 'rock2', x: 550, y: Math.random() * 500, dx:  -.5, dy:-.25, width: 20, height: 20, oX: 550, oY: Math.random() * 500},
  {thing: 'asteroid3', img: 'rock3', x: 790, y: Math.random() * 500, dx: -.35, dy:-.07, width: 35, height: 35, oX: 790, oY: Math.random() * 500},
  {thing: 'asteroid4', img: 'rock4', x: 790, y: Math.random() * 500, dx:   -1, dy:   0, width: 40, height: 40, oX: 790, oY: Math.random() * 500},
  {thing: 'asteroid1', img: 'rock1', x: 550, y: Math.random() * 500, dx:  -.5, dy:-.07, width: 15, height: 15, oX: 550, oY: Math.random() * 500},
  {thing: 'asteroid2', img: 'rock2', x: 790, y: Math.random() * 500, dx:  -.5, dy:-.25, width: 30, height: 30, oX: 790, oY: Math.random() * 500},
  {thing: 'alien1', img:'alien1', x: 790, y: 150, dx: -1, dy:   0, width: 30, height: 30, oX: 790, oY: 150},
  {thing: 'alien2', img:'alien2', x: 790, y: 350, dx:-.5, dy:-.15, width: 40, height: 40, oX: 790, oY: 350},
]; 

var movingThree = [
  {thing: 'asteroid1', img: 'rock1', x: 790, y: Math.random() * 500, dx: -.35, dy:   0, width: 30, height: 30, oX: 790, oY: Math.random() * 500},
  {thing: 'asteroid2', img: 'rock2', x: 550, y: Math.random() * 500, dx:  -.5, dy:   1, width: 30, height: 30, oX: 550, oY: Math.random() * 500},
  {thing: 'asteroid3', img: 'rock3', x: 790, y: Math.random() * 500, dx:   -2, dy:   0, width: 25, height: 25, oX: 790, oY: Math.random() * 500},
  {thing: 'asteroid4', img: 'rock4', x: 550, y: Math.random() * 500, dx:  -.5, dy:-.12, width: 30, height: 30, oX: 550, oY: Math.random() * 500},
  {thing: 'asteroid1', img: 'rock1', x: 790, y: Math.random() * 500, dx: -.35, dy:   0, width: 35, height: 35, oX: 790, oY: Math.random() * 500},
  {thing: 'asteroid2', img: 'rock2', x: 550, y: Math.random() * 500, dx:  -.5, dy: -.5, width: 20, height: 20, oX: 550, oY: Math.random() * 500},
  {thing: 'asteroid3', img: 'rock3', x: 790, y: Math.random() * 500, dx:   -2, dy:   0, width: 25, height: 25, oX: 790, oY: Math.random() * 500},
  {thing: 'asteroid4', img: 'rock4', x: 550, y: Math.random() * 500, dx:  -.5, dy:  -1, width: 30, height: 30, oX: 550, oY: Math.random() * 500},
  {thing: 'asteroid1', img: 'rock1', x: 790, y: Math.random() * 500, dx:  -.5, dy: .07, width: 30, height: 30, oX: 790, oY: Math.random() * 500},
  {thing: 'asteroid2', img: 'rock2', x: 550, y: Math.random() * 500, dx:  -.5, dy:   1, width: 20, height: 20, oX: 550, oY: Math.random() * 500},
  {thing: 'asteroid3', img: 'rock3', x: 790, y: Math.random() * 500, dx: -.35, dy:-.07, width: 35, height: 35, oX: 790, oY: Math.random() * 500},
  {thing: 'asteroid4', img: 'rock4', x: 790, y: Math.random() * 500, dx:   -1, dy:   0, width: 40, height: 40, oX: 790, oY: Math.random() * 500},
  {thing: 'asteroid1', img: 'rock1', x: 790, y: Math.random() * 500, dx:  -.5, dy:   1, width: 35, height: 35, oX: 790, oY: Math.random() * 500},
  {thing: 'asteroid2', img: 'rock2', x: 550, y: Math.random() * 500, dx:  -.5, dy:-.25, width: 30, height: 30, oX: 550, oY: Math.random() * 500},
  {thing: 'asteroid3', img: 'rock3', x: 790, y: Math.random() * 500, dx: -.35, dy:  -2, width: 25, height: 25, oX: 790, oY: Math.random() * 500},
  {thing: 'asteroid4', img: 'rock4', x: 790, y: Math.random() * 500, dx:   -1, dy:   0, width: 40, height: 40, oX: 790, oY: Math.random() * 500},
  {thing: 'asteroid1', img: 'rock1', x: 550, y: Math.random() * 500, dx:  -.5, dy:  -1, width: 15, height: 15, oX: 550, oY: Math.random() * 500},
  {thing: 'asteroid2', img: 'rock2', x: 790, y: Math.random() * 500, dx:  -.5, dy:-.25, width: 30, height: 30, oX: 790, oY: Math.random() * 500},
  {thing: 'alien1', img:'alien1', x: 790, y: 150, dx: -1, dy:   0, width: 30, height: 30, oX: 790, oY: 150},
  {thing: 'alien2', img:'alien2', x: 790, y: 350, dx:-.5, dy:-.15, width: 20, height: 20, oX: 790, oY: 350},
  {thing: 'alien1', img:'alien1', x: 790, y: 250, dx: -2, dy: -.5, width: 30, height: 30, oX: 790, oY: 250},
]; 


//CREATES MOVING OBSTICLES
var movingObstacles = function(movingLevel) {
  for (var i = 0; i < movingLevel.length; i++) {
    if (movingLevel[i].x > -30 && movingLevel[i].x < (canvas.Width + 30) && movingLevel[i].y > -30 && movingLevel[i].y < (canvas.Height + 30)){
      var asteroid = document.getElementById(movingLevel[i].img);
      ctx.drawImage(asteroid, movingLevel[i].x, movingLevel[i].y, movingLevel[i].width, movingLevel[i].height);
      movingLevel[i].x += movingLevel[i].dx;
      movingLevel[i].y += movingLevel[i].dy;
    } 
  }
};


//COLLISION DETECTION
var collisionDetection = function(x1, y1, x2, y2) {
  var xDistance = (x2+15) - (x1+20);
  var yDistance = (y2+15) - (y1+20);
  var dngrZone = Math.sqrt(Math.pow(xDistance, 2) + Math.pow((yDistance), 2));
  if (dngrZone < 30) {
    crash = true;
  }
};

//CHECK FOR A COLLISION
var checkForCollision = function(level){
  for (var i = 0; i < level.length; i++) {
    collisionDetection(x, y, level[i].x, level[i].y);
    if (crash === true) {
      display.textContent = "PLAYER 1 DESTROYED";
      gameOver();
      var explosion = document.getElementById('crash');
      explosion.src = "img/explosion.png";
      ctx.drawImage(explosion, x, y, 80, 80);
    }
  }
};

//CHECK IF PLAYER WITHIN CANVAS BOUNDARIES
var checkBoundaries = function() {
 if (x < -20 || y < -30 || y > 495) {
  display.textContent = "LOST IN SPACE";
  lost = true;
  x = 20;
  y = 230;
  gameOver();
 }
};

//CHECK FOR LEVEL COMPLETION
var checkForWinLevel = function() {
  if (x > 790) {
    x = 20;
    y = 230;
    win = true;
  // if (level === 1) {
  //   clearInterval(play1);
  // }
  // if (level === 2) {
  //   clearInterval(play2);
  // }
  // if (level === 3) {
  //   clearInterval(play3);
  // } 
  level += 1;
  resetBoard();
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
  ctx.fillRect(starsX, starsY, 3.5, 3.5);
  
  //DRAW OBSTACLES IN THIS ORDER FOR LAYERS OF CANVAS
  if (level === 1) {
    staticObstacles(staticOne);
    movingObstacles(movingOne);
  } else if (level === 2) {
    staticObstacles(staticTwo);
    movingObstacles(movingTwo);
  } else if (level === 3) {
    staticObstacles(staticThree);
    movingObstacles(movingThree);
  };
 
  //DRAW PLAYER
  player();

  //MAKE SURE PLAYER IS WITHIN BOUNDARIES
  checkBoundaries();

  //CHECK FOR WIN
  checkForWinLevel();

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

 