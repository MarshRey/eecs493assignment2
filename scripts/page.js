// ============== Winter 2024 EECS 493 Assignment 2 Starter Code ==============

// Main
$(document).ready(function () {
  // ====== Startup ======
  // TODO: DEFINE YOUR JQUERY SELECTORS HERE

});

// TODO: ADD YOUR EVENT HANDLERS HERE

$(document).ready(function () {
  // ====== Startup ======
  // TODO: DEFINE YOUR JQUERY SELECTORS HERE

  // TODO: ADD YOUR EVENT HANDLERS HERE
  $('#settingsBtn').click(function() {
    $('.settings-panel').show();
  });

  $('#playBtn').click(function() {
    $('.landing-page').hide();
    $('.tutorial-page').show();
  });

  $('#closeBtn').click(function() {
    $('.settings-panel').hide();
  });

  // $('#startBtn').click(function() {
  //   $('.tutorial-page').hide();
  //   $('.landing-page').show();
  // });

  // Update volume number when slider changes
  $('#volumeSlider').on('input change', function() {
    $('#volumeValue').text('Volume: ' + this.value);
  });
});

// Get all difficulty buttons
var difficultyButtons = document.querySelectorAll('.difficulty-button');

// Add click event listener to each button
difficultyButtons.forEach(function(button) {
  button.addEventListener('click', function() {
    // Remove .selected class from all buttons
    difficultyButtons.forEach(function(btn) {
      btn.classList.remove('selected');
    });

    // Add .selected class to clicked button
    this.classList.add('selected');
  });
});