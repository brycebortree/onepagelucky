jQuery(document).ready(function(){
  jQuery('#slideshow1').slippry({
    pause: 5000,
    autoDelay: 0,
    autoHover: false,
    speed: 4000,
    captions: false,
    pager: false,
    controls: false
  })

  jQuery('#slideshow2').slippry({
    pause: 5000,
    autoDelay: 0,
    autoHover: false,
    speed: 4000,
    captions: false,
    pager: false,
    controls: false
  })

      // Mobile Nav begin
    $('.mobile-nav-trigger').click(function() {
      if ($('.mobile-nav-dropdown').css('display') == 'block')
      {
        $('.mobile-nav-dropdown').fadeOut(200);
      }
      else
      {
        $('.mobile-nav-dropdown').fadeIn(200);
      }
      
      return false;
    });
    

    $('.mobile-nav-dropdown a').click(function() {
      if ($('.hp').length > 0)
      {
        pageScroller.goTo($(this).attr('data-target'));
        $('.mobile-nav-dropdown').fadeOut(200);
        return false;
      }
      else
      {
        return true;
      }
    });
  
    // Mobile Nav end
});
