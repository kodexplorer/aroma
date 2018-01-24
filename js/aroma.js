$(document).ready(function(){       
  var scroll_start = 0;
  var about = $('.coffee');
  var offset = about.offset();
    if (about.length){
   $(document).scroll(function() { 
      scroll_start = $(this).scrollTop();
      if(scroll_start > offset.top) {
          $(".navbar-inverse").css('background-color', '#000000');
       } else {
          $('.navbar-inverse').css('background-color', 'transparent');
       }
  });
    }

});

$(document).ready(function(){
  $('[data-toggle="tooltip"]').tooltip();   
});


var cr = 'Theme designed by &copy; <a href="http://www.kodexplorer.com">kodeXplorer.com</a>';
$(document).ready(function(){
  $(".copyright").append(cr) 
});


