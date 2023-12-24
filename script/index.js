//const
const getSelectorPopup = document.querySelector('.popup')
const getSelectorBurgerMenu = document.querySelector('.burger__wrap')
const getSelectorHeaderList = document.querySelector('.header-list')

//BurgerMenu
getSelectorBurgerMenu.onclick = function() {
    getSelectorBurgerMenu.classList.toggle('burger-active')
    getSelectorHeaderList.classList.toggle('nav-active')
}

//Sliders functional
const swiper = new Swiper('.swiper-container', {
    loop: true,
    navigation: {
        nextEl: '.swiper-button-prev',
        prevEl: '.swiper-button-next',
    },
    slidesPerView: 1,
    spaceBetween: 30,
    breakpoints: {
        800: {
            slidesPerView: 2,
        },
        1148: {
            slidesPerView: 2,
        },
    },
});

//Gallery functional
$(function() {
    $('.tab').on('click', function() {
        $('.potfolio__slider.slick-initialized').slick("setPosition");
        $('.potfolio__slider__nav.slick-initialized').slick("setPosition");
    });

    $('.potfolio__slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 3000,
        pauseOnHover: true,
        infinite: true,
        fade: true,
        asNavFor: '.potfolio__slider__nav'
    });

    $('.potfolio__slider__nav').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: false,
        autoplay: false,
        infinite: true,
        asNavFor: '.potfolio__slider',
        dots: false,
        centerMode: true,
        focusOnSelect: true,
        responsive: [
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 3,
                }
            }
        ]
    });
});

$(document).ready(function() {
    $('.popup-gallery').magnificPopup({
        delegate: 'a',
        type: 'image',
        tLoading: 'Loading image #%curr%...',
        mainClass: 'mfp__portfolio__popup',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            fixedContentPos: true,
            fixedBgPos: true,
            overflowY: 'auto',
            preload: [0, 1],
            arrowMarkup: '',
            tPrev: 'Назад',
            tNext: 'Next (Right arrow key)',
            tCounter: '%curr% из %total%'
        }
    });
});

//Tabs functional
$(document).ready(function() {
    $('.tab__item').not(':first').hide();
    $('.tabs__wrapper .tab').click(function() {
        $('.tabs__wrapper .tab').removeClass('active').eq($(this).index()).addClass('active');
        $('.tab__item').hide().eq($(this).index()).fadeIn()
    }).eq(0).addClass('active')
})

//Popup functional
window.onclick = function(event) {
    const target = event.target
    target.classList.contains('popup-btn') && getSelectorPopup.classList.add('popup-active')
    target.classList.contains('popup') && getSelectorPopup.classList.remove('popup-active')

    if (target.classList.contains('header-link')) {
        getSelectorHeaderList.classList.remove('nav-active')
        getSelectorBurgerMenu.classList.remove('burger-active')
    }
}

//Mask for form
$(function() {
    $.fn.setCursorPosition = function(pos) {
        if ($(this).get(0).setSelectionRange) {
            $(this).get(0).setSelectionRange(pos, pos);
        } else if ($(this).get(0).createTextRange) {
            var range = $(this).get(0).createTextRange();
            range.collapse(true);
            range.moveEnd('character', pos);
            range.moveStart('character', pos);
            range.select();
        }
    };
    $.mask.definitions['N'] = '[/0-6|9/]';
    $('input[type="tel"]').click(function() {
        $(this).setCursorPosition(3);
    }).mask("+7(N99) 999-99-99");
});

//Anchor functional
function removeLocationHash() {
    let noHashURL = window.location.href.replace(/#.*$/, '');
    window.history.replaceState('', document.title, noHashURL)
}
window.addEventListener("popstate", function(event) {
    removeLocationHash();
});
window.addEventListener("hashchange", function(event) {
    event.preventDefault();
    removeLocationHash();
});
window.addEventListener("load", function() {
    removeLocationHash();
});
