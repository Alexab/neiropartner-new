window.onload = function(){

    // Form validate
    //$("form").each( function() {
    //    $(this).validate();
    //} );

    form = $("form");

    form.each( function() {
        $(this).validate({});
    } );

    form.submit (function(event) {
        if (form.valid())
        {
            $('.feedback__form-left, .feedback__form-right').hide();
            $('.feedback__aftersubmit').show();
            $('.contacts__form-left, .contacts__form-right').hide();
            $('.contacts__aftersubmit').show();

            $.ajax({
                type: form.attr("method"), // use method specified in form attributes
                url: form.attr("action"), // use action specified in form attributes
                data: form.serialize(), // encodes set of form elements as string for submission
                success: function(data) {
                    // get response from servlet and display on page via jQuery
                }
            });
        }
        event.preventDefault(); // stop form from redirecting to java servlet page
    });

    /**
     * Init Images lazy loading
     * https://github.com/verlok/lazyload
     * DO NOT set src attribute to img tag.
     * SET data-original="path_to_img"
     * SET CSS class .lazyload to all img tags
     * Example: <img class="lazyload" data-original="img/img.png" alt="alt text" title="title text">
     **/
    var AMGLazyLoad = new LazyLoad({
        elements_selector: ".lazyload", // img
        data_srcset: "original", // original-set
        skip_invisible: false
    });

    // Call Owl-Carousel on header slider
    $(".js-owl-top-slider").owlCarousel({
        items: 1,
        nav: false,
        dots: true,
        autoplayHoverPause: true,
        navContainer: ".owl-own-nav",
        navText:[],
        loop: true,
        lazyLoad:true,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        smartSpeed:500
    });

    // Center header slider dots
    //positionedAbsoluteElementHorizontalCenter('.js-owl-top-slider','.owl-dots');

    // Call Owl-Carousel on our works block if there os more than 4 works
    setOwlCarouselIfMoreThen(".js-owl-works-slider", 4, ".owl-own-nav-works");

    // Call Owl-Carousel on our works block if there os more than 4 works
    setOwlCarouselIfMoreThen(".js-owl-about-slider", 4, ".owl-own-nav-about");

    // Call Owl-Carousel on projects block if there os more than 4 works
    setOwlCarouselIfMoreThen(".js-owl-projects-slider", 3, ".owl-own-nav-projects");

    // Call Owl-Carousel on partners block if there os more than 4 works
    setOwlCarouselIfMoreThen(".js-owl-partners-slider", 4, ".owl-own-nav-partners");

    // Call Owl-Carousel on video block if there os more than 4 works
    setOwlCarouselIfMoreThen(".js-owl-video-slider", 3, ".owl-own-nav-video");

    // Call Owl-Carousel on video block if there os more than 4 works
    setOwlCarouselIfMoreThen(".js-owl-patents-slider", 4, ".owl-own-nav-patents");

    // Toogle sliders on project pages
    initArticlesTabs();

};

