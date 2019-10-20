var doc = jQuery(document)

doc.ready(function() {

    'use strict';

    $(window).scrollTop(0) //  Re-set the scroll value to zero so the navbar color won't get faded on refresh.

    var typed = new Typed('.noorname-desc', {
        strings: ['Hello, my name is Noor, I am Full-Stack Web Developer, feel free to take a look at my latest projects and contact me using any of my socials below.'],
        smartBackspace: true, // Default value
        loop: false,
        backDelay: 1000,
        showCursor: true,
        cursorChar: '_',
        autoInsertCss: true,
        typeSpeed: 40
    })

    $('.navbar-nav').onePageNav({
        currentClass: 'active'
    });
})

if ($(window).scrollTop() < 200) {
    $('.navbar-nav').addClass('navbar-nav-bg')
}

$(window).scroll(function() {

    var top = $(window).scrollTop()

    if (top >= 200) {

        $('header').addClass('overlay')
        $('.navbar-nav').removeClass('navbar-nav-bg')

    } else if ($('header').hasClass('overlay')) {

        $('header').removeClass('overlay')

    } else {

        $('.navbar-nav').addClass('navbar-nav-bg')

    }

    $('.progress-content .skill-progress').each(function() {

        var waypoint = new Waypoint({
            element: this,
            handler: function(direction) {
                var value = $(this.element).attr('data-progress')
                $(this.element).css('width', '' + value + '%')
            },
            offset: '80%'
        })
    })

    var $grid = $('.projects-container').isotope({
        itemSelector: '.projects-item'
    })

    $('.filter li').on('click', function() {
        $('.filter li').removeClass('filter-active')
        var filterValue = $(this).attr('data-filter')
        $grid.isotope({ filter: filterValue })
        $(this).addClass('filter-active')
    })

})