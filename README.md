# Space Cruiser

See below for explanations of the technologies used, the approach taken, installation instructions, future improvements and enhancements.

The game can be viewed [here.](https://laurenperez.github.io/space_cruiser/)

This game was created using HTML5 canvas, styled with CSS, and given logic and animation through vanilla Javascript. No outside libraries were included. 

During inception, it was tempting to use a library, primarily because of the simplification of canvas physics and the built in mobility functions that most gaming libraries provide.  However, for the sake of learning and gaining familiarity with HTML5 canvas, I chose to build the game using basic canvas drawing methods and vanilla Javascript. Through the use of online resources and tutorials, I was able to successfully create and style a simple 3 level game, with all the 8 bit charm of an old arcade machine.


## Planning Phase:

- Create a game that has a movable player, obstacles to avoid, and prizes to collect. 
- The player will move using the 4 arrow keys. 
- The game will take place on the canvas. 
- The game will have multiple levels. 
- Each level will move faster than the level before it. 
- The use of HTML5 canvas drawing methods will be guided through online tutorials. 
- Initial plans, psudocoded logic, and wireframes were drawn on paper and changed over time to refect the final style. 


## Building Phase:

### Day 1

- Established the canvas. 
- Created rectangles to represent obstacles that will appear later in the game. 
- Created a circle to represent the player. 
- Enabled the movement and manipulation of the player circle using the arrow keys. 
- Researched options for creating an animation or game loop. 

### Day 2

- Implemented an animation loop using two functions that call each other continuously. 
- Decided the game will be space themed.
- Created the effect that mimicked twinkiling stars. 
- Created first level’s stationary obstacles and moving obstacles.
- Manipulated game speeds to provide enough challenge for the player. 

### Day 3

- Created second level’s stationary and moving obstacles.
- Tested levels one and two and increased difficulty by adding more obstacles. 
- Created the function for collision detection and decided on a collision radius.
- In implementing collision detection, I restructured the way the objects were written by
consolidating all obstacles into an array of objects with unique starting locations and velocity. 
- I used various online gaming sites to provide the 8 bit style sprite images used for the spaceship (player) and asteroids (obstacles).

### Day 4 

- Created the third and final level. 
- Increased efficiency by consolidating obstacle creation functions using loops and adding more objects to my array of obstacles. 
- After difficulty finding a way to restart the game, I decided to use a game loop with a set interval function instead of a continuous animation loop. 
- Adding a game loop increased my control over starting and stopping the game. 
- I added both a game over and restart function, allowing the user to reset the game play after a win or loss. 

### Day 5 

- I decided to use space themed arcade style games as inspiration for this game. 
- I created a custom space cruiser logo and decided on a basic CSS layout. 
- The design mirrors most arcade games in that the canvas or “screen” is centered, there are panels that display instructions to the left and the right of the screen and the major buttons for controlling the game are centered below. 

### Day 6

- I decided on a color theme and created final text styling using two "digital" looking Google fonts “press start 2P” and “bungee inline.” 
- I added two red buttons for “start” and “reset” that change image on mouse down and mouse up to mimic the motion of a depressed arcade button.

### Day 7 

The final day was used for detecting bugs and addressing the final functionality of the game. 
 
Some bug fixes included: 

- Limiting the start and reset functions during active game play. 
- Allowing a user to restart the game after the final level is won. 
- Detecting when the user has drifted outside the visible portion of the canvas and implementing a penalty for doing so. 
- Disabling arrow key functions temporarily as the levels change and after the player has crashed. 
- Fine tuning collision radius so that obstacles do not cause the player to crash unless actually touched. 


## Future Improvements and Enhancements: 

- The game could have more levels added for longer play time. 
- The spaceship could be given a gun to eliminate obstacles instead of just avoiding them. 
- The game could implement gravity to draw objects toward the player and increase difficulty.
- The left “back” arrow key could be disabled so that the player is forced to plan each move forward more strategically. 
- The game could be timed to encourage faster completion of each level. 


