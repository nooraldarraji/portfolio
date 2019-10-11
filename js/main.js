var doc = jQuery(document)

doc.ready(function() {

    'use strict';

    var typed = new Typed('.noorname-desc', {
        strings: ['I am Noor', 'I am Full-Stack Web Developer', 'Let me know if you liked my work :)'],
        smartBackspace: true, // Default value
        loop: true,
        backDelay: 1000,
        showCursor: true,
        cursorChar: '_',
        autoInsertCss: true,
        typeSpeed: 40
    })
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