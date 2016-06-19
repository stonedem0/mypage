var options = {
  "animate": true,
   "patternWidth": 463.87,
   "patternHeight": 474.67,
   "grainOpacity": 0.01,
   "grainDensity": 1,
   "grainWidth": 2.89,
   "grainHeight": 1
};

 // grained("#headerwrap", options);
 // grained("#aboutskills", options);

$(function () {
  $('[data-toggle="tooltip"]').tooltip({trigger: 'manual'}).tooltip('show');
});

 $( window ).scroll(function() {
  if($( window ).scrollTop() > 10){
  $(".progress-bar").each(function(){
    each_bar_width = $(this).attr('aria-valuenow');
    $(this).width(each_bar_width + '%');
  });

   }
 });

 $(window).on('load', function () {
    setTimeout(function(){
      $(".wrapper").fadeOut("slow");

      setTimeout(function functionName() {
        var typeObject = $('.types');
        typeObject.typist({
            speed: 8
        });
        typeObject.typistAdd('hello, world!', function () {
          typeObject.typistRemove("");
          typeObject.typistAdd('Another text', function () {

          });
        });

      }, 500);

      // var $preloader = $('#page-preloader'),
      //     $spinner   = $preloader.find('.spinner');
      // $spinner.fadeOut();
      // $preloader.delay(350).fadeOut('slow');
    }, 1000);
 });
