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
