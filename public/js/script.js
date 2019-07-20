const $window = $(window);
const header = $('.header-navi-area');
const heroHeight = $('.hero-area').height();

$window.on('scroll', function() {
  if($window.scrollTop() > heroHeight) {
    header.addClass('fixed');
  } else {
    header.removeClass('fixed');
  }
});

$window.trigger('scroll');