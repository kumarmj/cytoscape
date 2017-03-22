
// just some fluff for the intro sexyness
$(function() {

  $('.cube').each( function(k,el) {
    
    setTimeout( function() {
      $(el).removeClass('zoom');
    }, k*200 );
    
    setTimeout( function() {
      $(el).addClass('hover');
    }, 2111 + k*417 );
    
  });


});