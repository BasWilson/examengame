//Navigeer naar game
$('#playButton').click(function() {
  $( ".mainMenu" ).hide(  function() {
    $( ".inGame" ).fadeIn("fast")
  startGame();
});
});

//Navigeer naar settings
$('#settingsButton').click(function() {
  $( ".mainMenu" ).hide( function() {
    $( ".settingsOverlay" ).fadeIn("fast")
});
})
$('#closeButtonGame').click(function() {
  endGame();
});

$('#closeButtonSettings').click(function() {
  $( ".mainMenu" ).fadeIn( "fast");
  $( ".settingsOverlay" ).hide( "fast");
});
function navToMenu() {
  $( ".mainMenu" ).fadeIn( "fast");
  $( ".inGame" ).hide( "fast");
}

//Met deze click gaaan we het antwoord bekijken
$('.gameButton').click(function() {
  var clickedBtn = $(this).attr('id')
  var answer = document.getElementById(clickedBtn).innerHTML;
  checkAnswer(answer);
});
