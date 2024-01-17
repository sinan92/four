document.addEventListener('DOMContentLoaded', function () {
    const body = document.body;
    const modeToggle = document.getElementById('modeToggle');

    modeToggle.addEventListener('click', function () {
        body.classList.toggle('light-mode');
        body.classList.toggle('dark-mode');
    });

    new Swiper(".swiper-standard", {
        slidesPerView: 1.5,
        spaceBetween: 5,
        keyboard: {
            enabled: true,
        },
    });

    new Swiper(".swiper-popular", {
        slidesPerView: 1.2,
        spaceBetween: 5,
        pagination: {
            el: ".swiper-pagination",
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        keyboard: {
            enabled: true,
        },
    });

    new Swiper(".swiper-highlights", {
        slidesPerView: 1.2,
        spaceBetween: 5,
        keyboard: {
            enabled: true,
        },
    });
});
