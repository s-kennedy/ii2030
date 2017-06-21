
function activateButton() {
  $('.day-selector button').removeClass('active');
  $(this).addClass('active');
};

function activateTrack() {
  $('.track').removeClass('active');
  $(this).addClass('active');
}

function activateAnimation() {
  $('#agenda .image .animate-move-right.active').removeClass('active')
  var day = $(this).data('day');
  if (day === 'day-1') {
    $('#agenda .image .animate-move-right:nth-of-type(2)').addClass('active');
  } else if (day === 'day-2') {
    $('#agenda .image .animate-move-right:nth-of-type(3)').addClass('active');
  } else {
    $('#agenda .image .animate-move-right:nth-of-type(1)').addClass('active');
  }
}

$(function(){
  $('.day-selector button').on('click', activateButton);
  $('.track').on('mouseover', activateTrack);
  $('#agenda .day-selector .btn').on('click', activateAnimation);

  $('#tour-factory .factory-button .next-btn').on('click', function() {
    $('.day-selector button').removeClass('active');
    $('.day-selector button.btn-day2').addClass('active');
  })

  $('#tour-factory .factory-button .prev-btn').on('click', function() {
    $('.day-selector button').removeClass('active');
    $('.day-selector button.btn-day1').addClass('active');
  })
});
