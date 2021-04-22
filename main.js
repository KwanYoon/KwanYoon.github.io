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
});


var i = 0;
var txt = ["student", "programmer", "full-stack developer"];
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

$(function() {
    $(".inner-bar-graph").each(function(key, bar) {
        var percentage = $(this).data('percentage');
        $(this).animate({
            'width' : percentage + '%'
        }, 1000);
    });
});
