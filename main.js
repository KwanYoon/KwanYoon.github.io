function vh(v) {
    var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    return (v * h) / 100;
};


window.onscroll = () => {
    const nav = document.querySelector('#topnav');
    const offset = vh(7.5);
    var profilePos = document.querySelector('#profile').offsetTop - offset,
        profileNav = document.querySelector("#nav-profile"),
        skillsPos = document.querySelector('#skills').offsetTop - offset,
        skillsNav = document.querySelector('#nav-skills'),
        projectsPos = document.querySelector('#projects').offsetTop - offset,
        projectsNav = document.querySelector('#nav-projects'),
        experiencesPos = document.querySelector('#experiences').offsetTop - offset,
        experiencesNav = document.querySelector('#nav-experiences'),
        contactsPos = document.querySelector('#contacts').offsetTop - offset,
        contactsNav = document.querySelector('#nav-contacts');

    if(this.scrollY < profilePos) {
        nav.className = 'topnav'
    } else {
        nav.className = 'topnav-scroll'
    }

    if((skillsPos < this.scrollY) || (this.scrollY < profilePos)) {
        profileNav.className = "nav-item";
    } else {
        profileNav.className = "topnav-onpage";
    }

    if((projectsPos < this.scrollY) || (this.scrollY < skillsPos)) {
        skillsNav.className = "nav-item";
    } else {
        skillsNav.className = "topnav-onpage";
    }

    if((experiencesPos < this.scrollY) || (this.scrollY < projectsPos)) {
        projectsNav.className = "nav-item";
    } else {
        projectsNav.className = "topnav-onpage";
    }

    if((contactsPos < this.scrollY) || (this.scrollY < experiencesPos)) {
        experiencesNav.className = "nav-item";
    } else {
        experiencesNav.className = "topnav-onpage";
    }

    if(this.scrollY < contactsPos) {
        contactsNav.className = "nav-item";
    } else {
        contactsNav.className = "topnav-onpage";
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
            targetPos = $(target).offset().top
            offset = vh(7);
        
        $('body, html').animate({'scrollTop': targetPos - offset}, 5);
    });
});