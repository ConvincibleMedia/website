/* Tilt Effects */
$('.tilt').tilt({
   perspective: 1200,
   speed: 500,
   scale: 1.01
});

/* Links */
$('.link').each(function() {
   var go = $(this).find('a').attr('href');
   if (go == undefined) {
      $(this).toggleClass("link");
   } else {
      $(this).click(function() {
         window.location = go;
         return false;
      });
   };
});
$(".link").hover(function() {
   $(this).find('a').toggleClass("hover");
});

/* Match Height */
$(function() {
	$('.grid').matchHeight({
        property: 'min-height'
    });
    $('.grid-cards .card').matchHeight({
        property: 'min-height'
    });
});
$.fn.matchHeight._throttle = 500;
