
PARTICIPANT_TYPES = [
  'corporates',
  'startups',
  'the public sector',
  'NGOs',
  'science'
];

function activateButton() {
  $('.day-selector button').removeClass('active');
  $(this).addClass('active');
};

function cycleParticipants() {
  var textSpan = $('#cycle-participants')
  var currentText = textSpan.text();
  var currentTextIndex = PARTICIPANT_TYPES.indexOf(currentText);
  var newPosition = currentTextIndex >= (PARTICIPANT_TYPES.length -1) ? 0 : currentTextIndex + 1
  var newText = PARTICIPANT_TYPES[newPosition];

  textSpan.text(newText);
};

function activateTrack() {
  $('.track').removeClass('active');
  $(this).addClass('active');
}


$(function(){
  $('.day-selector button').on('click', activateButton);
  $('.track').on('mouseover', activateTrack)
  window.setInterval(cycleParticipants, 2500);

});
