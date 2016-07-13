
// Grain stylish
// var options = {
//     "animate": true,
//     "patternWidth": 463.87,
//     "patternHeight": 474.67,
//     "grainOpacity": 0.01,
//     "grainDensity": 1,
//     "grainWidth": 2.89,
//     "grainHeight": 1
// };
// grained("#home", options);
// grained("#aboutskills", options);

var startWordTypewriting = function() {
    var typeObject = $('.typewriting');
    typeObject.typed({
        strings: [
            "<span style='color:#F3707C'>hello world!</span>",
            "<span style='color:#E59C5E'>/I'm <span style='color:#BB6DD1'>Asya Lem</span>",
            "<span style='color:#90B762'>web-designer</span>"
        ],
        typeSpeed: 50,
        backDelay: 1500,
        backSpeed: 12,
        loop: true
    });
};

$(window).on('load', function() {
    setTimeout(function() {
        $(".wrapper").fadeOut("slow");

        setTimeout(function functionName() {
            startWordTypewriting();
        }, 500);
    }, 1000);
});

// Scroll Down
$(".scroll").onepage_scroll({
    sectionContainer: "section",
    easing: "ease",
    afterMove: function(index) {
        if (index == 2) {
            $(".progress-bar").each(function() {
                each_bar_width = $(this).attr('aria-valuenow');
                $(this).width(each_bar_width + '%');
            });
        }
    },
    loop: false,
    direction: "vertical"
});
