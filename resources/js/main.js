$(document).ready(function() {

// To slide up the jumbotron
$('#find-smokey-button').on('click', function() {
   $('#smokey-main').slideUp("slow");
   });



  // To slide down the dragon tool from a hidden start point
   $('.dragon-container').hide()
   $('#dragon-translator').on('click', function() {
      $('.dragon-container').slideToggle("slow");
      });

  // Start: Title button's functionality
  $('#Translator .dragon-button').on('click', function() {
    var title = $('#dragon-input').val();
    var gG = 'gg';
    var Dragon = 'ROAR';
    var Message = 'ROARUR';
    var Message1 = 'ROARURU';
    if (title == gG) {
       $('.dragon-speak').text('hello')
    $('#dragon-input').val('');
    }

     else if (title == Dragon) {
    $('.dragon-speak').text('That is a scarey ROAR');
    $('#dragon-input').val('');
    }

    else if (title == Message) {
   $('.dragon-speak').text('I will be announcing something at 11am tomorrow');
    $('#dragon-input').val('');
    }

    else if (title == Message1) {
   $('.dragon-speak').text('Do you not just love the touch of beach sand?');
    $('#dragon-input').val('');
    }

    else {
    $('.dragon-speak').text('This is not Dragon language. Try again');
    $('#dragon-input').val('');
    }

  });

});
