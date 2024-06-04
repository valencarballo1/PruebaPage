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
    }
});


// Obtener todos los elementos swiper-slide
let swiperSlides = document.querySelectorAll('.swiper-slide');

// Agregar evento de clic a cada swiper-slide
swiperSlides.forEach((slide, index) => {
    slide.addEventListener('click', () => {
        // Obtener información correspondiente a la imagen clicada
        let imageSrc = slide.querySelector('img').src;
        let title = slide.querySelector('h3').innerText;

        // Actualizar el contenido del modal con la información
        document.getElementById('modalTitle').innerText = title;
        document.getElementById('modalImage').src = imageSrc;
        document.getElementById('modalDescription').innerText =
            'Contratado mediante el Gobierno de la Ciudad como controladora y por el Comitente “Los amigos de la calle Florida”. Puesta a punto de la fachada. Restauración y albañilería.';

        $('#myModal').modal('show');
    });
});

// const btnExpandText = document.getElementById("btnExpandText");
// function expandText() {
//     const additionalText = document.getElementById("additionalText");
//     if (additionalText.style.display === "none") {
//         additionalText.style.display = "inline";
//         btnExpandText.style.display = "none"; // "display" en lugar de "add.display"
//     } else {
//         additionalText.style.display = "none";
//     }
// }
/*
<button class="btn btn-primary" id="btnExpandText" onclick="expandText()">Ver más</button>
                                <span id="additionalText" style="display: none;">
                                    
                                </span>*/