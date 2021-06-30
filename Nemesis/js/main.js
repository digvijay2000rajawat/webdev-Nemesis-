(function ($) {
    "use strict";

    var minimumWidth;
    if (Modernizr.mq('(min-width: 0px)')) {
        minimumWidth = function (width) {
            return Modernizr.mq('(min-width: ' + width + 'px)');
        }
    } else {
        minWidth = function (width) {
            return $window.width() >= width;
        }
    };


    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll > 300 & minimumWidth(1200)) {
            $(".fbt_sticky_nav").addClass("sticky__nav");
        } else {
            $(".fbt_sticky_nav").removeClass("sticky__nav");
        }
        if (scroll > 400 & minimumWidth(1200)) {
            $(".fbt_sticky_nav").addClass("nav_offset");
        } else {
            $(".fbt_sticky_nav").removeClass("nav_offset");
        }
        if (scroll > 500 & minimumWidth(1200)) {
            $(".fbt_sticky_nav").addClass("scrolling_nav");
        } else {
            $(".fbt_sticky_nav").removeClass("scrolling_nav");
        }
    });


    


    $().UItoTop({
        easingType: 'easeOutQuart'
    });


    $('.lazyloaded').lazy();


    (function () {
        var commentListTrigger = $('.fbt-comment-button, .fbt_bottom_toogle'),
            commentListTriggerIcon = $('.fbt-comment-button').find('span'),
            commentListTriggerClose = $('.fbt_bottom_toogle').find('span'),
            commentListBox = $('.comment-list');
        commentListTrigger.on('click', function (e) {
            e.preventDefault();
            commentListTriggerIcon.toggleClass('fbt-close-icon');
            commentListTriggerClose.toggleClass('fbt_hide_comments');
            commentListBox.slideToggle();
        });
    })();

})(jQuery);


(function ($) {
    var carouselContainer = $('#TopSliderPosts');
    function toggleH() {
        $('.slider-title').hide();
        var caption = carouselContainer.find('.active').find('.slider-title').addClass('animated fadeIn').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
            function () {
                $(this).removeClass('animated fadeIn')
            });
        caption.slideToggle();
    };
    function toggleC() {
        $('.slider-button').hide();
        var button = carouselContainer.find('.active').find('.slider-button').addClass('animated fadeIn').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
            function () {
                $(this).removeClass('animated fadeIn')
            });
        button.slideToggle();
    };
    carouselContainer.carousel().on('slide.bs.carousel slid.bs.carousel', toggleH).trigger('slide.bs.carousel').on('slide.bs.carousel slid.bs.carousel', toggleC).trigger('slide.bs.carousel');
})(jQuery);