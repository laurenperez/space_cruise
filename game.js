var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
canvas.Width = 800;
canvas.Height = 500;

var displayOne = document.getElementById("displayInstructions");
var displayTwo = document.getElementById("displayMessage");
var displayGameOver = document.getElementById("displayGameOver");
var levelDisplay = document.getElementById("levelDisplay");
var scoreDisplay = document.getElementById("scoreDisplay");
var goalDisplay = document.getElementById("goalDisplay");
var popUp = document.getElementById("notification");
var redStartButton = document.getElementById("startGame");
var redResetButton = document.getElementById("resetGame");

redStartButton.addEventListener("mousedown", function(){
  redStartButton.style.backgroundImage = "url('img/button2.png')";
});
redStartButton.addEventListener("mouseup", function(){
  redStartButton.style.backgroundImage = "url('img/button1.png')";
});
redResetButton.addEventListener("mousedown", function(){
  redResetButton.style.backgroundImage = "url('img/button2.png')";
});
redResetButton.addEventListener("mouseup", function(){
  redResetButton.style.backgroundImage = "url('img/button1.png')";
});

popUp.style.display = "none";
displayOne.textContent = "PRESS START TO BEGIN GAME";

var score = 0;
var crash = false;
var lost = false;
var win = false;
var play1 = null;
var play2 = null;
var play3 = null;
var levelOneSpeed = 20;
var levelTwoSpeed = 15;
var levelThreeSpeed = 10;

//GAME LEVEL
var level = 1;

//RESETS THE CURRENT LEVEL AND ALL LEVELS AFTER WIN
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
     for (var i = 0; i < spaceTreasuresOne.length; i++) {
      spaceTreasuresOne[i].x = spaceTreasuresOne[i].oX;
      spaceTreasuresOne[i].y = spaceTreasuresOne[i].oY;
    }
    for (var i = 0; i < spaceTreasuresTwo.length; i++) {
      spaceTreasuresTwo[i].x = spaceTreasuresTwo[i].oX;
      spaceTreasuresTwo[i].y = spaceTreasuresTwo[i].oY;
    }
    for (var i = 0; i < spaceTreasuresThree.length; i++) {
      spaceTreasuresThree[i].x = spaceTreasuresThree[i].oX;
      spaceTreasuresThree[i].y = spaceTreasuresThree[i].oY;
    }
    displayOne.textContent = " ";
    displayTwo.textContent = " ";
    displayGameOver.textContent = " ";
    levelDisplay.textContent = " ";
    goalDisplay.textContent = " ";
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
      score = 0;
    }
  canvas.focus()
  startGame();
  }
 };

//STARTS GAME LOOPS, ADDS EVENT LISTENER TO CANVAS & GIVES CANVAS FOCUS
var startGame = function() {
  win = false;
  canvas.addEventListener('keydown', movePlayer);
  canvas.focus();
  displayOne.textContent = " ";
  if (!play1 && level === 1) {
    levelDisplay.textContent = "LEVEL " + level;
    goalDisplay.textContent = "COLLECT THE COINS";
    displayTwo.textContent = "USE ARROW KEYS TO MOVE CRUISER";
    play1 = window.setInterval(gameLoop, levelOneSpeed);
  } else if (!play2 && level === 2) {
    levelDisplay.textContent = "LEVEL " + level;
    goalDisplay.textContent = "COLLECT THE COINS";
    displayTwo.textContent = "USE ARROW KEYS TO MOVE CRUISER";
    play2 = window.setInterval(gameLoop, levelTwoSpeed);
  } else if (!play3 && level === 3) {
    levelDisplay.textContent = "LEVEL " + level;
    goalDisplay.textContent = "SAVE THE ASTRONAUT";
    displayTwo.textContent = "USE ARROW KEYS TO MOVE CRUISER";
    play3 = window.setInterval(gameLoop, levelThreeSpeed);
  }
};

//CLICK START TO START GAME
redStartButton.addEventListener('click', startGame);

//CLICK RESET TO RESET GAME
redResetButton.addEventListener('click', resetBoard);

//CLEARS CURRENT GAME INTERVAL WHEN GAME IS LOST
var gameOver = function() {
  displayOne.textContent = "PRESS RESET TO RESTART LEVEL";
  displayGameOver.textContent = "GAME OVER"
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

//CREATES THE PLAYER
var player = function() {
    var ship = document.getElementById('ship');
    ctx.drawImage(ship, x, y, 40, 40);
};

//MOVES THE PLAYER AROUND THE CANVAS
 var movePlayer = function (event) {
  if (crash === false && lost === false && win === false) {
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

//STAIC TREASURES ON GAME BOARD
var spaceTreasuresOne = [
  {thing: 'yellowCoin', img: 'coin', x: 600, y: 100, width: 20, height: 20, points: 100, oX: 600, oY: 100},
  {thing: 'yellowCoin', img: 'coin', x: 200, y: 300, width: 20, height: 20, points: 100, oX: 200, oY: 300},
  {thing: 'yellowCoin', img: 'coin', x: 200, y: 100, width: 20, height: 20, points: 100, oX: 200, oY: 100},
  {thing: 'yellowCoin', img: 'coin', x: 650, y: 450, width: 20, height: 20, points: 100, oX: 650, oY: 450},
  {thing: 'arrow', img: 'arrow', x: 780, y: 245, width: 20, height: 20, points: 500, oX: 780, oY: 245},
  ];

var spaceTreasuresTwo = [
  {thing: 'yellowCoin', img: 'coin', x: 600, y: 200, width: 20, height: 20, points: 100, oX: 600, oY: 200},
  {thing: 'yellowCoin', img: 'coin', x: 200, y: 350, width: 20, height: 20, points: 100, oX: 200, oY: 350},
  {thing: 'yellowCoin', img: 'coin', x: 200, y: 50, width: 20, height: 20, points: 100, oX: 200, oY: 50},
  {thing: 'yellowCoin', img: 'coin', x: 100, y: 450, width: 20, height: 20, points: 100, oX: 100, oY: 450},
  {thing: 'greenCoin', img: 'coin2', x: 300, y: 250, width: 20, height: 20, points: 200, oX: 300, oY: 250},
  {thing: 'greenCoin', img: 'coin2', x: 400, y: 450, width: 20, height: 20, points: 200, oX: 400, oY: 450},
  {thing: 'greenCoin', img: 'coin2', x: 500, y: 200, width: 20, height: 20, points: 200, oX: 500, oY: 200},
  {thing: 'redCoin', img: 'coin3', x: 600, y: 380, width: 20, height: 20, points: 300, oX: 600, oY: 380},
  {thing: 'arrow', img: 'arrow', x: 780, y: 245, width: 20, height: 20, points: 500, oX: 780, oY: 245},
  ];

var spaceTreasuresThree = [
  {thing: 'yellowCoin', img: 'coin', x: 500, y: 450, width: 20, height: 20, points: 100, oX: 500, oY: 450},
  {thing: 'yellowCoin', img: 'coin', x: 300, y: 250, width: 20, height: 20, points: 100, oX: 300, oY: 250},
  {thing: 'yellowCoin', img: 'coin', x: 300, y: 50, width: 20, height: 20, points: 100, oX: 300, oY: 50},
  {thing: 'yellowCoin', img: 'coin', x: 100, y: 400, width: 20, height: 20, points: 100, oX: 100, oY: 400},
  {thing: 'greenCoin', img: 'coin2', x: 400, y: 500, width: 20, height: 20, points: 200, oX: 400, oY: 500},
  {thing: 'greenCoin', img: 'coin2', x: 200, y: 100, width: 20, height: 20, points: 200, oX: 200, oY: 100},
  {thing: 'greenCoin', img: 'coin2', x: 500, y: 250, width: 20, height: 20, points: 200, oX: 500, oY: 250},
  {thing: 'redCoin', img: 'coin3', x: 600, y: 360, width: 20, height: 20, points: 300, oX: 600, oY: 360},
  {thing: 'astronaut', img: 'guy', x: 600, y: 100, width: 40, height: 40, points: 1000, oX: 600, oY: 100},
  {thing: 'arrow', img: 'arrow', x: 780, y: 245, width: 20, height: 20, points: 500, oX: 780, oY: 245},
  ];

//STATIC OBSTACLES ON GAME BOARD
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

//MOVING OBSTACLES ON GAME BOARD
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
  {thing: 'asteroid1', img: 'rock1', x: 790, y: Math.random() * 500, dx:   -1, dy:   0, width: 30, height: 30, oX: 790, oY: Math.random() * 500},
  {thing: 'asteroid2', img: 'rock2', x: 550, y: Math.random() * 500, dx:  -.5, dy: .25, width: 30, height: 30, oX: 550, oY: Math.random() * 500},
  {thing: 'asteroid3', img: 'rock3', x: 790, y: Math.random() * 500, dx: -.35, dy:  .5, width: 25, height: 25, oX: 790, oY: Math.random() * 500},
  {thing: 'asteroid4', img: 'rock4', x: 550, y: Math.random() * 500, dx:   -1, dy:-.12, width: 30, height: 30, oX: 550, oY: Math.random() * 500},
  {thing: 'asteroid1', img: 'rock1', x: 790, y: Math.random() * 500, dx:  -.5, dy:   0, width: 35, height: 35, oX: 790, oY: Math.random() * 500},
  {thing: 'asteroid2', img: 'rock2', x: 550, y: Math.random() * 500, dx: -.35, dy: -.5, width: 20, height: 20, oX: 550, oY: Math.random() * 500},
  {thing: 'asteroid3', img:'meteor', x: 790, y: Math.random() * 500, dx: -1.5, dy:   0, width: 25, height: 25, oX: 790, oY: Math.random() * 500},
  {thing: 'asteroid4', img: 'rock4', x: 550, y: Math.random() * 500, dx:  -.5, dy:-.25, width: 30, height: 30, oX: 550, oY: Math.random() * 500},
  {thing: 'asteroid1', img: 'rock1', x: 790, y: Math.random() * 500, dx: -.35, dy: .25, width: 30, height: 30, oX: 790, oY: Math.random() * 500},
  {thing: 'asteroid2', img: 'rock2', x: 550, y: Math.random() * 500, dx:   -1, dy:  .5, width: 20, height: 20, oX: 550, oY: Math.random() * 500},
  {thing: 'asteroid3', img: 'rock3', x: 790, y: Math.random() * 500, dx:  -.5, dy:-.12, width: 35, height: 35, oX: 790, oY: Math.random() * 500},
  {thing: 'asteroid4', img: 'rock4', x: 790, y: Math.random() * 500, dx: -.35, dy:   0, width: 40, height: 40, oX: 790, oY: Math.random() * 500},
  {thing: 'asteroid1', img:'meteor', x: 790, y: Math.random() * 500, dx: -1.5, dy:  .5, width: 35, height: 35, oX: 790, oY: Math.random() * 500},
  {thing: 'asteroid2', img: 'rock2', x: 550, y: Math.random() * 500, dx:  -.5, dy:-.25, width: 30, height: 30, oX: 550, oY: Math.random() * 500},
  {thing: 'asteroid3', img: 'rock3', x: 790, y: Math.random() * 500, dx:  -.5, dy:-.25, width: 25, height: 25, oX: 790, oY: Math.random() * 500},
  {thing: 'asteroid4', img: 'rock4', x: 790, y: Math.random() * 500, dx:   -1, dy:   0, width: 40, height: 40, oX: 790, oY: Math.random() * 500},
  {thing: 'asteroid1', img: 'rock1', x: 550, y: Math.random() * 500, dx:  -.5, dy:-.25, width: 15, height: 15, oX: 550, oY: Math.random() * 500},
  {thing: 'asteroid2', img: 'rock2', x: 790, y: Math.random() * 500, dx: -.35, dy:   0, width: 30, height: 30, oX: 790, oY: Math.random() * 500},
  {thing: 'asteroid3', img: 'rock3', x: 790, y: Math.random() * 500, dx:  -.5, dy:-.25, width: 35, height: 35, oX: 790, oY: Math.random() * 500},
  {thing: 'asteroid4', img: 'rock4', x: 790, y: Math.random() * 500, dx: -.35, dy:   0, width: 40, height: 40, oX: 790, oY: Math.random() * 500},
  {thing: 'asteroid1', img:'meteor', x: 790, y: Math.random() * 500, dx:   -1, dy: .25, width: 35, height: 35, oX: 790, oY: Math.random() * 500},
  {thing: 'asteroid2', img: 'rock2', x: 550, y: Math.random() * 500, dx:  -.5, dy:-.25, width: 30, height: 30, oX: 550, oY: Math.random() * 500},
  {thing: 'asteroid3', img: 'rock3', x: 790, y: Math.random() * 500, dx: -.35, dy:   0, width: 25, height: 25, oX: 790, oY: Math.random() * 500},
  {thing: 'asteroid4', img: 'rock4', x: 790, y: Math.random() * 500, dx:   -1, dy:   0, width: 40, height: 40, oX: 790, oY: Math.random() * 500},
  {thing: 'asteroid1', img: 'rock1', x: 550, y: Math.random() * 500, dx:  -.5, dy:   0, width: 15, height: 15, oX: 550, oY: Math.random() * 500},
  {thing: 'asteroid2', img: 'rock2', x: 790, y: Math.random() * 500, dx: -.35, dy:-.25, width: 30, height: 30, oX: 790, oY: Math.random() * 500},
  {thing: 'alien1', img:'alien1', x: 790, y: 150, dx: -1, dy:   0, width: 30, height: 30, oX: 790, oY: 150},
  {thing: 'alien2', img:'alien2', x: 790, y: 350, dx:-.5, dy:-.15, width: 20, height: 20, oX: 790, oY: 350},
  {thing: 'alien1', img:'alien1', x: 790, y: 250, dx: -2, dy: -.5, width: 30, height: 30, oX: 790, oY: 250},
];

//CREATES STATIC TREASURES
var staticTreasures = function(staticTreasure) {
  for (var i = 0; i < staticTreasure.length; i++) {
    var treasure = document.getElementById(staticTreasure[i].img);
    ctx.drawImage(treasure, staticTreasure[i].x, staticTreasure[i].y, staticTreasure[i].width, staticTreasure[i].height);
  }
};

//CREATES STATIC OBSTACLES
var staticObstacles = function(staticLevel) {
  for (var i = 0; i < staticLevel.length; i++) {
    var asteroid = document.getElementById(staticLevel[i].img);
    ctx.drawImage(asteroid, staticLevel[i].x, staticLevel[i].y, staticLevel[i].width, staticLevel[i].height);
  }
};

//CREATES MOVING OBSTACLES
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

//COLLISION DETECTION EQUATION
var collisionDetection = function(x1, y1, x2, y2) {
  var xDistance = (x2+15) - (x1+20);
  var yDistance = (y2+15) - (y1+20);
  var dngrZone = Math.sqrt(Math.pow(xDistance, 2) + Math.pow((yDistance), 2));
  if (dngrZone < 30) {
    crash = true;
  }
};

//CHECKS FOR COLLISION WITH OBSTACLES
var checkForCollision = function(level){
  for (var i = 0; i < level.length; i++) {
    collisionDetection(x, y, level[i].x, level[i].y);
    if (crash === true) {
      displayTwo.textContent = "PLAYER 1 DESTROYED";
      gameOver();
      var explosion = document.getElementById('crash');
      explosion.src = "img/explosion.png";
      ctx.drawImage(explosion, x, y, 80, 80);
    }
  }
};

//CHECKS FOR COLLISIONS WITH TREASURE
var treasureCollision = function(treasures){
  for (var i = 0; i < treasures.length; i++) {
    collisionDetection(x, y, treasures[i].x, treasures[i].y);
    if (crash === true) {
    crash = false;
    score += treasures[i].points;
    treasures[i].x = -50;
    treasures[i].y = -50;
    }
  }
};

//CHECKS IF PLAYER IS WITHIN CANVAS BOUNDARIES
var checkBoundaries = function() {
 if (x < -20 || y < -30 || y > 495) {
  displayTwo.textContent = "LOST IN SPACE";
  lost = true;
  x = 20;
  y = 230;
  gameOver();
 }
};

//CHECKS FOR LEVEL COMPLETION
var checkForWin = function() {
  if (x > 795) {
    win = true;
    if (level === 1) {
      clearInterval(play1);
      popUp.textContent = "LEVEL 2 STARTING NOW";
      popUp.style.display = "initial";
      displayTwo.textContent = "LEVEL " + level + " COMPLETE";
    }
    if (level === 2) {
      clearInterval(play2);
      popUp.textContent = "LEVEL 3 STARTING NOW";
      popUp.style.display = "initial";
      displayTwo.textContent = "LEVEL " + level + " COMPLETE";
    }
    if (level === 3) {
      clearInterval(play3);
      popUp.textContent = "YOU WIN";
      popUp.style.display = "initial";
      displayOne.textContent = "PRESS RESET TO BEGIN A NEW GAME";
      ctx.clearRect(0, 0, canvas.Width, canvas.Height);
    }
    level += 1;
    setTimeout(function(){
      popUp.style.display = "none";
      displayOne.textContent = " ";
      displayTwo.textContent = " ";
      startGame();
    }, 4000);
    x = 20;
    y = 230;
  }
};

//GAME LOOP
var gameLoop = function() {
  ctx.clearRect(0, 0, canvas.Width, canvas.Height);
  //CREATES THE MOVING STARS EFFECT
  var starsX = Math.random() * canvas.Width;
  var starsY = Math.random() * canvas.Height;
  ctx.fillStyle = 'White';
  ctx.fillRect(starsX, starsY, 3.5, 3.5);
  ctx.fillRect(starsX, starsY, 2, 2);
  //DRAWS OBSTACLES IN THIS ORDER FOR LAYERS OF CANVAS
  if (level === 1) {
    staticObstacles(staticOne);
    movingObstacles(movingOne);
    staticTreasures(spaceTreasuresOne);
  } else if (level === 2) {
    staticObstacles(staticTwo);
    movingObstacles(movingTwo);
    staticTreasures(spaceTreasuresTwo);
  } else if (level === 3) {
    staticObstacles(staticThree);
    movingObstacles(movingThree);
    staticTreasures(spaceTreasuresThree);
  };
  //DRAW PLAYER
  player();
  //MAKE SURE PLAYER IS WITHIN BOUNDARIES
  checkBoundaries();
  //CHECK FOR WIN
  checkForWin();
  //DISPLAYS SCORE
  scoreDisplay.textContent = "SCORE " + score;
  //CHECK FOR COLLISIONS IN ALL LEVELS
if (level === 1) {
    treasureCollision(spaceTreasuresOne);
    checkForCollision(staticOne);
    checkForCollision(movingOne);
  } else if (level === 2) {
    treasureCollision(spaceTreasuresTwo);
    checkForCollision(staticTwo);
    checkForCollision(movingTwo);
  } else if (level === 3) {
    treasureCollision(spaceTreasuresThree);
    checkForCollision(staticThree);
    checkForCollision(movingThree);
  };
};
//END
