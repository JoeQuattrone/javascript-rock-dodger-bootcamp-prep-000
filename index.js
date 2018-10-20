/**
 * Don't change these constants!
 */
const DODGER = document.getElementById('dodger')
const GAME = document.getElementById('game')
const GAME_HEIGHT = 400
const GAME_WIDTH = 400
const LEFT_ARROW = 37 // use e.which!
const RIGHT_ARROW = 39 // use e.which!
const ROCKS = []
const START = document.getElementById('start')

var gameInterval = null

/**
 * Be aware of what's above this line,
 * but all of your work should happen below.
 */

function checkCollision(rock) {
  const top = positionToInteger(rock.style.top)

  if (top > 360) {
    const dodgerLeftEdge = positionToInteger(DODGER.style.left)
    
    const dodgerRightEdge = dodgerLeftEdge + 40;

    const rockLeftEdge = positionToInteger(rock.style.left)

    const rockRightEdge = rockLeftEdge +20;

   return (
     rockLeftEdge <= dodgerRightEdge && rockRightEdge >= dodgerLeftEdge ||
     rockLeftEdge >= dodgerLeftEdge && rockRightEdge <= dodgerRightEdge ||
     rockLeftEdge <= dodgerLeftEdge && rockRightEdge >= dodgerRightEdge )
  }                
}

function createRock(x) {
  const rock = document.createElement('div')

  rock.className = 'rock'
  rock.style.left = `${x}px`

<<<<<<< HEAD
  var top = 0;
=======
  var top = -100;
>>>>>>> 03474cdcf07aaab94621a855716c25df2a751417

  rock.style.top = top

  GAME.appendChild(rock);


<<<<<<< HEAD
function moveRock() {
  if (checkCollision(rock) === true){
    endGame();
  }
  else if (top < GAME_HEIGHT - 20){
 top+=4;
 rock.style.top = `${top}px`
 window.requestAnimationFrame(moveRock);
  }
  else if (top >= GAME_HEIGHT -20) {
    GAME.removeChild(rock)
    ROCKS.shift()
   /* for (i = 0; i < ROCKS.length; i++) {
    ROCKS[i].remove();
  } */
  }
}

moveRock();

  ROCKS.push(rock);
  return rock;
}


function endGame() {
  for (i = 0; i < ROCKS.length; i++) {
    ROCKS[i].remove();
  }
  clearInterval(gameInterval);
  window.removeEventListener('keydown', moveDodger);
  alert("YOU LOSE!");
  START.innerHTML = 'Play again?'
  START.style.display = 'inline'
}
=======
function moveRockBottom() {
  var rockPosition = gameInterval;
  var id = setInterval(frame, 10);
  function frame() {
    if (rockPosition == 380) {
      clearInterval(id);
    } else {
      rockPosition++;
      rock.style.top = rockPosition + 'px';
     // window.requestAnimationFrame(moveRock)

    }
  }
  /* var bottomNumbers = rock.style.left.replace('px', ' ')
  var bottom = parseInt(bottomNumbers, 10)
  
 
    if (bottom > 0) {
      rock.style.left = `${bottom + 2}px` 
      window.requestAnimationFrame(moveRock)
    } */
} 

  /**
   * This function moves the rock. (2 pixels at a time
   * seems like a good pace.)
   */
function moveRock() {
  if (checkCollision(rock) === true){
    return endGame()
  }
  else if (top < GAME_HEIGHT - 20){
 top+=4
 rock.style.top = `${top}px`
 window.requestAnimationFrame(moveRock);
  }
  else if (top >= Game_HEIGHT -20) {
    GAME.removeChild(rock);
    ROCKS.shift();
  }
}
    
  ROCKS.push(rock)
  return rock
createRock() 

/**
 * End the game by clearing `gameInterval`,
 * removing all ROCKS from the DOM,
 * and removing the `moveDodger` event listener.
 * Finally, alert "YOU LOSE!" to the player.
 */

 function endGame() {
  while (ROCKS.length > 0){
    GAME.removeChild(ROCKS[0])
    ROCKS.shift() 
    GAME.removeChild(rock)
  }
  
  clearInterval(gameInterval)
  document.removeEventListener('keydown', moveDodger)
  window.alert("YOU LOSE!")
  START.innerHTML= "PLAY AGAIN?"
} 

>>>>>>> 03474cdcf07aaab94621a855716c25df2a751417


function moveDodger(e) { 
   if (e.which === LEFT_ARROW) {
    e.stopPropagation();
    e.preventDefault()
    moveDodgerLeft();
  }
  
<<<<<<< HEAD
  else if (e.which === RIGHT_ARROW) {
=======
  if (e.which === RIGHT_ARROW) {
>>>>>>> 03474cdcf07aaab94621a855716c25df2a751417
    e.stopPropagation();
    e.preventDefault();
    moveDodgerRight();
  }
}

  
function moveDodgerLeft() {
  var leftNumbers = DODGER.style.left.replace('px', ' ') 
  var left = parseInt(leftNumbers, 10)
  
<<<<<<< HEAD
  if (left >= 2) {
      DODGER.style.left = `${left - 2}px`
      window.requestAnimationFrame(moveDodgerLeft)
=======
  if (left >= 0) {
      DODGER.style.left = `${left - 6}px`
>>>>>>> 03474cdcf07aaab94621a855716c25df2a751417
  }
}

function moveDodgerRight() {
  var rightNumbers = DODGER.style.left.replace('px', ' ') 
  var right = parseInt(rightNumbers, 10)
  
  if (right >= -500 && right < GAME_WIDTH - 40) {
<<<<<<< HEAD
    DODGER.style.left = `${right + 2}px`
    window.requestAnimationFrame(moveDodgerRight)
=======
    DODGER.style.left = `${right + 6}px`
>>>>>>> 03474cdcf07aaab94621a855716c25df2a751417
  }
}

/**
 * @param {string} p The position property
 * @returns {number} The position as an integer (without 'px')
 */
function positionToInteger(p) {
  return parseInt(p.split('px')[0]) || 0
}

function start() {
  window.addEventListener('keydown', moveDodger)

  START.style.display = 'none'

  gameInterval = setInterval(function() {
    createRock(Math.floor(Math.random() *  (GAME_WIDTH - 20)))} ,  1000) 
}



