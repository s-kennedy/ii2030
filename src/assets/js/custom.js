
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

function activateAnimation() {
  console.log
  $('#agenda .image .animate-buzz-out.active').removeClass('active')
  var day = $(this).data('day');
  if (day === 'day-1') {
    $('#agenda .image .animate-buzz-out:nth-of-type(2)').addClass('active');
  } else if (day === 'day-2') {
    $('#agenda .image .animate-buzz-out:nth-of-type(3)').addClass('active');
  } else {
    $('#agenda .image .animate-buzz-out:nth-of-type(1)').addClass('active');
  }
}


$(function(){
  $('.day-selector button').on('click', activateButton);
  $('.track').on('mouseover', activateTrack);
  $('#agenda .day-selector .btn').on('click', activateAnimation);
  window.setInterval(cycleParticipants, 2500);

});
