var options = {
  "animate": true,
  "patternWidth": 495.87,
  "patternHeight": 500,
  "grainOpacity": 0.07,
  "grainDensity": 1.39,
  "grainWidth": 1,
  "grainHeight": 1
};

grained("#headerwrap", options);
// grained("#f", options);

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
