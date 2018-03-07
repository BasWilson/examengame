$('#playButton').click(function() {
  $( ".mainMenu" ).fadeOut( "slow", function() {
  startGame();
});
});

$('#closeButton').click(function() {
  endGame();
});
function navToMenu() {
  $( ".mainMenu" ).fadeIn( "slow")
}

//Met deze click gaaan we het antwoord bekijken
$('.gameButton').click(function() {
  var clickedBtn = $(this).attr('id')
  var answer = document.getElementById(clickedBtn).innerHTML;
  checkAnswer(answer);
});
