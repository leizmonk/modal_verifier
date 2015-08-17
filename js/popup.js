(function($){
  $(document).ready(function(){
    var cookie = Cookies.get('visit');

    // Get screen height and width for popup overlay
    var docHeight = $(document).height();
    var windowHeight = $(window).height();
    var windowWidth = $(window).width();

    
    // If cookie is not present, set it, then show popup age checker
    if (cookie == null) {
      // Create a cookie to log user visit
      Cookies.set('visit', 'visited', { expires: 60 });

      // Set popup overlay height
      $('#age-popup-overlay').css('height', docHeight);

      // Fade in popup
      $('.age-popup').fadeIn(1500);

      // Close window & overlay on button click
      $('#over-18').click(function(event){
        event.preventDefault();
        $('.age-popup').fadeOut(1500);
        $('#age-popup-overlay').fadeOut(1500);
      });

      $('#under-18').click(function(event){
        event.preventDefault();
        $('.age-popup').html('<h3 style="padding: 0 10px;">Sorry, you must be over the age of 18 to view this site!</h3><br /><center><img src="https://cdn.shopify.com/s/files/1/0926/0680/t/2/assets/no-entry.png?7276762116132245119" /></center>');
      });
    } else {
      return false;
    }
    
    // When window is resized or rotated
    $(document).resize(function(){
      $('#age-popup-overlay').css('height', '100%');   
    });
    
  });
})(jQuery);