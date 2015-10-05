window.onload = function(){

    /**
     * Init Images lazy loading
     * https://github.com/verlok/lazyload
     * DO NOT set src attribute to img tag.
     * SET data-original="path_to_img"
     * SET CSS class .lazyload to all img tags
     * Example: <img class="lazyload" data-original="img/img.png" alt="alt text" title="title text">
     *
     *  TODO: незабыть в мануал написать про использование
     */
    var AMGLazyLoad = new LazyLoad({
        elements_selector: ".lazyload", // img
        data_srcset: "original", // original-set
        skip_invisible: false
    });

    // Call Owl-Carousel on header slider
    $(".js-owl-top-slider").owlCarousel({
        items: 1,
        nav: true,
        dots: true,
        autoplay: true,
        autoplayTimeout: 4000,
        autoplayHoverPause: true,
        navContainer: ".owl-own-nav",
        navText:[],
        loop: true
    });

    // Center header slider dots
    positionedAbsoluteElementHorizontalCenter('.js-owl-top-slider','.owl-dots');

    // Call Owl-Carousel on our works slider
    $(".js-owl-works-slider").owlCarousel({
        dots: false,
        items: 4,
        autoWidth: true,
        margin: 30,
        nav: true,
        navContainer: ".owl-own-nav-works",
        navText:[],
        loop: true
    });

    // Call Owl-Carousel on partner slider
    $(".js-owl-partners-slider").owlCarousel({
        dots: false,
        items: 4,
        autoWidth: true,
        margin: 40,
        nav: true,
        navContainer: ".owl-own-nav-partners",
        navText:[],
        loop: true
    });

};

