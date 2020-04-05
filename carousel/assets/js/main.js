var btnNext = document.querySelector('#btnRight');
var btnPrev = document.querySelector('#btnLeft');
var images = document.querySelectorAll('.carousel-wrapper img');
var carouselWrapper = document.querySelector('.carousel-wrapper');;
var i = 0;
btnNext.addEventListener('click', nextImage);
btnPrev.addEventListener('click', prevImage);

function nextImage() {
    if (i < 2) {
        i++;
        carouselWrapper.firstElementChild.replaceWith(images[i]);
    } else {
        i = 0;
        carouselWrapper.firstElementChild.replaceWith(images[0]);
    }
}

function prevImage() {
    if (i > 0){
        i--;
        carouselWrapper.firstElementChild.replaceWith(images[i]);
    }
    else if (i==0){
        i=2;
        carouselWrapper.firstElementChild.replaceWith(images[i]);
    }
}