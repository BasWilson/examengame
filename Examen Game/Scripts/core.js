/*
Globale variablen
*/
const obj = ["ball.png", "beach.png", "car.png", "cars.png", "cone.png", "cookies.png", "flower.png", "kerstboom.png", "pie.png", "star.png"];
var score = 0;
var round = 1;
/*
Met deze functie starten we de game en zorgen we dat alle variablen goed staan
*/

function startGame() {
  score = 0;
  round = 1;
}

function generateRound() {

}
function checkAnswer(answer) {

}

function endGame() {
  saveGame(score);
  exitGame();
}

function exitGame() {
  navToMenu();
}
