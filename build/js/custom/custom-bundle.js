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


/**
 * Centering element with position: absolute in container block
 */
function positionedAbsoluteElementHorizontalCenter(containerSelector,elementSelector){

    if (document.querySelector(containerSelector)) {
        var container = document.querySelector(containerSelector),
            element = container.querySelector(elementSelector),
            elementWidth = element.clientWidth,
            containerWidth = container.clientWidth,
            leftIndent = (containerWidth / 2) - (elementWidth / 2);
        element.style.left = ''+leftIndent+'px';
    }
}
/* Call Owl Carousel if there is more items in block then need */

function setOwlCarouselIfMoreThen(container, count, navContainer) {
    navContainer = navContainer || false; // navContainer is optional argument, if it is not set - use default "false

    if (document.querySelector(container)) {
        var items = document.querySelector(container).children;

        if (items.length) { // check if there is children in container
            if (items.length > count ) { // call Owl if items more then count
                $(container).owlCarousel({
                    dots: false,
                    nav: true,
                    navContainer: navContainer,
                    navText:[],
                    loop: true,
                    lazyLoad:true,
                    responsive : {
                        // breakpoint from 300 up
                        300 : {
                            items: 1,
                            margin: 10
                            //center: true
                        },
                        // breakpoint from 770 up
                        770 : {
                            items: 2,
                            margin: 10
                        },
                        // breakpoint from 1300 up
                        1300 : {
                            items: count,
                            margin: 30
                        }
                    }
                });
            }
        }
    }
}

/* Toogle sliders */
var tabLinks = new Array();
var contentDivs = new Array();


function initArticlesTabs() {

    // Grab the tab links and content divs from the page
    var tabListItems = document.querySelector('.js-article-tabs').childNodes;
    for ( var i = 0; i < tabListItems.length; i++ ) {
        if ( tabListItems[i].nodeName == "LI" ) {
            var tabLink = getFirstChildWithTagName( tabListItems[i], 'A' );
            var id = getHash( tabLink.getAttribute('href') );
            tabLinks[id] = tabLink;
            contentDivs[id] = document.getElementById( id );
        }
    }

    // Assign onclick events to the tab links, and
    // highlight the first tab
    var i = 0;

    for ( var id in tabLinks ) {
        tabLinks[id].onclick = showTab;
        tabLinks[id].onfocus = function() { this.blur() };
        if ( i == 0 ) tabLinks[id].className = 'small-menu__link small-menu__link--active';
        i++;
    }

    // Hide all content divs except the first
    var i = 0;

    for ( var id in contentDivs ) {
        if ( i != 0 ) contentDivs[id].className = 'sliders hide';
        i++;
    }
}

function showTab() {
    var selectedId = getHash( this.getAttribute('href') );

    // Highlight the selected tab, and dim all others.
    // Also show the selected content div, and hide all others.
    for ( var id in contentDivs ) {
        if ( id == selectedId ) {
            tabLinks[id].className = 'small-menu__link small-menu__link--active';
            contentDivs[id].className = 'sliders';
        } else {
            tabLinks[id].className = 'small-menu__link';
            contentDivs[id].className = 'sliders hide';
        }
    }

    // Stop the browser following the link
    return false;
}

function getFirstChildWithTagName( element, tagName ) {
    for ( var i = 0; i < element.childNodes.length; i++ ) {
        if ( element.childNodes[i].nodeName == tagName ) return element.childNodes[i];
    }
}

function getHash( url ) {
    var hashPos = url.lastIndexOf ( '#' );
    return url.substring( hashPos + 1 );
}




var videoHTML5Youtube = function () {
    var videos = document.querySelectorAll("video");
    for (var i = 0, l = videos.length; i < l; i++) {
        var video = videos[i];
        var src = video.src || (function () {
                var sources = video.querySelectorAll("source");
                for (var j = 0, sl = sources.length; j < sl; j++) {
                    var source = sources[j];
                    var type = source.type;
                    var isMp4 = type.indexOf("mp4") != -1;
                    if (isMp4) return source.src;
                }
                return null;
            })();
        if (src) {
            var isYoutube = src && src.match(/(?:youtu|youtube)(?:\.com|\.be)\/([\w\W]+)/i);
            if (isYoutube) {
                var id = isYoutube[1].match(/watch\?v=|[\w\W]+/gi);
                id = (id.length > 1) ? id.splice(1) : id;
                id = id.toString();
                var mp4url = "http://www.youtubeinmp4.com/redirect.php?video=";
                video.src = mp4url + id;
            }
        }
    }
};

