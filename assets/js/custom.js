
PARTICIPANT_TYPES = [
  'corporates',
  'startups',
  'the public sector',
  'NGOs',
  'science'
];

function selectAgendaItem() {
  $('.day-selector button, .agenda-item').removeClass('active');

  var selectedDay = $(this).data('day');
  var selectedDayClass = '.' + selectedDay;

  $(selectedDayClass).addClass('active');
};

function cycleParticipants() {
  var textSpan = document.getElementById('cycle-participants');
  var currentText = textSpan.textContent;
  var currentTextIndex = PARTICIPANT_TYPES.indexOf(currentText);
  var newPosition = currentTextIndex >= (PARTICIPANT_TYPES.length -1) ? 0 : currentTextIndex + 1
  var newText = PARTICIPANT_TYPES[newPosition];

  textSpan.textContent = newText;
};

function activateTrack() {
  $('.track').removeClass('active');
  $(this).addClass('active');
}


$(function(){
  $('.day-selector button').on('click', selectAgendaItem);
  $('.track').on('mouseover', activateTrack)
  window.setInterval(cycleParticipants, 2500);

});
