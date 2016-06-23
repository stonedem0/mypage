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

 var startWordTypewriting = function () {
   var typeObject = $('.types');

   var text1 = 'hello, world!';
   typeObject.typed( {strings: ["Typed.js is a <strong style='color:red'>jQuery</strong> plugin."]});
  //  typeObject.typistAdd(text1);
  //  typeObject.typistPause(1000);
  //  typeObject.typistRemove(text1.length);
  //  var text2 = "/i'm Asya Lem";
  //  typeObject.typistAdd(text2);
  //  typeObject.typistPause(1000);
  //  typeObject.typistRemove(text2.length);
  //  var text3 = "web-designer";
  //  typeObject.typistAdd(text3);
  //  typeObject.typistPause(2000);
  //  typeObject.typistRemove(text3.length, function () {
  //    startWordTypewriting();
  //  });



 };

 $(window).on('load', function () {
    setTimeout(function(){
      $(".wrapper").fadeOut("slow");

      setTimeout(function functionName() {
        // var typeObject = $('.types');
        // typeObject.typist({
        //     speed: 6
        // });
        startWordTypewriting();

      }, 500);

      // var $preloader = $('#page-preloader'),
      //     $spinner   = $preloader.find('.spinner');
      // $spinner.fadeOut();
      // $preloader.delay(350).fadeOut('slow');
    }, 1000);
 });
