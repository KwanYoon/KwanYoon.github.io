function vh(v) {
    var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    return (v * h) / 100;
};


window.onscroll = () => {
    const nav = document.querySelector('#topnav');
    const offset = vh(7.5);
    var homePos = document.querySelector('.home').offsetHeight;

    console.log(homePos);
    if(this.scrollY < homePos - offset) {
        nav.className = 'topnav'
    } else {
        nav.className = 'topnav-scroll'
    }
};


$(document).ready(() => {
    $($('#titlebar')).css("visibility", "hidden");
    $($('#sub-titlebar')).css("visibility", "hidden");
    $($('#linkedin')).css("visibility", "hidden");
    $($('#github')).css("visibility", "hidden");
    $($('#website')).css("visibility", "hidden");

    $($('#titlebar')).css("visibility", "visible").hide().fadeIn(600, function() {
        $($('#sub-titlebar')).css("visibility", "visible").hide().fadeIn(500, function() {
            $($('#linkedin')).css("visibility", "visible").hide().fadeIn(500);
            $($('#github')).css("visibility", "visible").hide().fadeIn(500);
            $($('#website')).css("visibility", "visible").hide().fadeIn(500);
        })
    });

    $($('.nav-item')).on('click', function(e) {
        var target = $($(this).attr('href')),
            targetPos = $(target).offset().top,
            offset = vh(7);
        
        $('body, html').animate({'scrollTop': targetPos - offset}, 5);
    });

    setTimeout(typeWriter, 1000);


    // See more button on skills page
    $(".text-button").click(function() {
        var clickedId = "#" + $(this).attr('id');
        var dropdownId = clickedId + "-dropdown";
        if ($(dropdownId).css('display') == "none") {
            $(dropdownId).slideDown();
            $(clickedId).html("See less");
        } else {
            $(dropdownId).slideUp();
            $(clickedId).html("See more");
        }
    });


    // slide in effect
    (function($) {
        $.fn.visible = function() {
            var viewTop       = $(window).scrollTop(),
                viewBottom    = viewTop + $(window).height(),
                _top          = $(this).offset().top,
                _bottom       = _top + $(this).height()

          return _bottom < viewBottom || _top < viewBottom;
        };
    })(jQuery);
    
    var allElem = $(".element");
    var allSkills = $(".skill-section");
    
    allElem.each(function(i, el) {
        var el = $(el);
        if (el.visible()) {
            el.addClass("already-visible"); 
        }
    });

    allSkills.each(function(i, el) {
        var el = $(el);
        if (el.visible()) {
            el.addClass("already-visible");
        }
    });
    
    $(window).scroll(function(event) {
        allElem.each(function(i, el) {
            var el = $(el);
            if (el.visible() && !el.hasClass("already-visible")) {
                el.addClass("come-in"); 
            } 
        });

        allSkills.each(function(i, el) {
            var el = $(el);
            if (el.visible() && !el.hasClass("already-visible")) {
                el.addClass("come-in");
                $(".inner-bar-graph").each(function(i, el) {
                    var el = $(el);
                    $(".inner-bar-graph").each(function(i, bar) {
                        var bar = $(bar);
                        if (bar.parents().hasClass("come-in")) {
                            var percentage = bar.data('percentage');
                            bar.animate({
                                'width' : percentage + '%'
                            }, 1000);
                        }
                    });
                });
            }
        });
    });
});

$(function() {
    $(".inner-bar-graph").each(function(i, el) {
        var el = $(el);
        if (el.parents().hasClass("already-visible")) {
            var percentage = el.data('percentage');
            el.animate({
                'width' : percentage + '%'
            }, 1000);
        }
    });
});

var i = 0;
var txt = ["student", "programmer", "full-stack developer", "software developer"];
var txtPlace = 0;
var speed = 100;
var backspace = false;

function typeWriter() {
    if (i == 0) {
        backspace = false;
        document.getElementById("alternate").textContent = "";
        txtPlace++;
        if (txtPlace >= txt.length) {
            txtPlace = 0;
        }
    } else if (i == txt[txtPlace].length) {
        backspace = true;
    }

    if (!backspace) {
        document.getElementById("alternate").innerHTML += txt[txtPlace].charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    } else {
        document.getElementById("alternate").textContent = txt[txtPlace].substring(0, i);
        i--;
        setTimeout(typeWriter, speed);
    }
}

function overlayOn(clickedId) {
    document.getElementById(clickedId + "-overlay").style.display = "block";
}

function overlayOff(clickedId) {
    document.getElementById(clickedId).style.display = "none";
}
