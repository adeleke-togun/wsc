/*!
 * Start Bootstrap - Agency Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
});

$(document).ready(function(){
  $('#entry_1682894312').on('change', function(){
    var chose = $(this).val();
    var team = $('#entry_1035444962');
    if(chose == 'Hackathon') {
      team.removeAttr('disabled');
    } else {
      team.attr('disabled','disabled');
    }
  });
});

$('#ss-form').on('submit', function(e){
  e.preventDefault();
  var url = 'https://docs.google.com/forms/d/1Pc2pNL0XIl1lPG_oi3Nm7UbYwxs9IGirBkr7rlBKzPE/formResponse';
  var data = $(this).serialize();
  var req = $('.req');
  var btn = $(this).find(':submit');
  btn.attr('disabled','disabled');

  /* Check for empty inputs */
  req.each(function(i, elem){
    if($.trim($(elem).val().length) < 1) {
      swal({
        title: 'Oops',
        text: 'please enter ' + $(this).attr('placeholder'),
        type: 'warning'
      });
      // alert('please enter ' + $(this).attr('placeholder'));
      btn.removeAttr('disabled');
      exit();
    }
  });

  if(parseInt($("#entry_1682894312").val()) === 0) {
    alert('Please select what you are registering for');
    btn.removeAttr('disabled');
  } else {
    $.post(url, data);
    btn.removeAttr('disabled');
    swal("Awesome!", "Thank you for registering!", "success")
    $('#entry_1035444962').val('');
    req.each(function(i, e){
      $(e).val('');
    });
  }
});

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});
