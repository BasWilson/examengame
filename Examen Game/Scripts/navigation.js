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

//Sluit de game
$('#closeButtonGame').click(function() {
  endGame();
});

//Sluit het settings menu
$('#closeButtonSettings').click(function() {
  $( ".mainMenu" ).fadeIn( "fast");
  $( ".settingsOverlay" ).hide( "fast");
});

//Navigeer terug naar main menu als je uit de game komt
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

//Sla de settings op.
$('#saveButton').click(function() {
  console.log('click');
  saveSettings();
});

//sluit resultaat scherm
$('#resultsButton').click(function() {
  $( ".mainMenu" ).fadeIn( "fast");
  $( ".resultsOverlay" ).hide( "fast");
});
//Laat de gebruiker zijn resultaat zien
function showResults() {

  $( ".resultsOverlay" ).fadeIn( "fast");
  $( ".inGame" ).hide( "fast");

}
//Sluit het results menu
$('#closeButtonResults').click(function() {
  $( ".mainMenu" ).fadeIn( "fast");
  $( ".resultsOverlay" ).hide( "fast");
});
