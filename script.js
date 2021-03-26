const newGame = document.getElementById('newGame')
const player1 = document.getElementById('player1')
const player2 = document.getElementById('player2')
const point1 =document.getElementById('point1')
const point2 =document.getElementById('point2')
const rollDice = document.getElementById('rollDice')
const dice1 = document.getElementById('dice1')
const dice2 = document.getElementById('dice2')
const dice3 = document.getElementById('dice3')
const dice4 = document.getElementById('dice4')
const dice5 = document.getElementById('dice5')
const dice6 = document.getElementById('dice6')
const hold = document.getElementById('hold')
let scoreRoundJ1 = document.getElementById('scoreRoundJ1')
let scoreRoundJ2 = document.getElementById('scoreRoundJ2')
let numScoreRoundJ1 = 0
let numScoreRoundJ2 = 0
let scoreGlobal1 = document.getElementById('scoreGlobal1')
let scoreGlobal2 = document.getElementById('scoreGlobal2')
let numScoreGlobal1 = 0
let numScoreGlobal2 = 0

/*New Game*/
function clickNewGame() {
  if (player1.style.color == 'black') {
    player2.style.color = 'black'
    point2.style.color = 'red'
    player1.style.color = 'grey'
    point1.style.color = 'transparent'
    scoreGlobal1.textContent = 0
    scoreGlobal2.textContent = 0
    numScoreGlobal1 = 0
    numScoreGlobal2 = 0
    scoreRoundJ1.textContent = 0
    scoreRoundJ2.textContent = 0
    numScoreRoundJ1 = 0
    numScoreRoundJ2 = 0
  } else {
      player1.style.color = 'black'
      point1.style.color = 'red'
      player2.style.color = 'grey'
      point2.style.color = 'transparent'
      scoreGlobal1.textContent = 0
      scoreGlobal2.textContent = 0
      numScoreGlobal1 = 0
      numScoreGlobal2 = 0
      scoreRoundJ1.textContent = 0
      scoreRoundJ2.textContent = 0
      numScoreRoundJ1 = 0
      numScoreRoundJ2 = 0
    }
}

newGame.addEventListener('click', clickNewGame)


/*Roll Dice*/
function result(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function clickRollDice() {
  let diceResult = result(1, 7)
  if (player1.style.color == 'black') {
    numScoreRoundJ1 = numScoreRoundJ1 + diceResult
    scoreRoundJ1.textContent = numScoreRoundJ1
    switch (diceResult) {
      case 1 :
        dice1.style.display = "flex";
        dice2.style.display = "none";
        dice3.style.display = "none";
        dice4.style.display = "none";
        dice5.style.display = "none";
        dice6.style.display = "none";
        numScoreRoundJ1 = 0
        clickHold()
        break;
      case 2 :
        dice2.style.display = "flex";
        dice1.style.display = "none";
        dice3.style.display = "none";
        dice4.style.display = "none";
        dice5.style.display = "none";
        dice6.style.display = "none";
        break;
      case 3 :
        dice3.style.display = "flex";
        dice1.style.display = "none";
        dice2.style.display = "none";
        dice4.style.display = "none";
        dice5.style.display = "none";
        dice6.style.display = "none";
        break;
      case 4 :
        dice4.style.display = "flex";
        dice1.style.display = "none";
        dice3.style.display = "none";
        dice2.style.display = "none";
        dice5.style.display = "none";
        dice6.style.display = "none";
        break;
      case 5 :
        dice5.style.display = "flex";
        dice1.style.display = "none";
        dice3.style.display = "none";
        dice4.style.display = "none";
        dice2.style.display = "none";
        dice6.style.display = "none";
        break;
      case 6 :
        dice6.style.display = "flex";
        dice1.style.display = "none";
        dice3.style.display = "none";
        dice4.style.display = "none";
        dice5.style.display = "none";
        dice2.style.display = "none";
        break;
      default:
        alert('Error')
        break;
    } 
    scoreRoundJ1.textContent = numScoreRoundJ1
  }
  else 
    if (player2.style.color == 'black') {
      numScoreRoundJ2 = numScoreRoundJ2 + diceResult
      scoreRoundJ2.textContent = numScoreRoundJ2
      switch (diceResult) {
        case 1 :
          dice1.style.display = "flex";
          dice2.style.display = "none";
          dice3.style.display = "none";
          dice4.style.display = "none";
          dice5.style.display = "none";
          dice6.style.display = "none";
          numScoreRoundJ2 = 0
          clickHold()
          break;
        case 2 :
          dice2.style.display = "flex";
          dice1.style.display = "none";
          dice3.style.display = "none";
          dice4.style.display = "none";
          dice5.style.display = "none";
          dice6.style.display = "none";
          break;
        case 3 :
          dice3.style.display = "flex";
          dice1.style.display = "none";
          dice2.style.display = "none";
          dice4.style.display = "none";
          dice5.style.display = "none";
          dice6.style.display = "none";
          break;
        case 4 :
          dice4.style.display = "flex";
          dice1.style.display = "none";
          dice3.style.display = "none";
          dice2.style.display = "none";
          dice5.style.display = "none";
          dice6.style.display = "none";
          break;
        case 5 :
          dice5.style.display = "flex";
          dice1.style.display = "none";
          dice3.style.display = "none";
          dice4.style.display = "none";
          dice2.style.display = "none";
          dice6.style.display = "none";
          break;
        case 6 :
          dice6.style.display = "flex";
          dice1.style.display = "none";
          dice3.style.display = "none";
          dice4.style.display = "none";
          dice5.style.display = "none";
          dice2.style.display = "none";
          break;
        default:
          alert('Error')
          break;
      } 
      scoreRoundJ2.textContent = numScoreRoundJ2
    }
    else {
      alert('Please click on New Game')
    }
}

rollDice.addEventListener('click', clickRollDice)

/*Hold*/
function clickHold() {
  if (player1.style.color == 'black') {
    numScoreGlobal1 = numScoreGlobal1 + numScoreRoundJ1
    scoreGlobal1.textContent = numScoreGlobal1
    player2.style.color = 'black'
    point2.style.color = 'red'
    player1.style.color = 'grey'
    point1.style.color = 'transparent'
    scoreRoundJ1.textContent = 0
    scoreRoundJ2.textContent = 0
    numScoreRoundJ1 = 0
    numScoreRoundJ2 = 0
  } else 
      if (player2.style.color == 'black') {
        numScoreGlobal2 = numScoreGlobal2 + numScoreRoundJ2
        scoreGlobal2.textContent = numScoreGlobal2
        player1.style.color = 'black'
        point1.style.color = 'red'
        player2.style.color = 'grey'
        point2.style.color = 'transparent'
        scoreRoundJ1.textContent = 0
        scoreRoundJ2.textContent = 0
        numScoreRoundJ1 = 0
        numScoreRoundJ2 = 0
      }
      else {
        alert('Please click on New Game')
      }
  win()
}

hold.addEventListener('click', clickHold)

/*win*/
function win() {
  if (numScoreGlobal1 >= 100){
    scoreGlobal1.textContent = "Win"
    player1.style.color = 'grey'
    player2.style.color = 'grey'
    point1.style.color = 'transparent'
    point2.style.color = 'transparent'
  } else 
    if (numScoreGlobal2 >= 100){
      scoreGlobal2.textContent = "Win"
      player1.style.color = 'grey'
      player2.style.color = 'grey'
      point1.style.color = 'transparent'
      point2.style.color = 'transparent'
    } 
}
