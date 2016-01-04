/**
 * Toggler for gamburger menu in top header
 * @type {Element}
 */
var toggler = document.getElementById('js-toggler');
toggler.onclick = function(e){
    e.preventDefault();
    toggler.classList.toggle('header-toggler--close');
    document.getElementById('js-top-nav').classList.toggle('header__nav--visible');
};