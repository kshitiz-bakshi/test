
var typed = new Typed('.type', {
    // Waits 1000ms after typing "First"
    strings: ['Competitive Programmer',
        'Web Developer',
        'Photographer',
        'Computer Science Undergraduate'
    ],
    typeSpeed: 40,
    backSpeed: 40,
    loop: true,
    // loopCount: Infinity

});

function myFunction(x) {
    var y;
    if (x.matches) { // If media query matches
    //   document.body.style.backgroundColor = "yellow";
      y=450;
    } else {
    //  document.body.style.backgroundColor = "pink";
     y=0;
    }
    return y;
  }
  
  var x = window.matchMedia("(max-width: 700px)")
  var y=myFunction(x) // Call listener function at run time
  x.addListener(myFunction)


$(document).ready(function(){
    $(window).scroll(function(){
        var positiontop = $(document).scrollTop();
        console.log(positiontop);
        if((positiontop > 750+y) && (positiontop < 1400+y)){
            $('.animatable').addClass('animated')

        }
        if((positiontop > 1700+y) && (positiontop < 2350+y)){
            $('.animatable-edu').addClass('animated')

        }
        if((positiontop > 2100+y) && (positiontop < 2650+y)){
            $('.animatable-edu1').addClass('animated')

        }
        if((positiontop > 2600+y) && (positiontop < 3000+y)){
            $('.animatable-skill').addClass('animated')

        }

    

    });
});

(function ($) {
    "use strict"; // Start of use strict
    //The purpose of "use strict" is to indicate that the code should be executed in "strict mode".
    //With strict mode, you can not, for example, use undeclared variables (lessprone to errors)
    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
        if (
            location.pathname.replace(/^\//, "") ==
            this.pathname.replace(/^\//, "") &&
            location.hostname == this.hostname
        ) {
            var target = $(this.hash);
            target = target.length ?
                target :
                $("[name=" + this.hash.slice(1) + "]");
            if (target.length) {
                $("html, body").animate({
                    scrollTop: target.offset().top,
                },
                    1000,
                    "easeInOutExpo"
                );
                return false;
            }
        }
    });
    // Closes responsive menu when a scroll trigger link is clicked
    $(".js-scroll-trigger").click(function () {
        $(".navbar-collapse").collapse("hide");
    });
    // Activate scrollspy to add active class to navbar items on scroll
    $("body").scrollspy({
        target: "#sideNav",
    });
})(jQuery); // End of use strict





//dark mode
function make_me_dark() {
    var element = document.body;
    element.classList.toggle("dark-mode");
}

  //Hero 
