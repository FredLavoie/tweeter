$(document).ready(function() {
  // $('textarea').text('');

  $('textarea').on('keyup ', function(){
    let charRemaining = 140 - this.textLength;    
    if(charRemaining < 0) {
      $('.counter').css({color: 'red'});      
      $('.counter').text(charRemaining);
    } else {
      $('.counter').css({color: 'black'});
      $('.counter').text(charRemaining);
    }
  });
  
});

