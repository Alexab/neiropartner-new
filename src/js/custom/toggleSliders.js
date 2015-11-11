/* Toogle sliders */

function toggleSliders(){
    if (document.querySelectorAll('.sliders')) {
        var links = document.querySelectorAll('.small-menu__link'),
            articles = document.querySelector('.js-articles'),
            patents = document.querySelector('.js-patents'),
            video = document.querySelector('.js-video');

        patents.style.display='none';
        video.style.display='none';
        articles.style.display='flex';

        for (i=0; i < links.length; i++){
            links[i].onclick = function(){

                for (m=0; m < links.length; m++){
                    links[m].classList.remove('small-menu__link--active');
                }

                this.classList.add('small-menu__link--active');
                if (this.classList.contains('js-find-articles')){
                    patents.style.display='none';
                    video.style.display='none';
                    articles.style.display='flex';
                } else if (this.classList.contains('js-find-patents')) {
                    patents.style.display='flex';
                    video.style.display='none';
                    articles.style.display='none';
                } else if (this.classList.contains('js-find-video')) {
                    patents.style.display='none';
                    video.style.display='flex';
                    articles.style.display='none';
                }

            }
        }
    }
}