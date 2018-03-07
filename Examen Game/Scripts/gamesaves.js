function saveGame() {

}
var maxScore;

function saveSettings() {
  //Een var creeeren die bij houd wat de gebruiker als maximale score wil hebben.
  var maxScoreField = document.getElementById('maxScoreField').value;

  if (maxScoreField <= 0 || maxScoreField == "") {
    $('#output').text("De minimale score is 1");
  } else {
    maxScore = document.getElementById('maxScoreField').value;
    $( ".mainMenu" ).fadeIn( "fast");
    $( ".settingsOverlay" ).hide( "fast");
  }
}
