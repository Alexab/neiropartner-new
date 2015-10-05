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
        data_srcset: "original" // original-set
    });

    // Call Owl-Carousel on header slider
    $("#js-owl-top-slider").owlCarousel({
        items: 1,
        //center: true,
        //loop: true,
        nav: true,
        //autoWidth: true,
        dots: true,
        autoplay: true,
        autoplayTimeout: 4000,
        autoplayHoverPause: true,
        navContainer: ".owl-own-nav",
        navText:[]
    });

    // Call Owl-Carousel on our works slider
    $("#js-owl-works-slider").owlCarousel({
        //items: 4,
        //center: true,
        //loop: false,
        //nav: true,
        //autoWidth: true,
        //dots: false,
        //autoplay: true,
        //autoplayTimeout: 4000,
        //autoplayHoverPause: true,
        //navContainer: ".owl-own-nav",
        //navText:[]
    });

    // Center header slider dots
    positionedAbsoluteElementHorizontalCenter('#js-owl-top-slider','.owl-dots');
};

