'use strict';

$(document).ready(function () {
    $('.icon-menu').click(function (event) {
        $(this).toggleClass('active');
        $('.menu__body').toggleClass('active');
        $('body').toggleClass('lock');
    });

    let newsImg = document.querySelectorAll('.news__img');
    let newsCover = document.querySelectorAll('.news__img_cover');
    for (let i = 0; newsImg.length; i++) {
        newsImg[i].addEventListener('mouseenter', function () {
            newsCover[i].classList.toggle('active');
        });
        newsImg[i].addEventListener('mouseleave', function () {
            newsCover[i].classList.remove('active');
        });
    };
});