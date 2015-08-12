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
  if( parseInt($("#entry_1682894312").val()) == 0) {
    alert('Please select what you are registering for');
  } else {
    $.post(url, data, function(response) {
    console.log(respnse);
    });
  }
});

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});
