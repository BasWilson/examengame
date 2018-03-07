/*
Globale variablen
*/
const objects = ["../Assets/ball.png", "../Assets/beach.png", "../Assets/car.png", "../Assets/cars.png", "../Assets/cone.png", "../Assets/cookies.png", "../Assets/flower.png", "../Assets/kerstboom.png", "../Assets/pie.png", "../Assets/star.png"];
var score = 0;
var errors = 0;
var round = 1;
var maxScore = 10;
var objNumber = 0;
var gameButtons = ["0", "0", "0"];
var gameObjects = {obj0: 0, obj1: 0, obj2: 0, obj3: 0, obj4: 0, obj5: 0, obj6: 0, obj7: 0};
/*
Met deze functie starten we de game en zorgen we dat alle variablen goed staan
*/

function startGame() {

  //Reset game
  score = 0;
  errors = 0;
  round = 1;
  maxScore = Cookies.get('maxScore');

  generateRound()
}

function generateRound() {

  //De src van alle images blank zetten zodat ze niet meer te zien zijn
  for (var i = 1; i < 8; i++) {
    var currentObject = "obj"+i;
    document.getElementById(currentObject).src = "";
  }

  //Dit nummer bepaalt hoeveel objecten er zijn
  objNumber = Math.floor(Math.random() * 8) + 1;

  //Nu hussellen we de objects array zodat t altijd random is
  objects.sort(function(a, b){return 0.5 - Math.random()});

  /*
  Nu zorgen we dat de plaatjes te zien zijn
  Dit doen we door een for loop uit te voeren todat het gelijk is aan het random nummer
  Elke loop voegen we aan de gameObjects object een value aan
  */
  for (var i = 0; i < objNumber; i++) {
    var currentObject = "obj"+i;
    document.getElementById(currentObject).src = objects[i];
  }

  /*
  Nu de 3 mogelijke antwoorden genereren en appenden
  */

  //voor 2 buttons een random nummer genereren met verschil van max 3
  var random1 = Math.floor(Math.random() * 4) + -2;
  var random2 = Math.floor(Math.random() * 4) + -2;

  //Waarden appenden
  gameButtons[0] = objNumber;
  gameButtons[1] = objNumber + random1;
  gameButtons[2] = objNumber + random2;

  gameButtons.sort(function(a, b){return 0.5 - Math.random()});

  for (var i = 0; i < 3; i++) {
    var currentButton = "button"+i;
    document.getElementById(currentButton).innerHTML = gameButtons[i];
  }

}
function checkAnswer(answer) {
  if (answer == objNumber) {

    score++;
    $('#score').text("Score: "+score);
    //Gebruiker heeft gewonnen
    if (score >= maxScore) {
      endGame();
    } else {
      errors++;
      generateRound();
    }

  } else {

  }
}

function endGame() {
  saveGame(score);
  exitGame();
}

function exitGame() {
  navToMenu();
}
