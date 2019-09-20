var gotop = $('.scroll-to-top');
  var position = gotop.offset().top;
  $(window).on('scroll',function() {
    var windowposition = $(window).scrollTop();
    if(windowposition + $(window).height() == $(document).height()) {
      gotop.removeClass('active');
    }
    else if (windowposition > 150) {
      gotop.addClass('active');
    }
    else {
      gotop.removeClass('active');
    }
  });
  jQuery('.scroll-to-top a').on('click',function () {
    jQuery('body,html').animate ({
      scrollTop: 0
    }, 1500);
    return false;
  });