document.addEventListener('DOMContentLoaded', function () {
    var cards = document.querySelectorAll('.animated-card');

    function isInViewport(element) {
        var rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function animateCards() {
        cards.forEach(function (card) {
            if (isInViewport(card)) {
                card.classList.add('card-in-view');
            }
        });
    }

    // Agrega evento de desplazamiento para verificar si las tarjetas están en la vista
    window.addEventListener('scroll', animateCards);
    window.addEventListener('resize', animateCards);

    // Inicia la animación cuando la página se carga
    animateCards();
});

$(document).ready(function () {
    $('a.nav-link').on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {
                window.location.hash = hash;
            });
        }
    });
});

let swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    centeredSlides: true,
    loop: true,
    spaceBetween: 25,
    grabCursor: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    breakpoints: {
        991: {
            slidesPerView: 3
        }
    },
    autoplay: {
        delay: 3000, // Cambia de slide cada 3 segundos
      },
});

const btnExpandText = document.getElementById("btnExpandText");
function expandText() {
    const additionalText = document.getElementById("additionalText");
    if (additionalText.style.display === "none") {
        additionalText.style.display = "inline";
        btnExpandText.style.display = "none";
    } else {
        additionalText.style.display = "none";
    }
}

