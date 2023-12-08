document.addEventListener('DOMContentLoaded', function() {
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
        cards.forEach(function(card) {
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
    // Manejar clics en los enlaces
    $('a.nav-link').on('click', function (event) {
        // Asegurarse de que this.hash tenga un valor antes de anular el comportamiento predeterminado
        if (this.hash !== "") {
            // Prevenir el comportamiento de clic predeterminado
            event.preventDefault();

            // Guardar el hash
            var hash = this.hash;

            // Usar jQuery animate para hacer un desplazamiento suave
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {
                // Agregar el hash (#) a la URL cuando haya terminado de desplazarse
                window.location.hash = hash;
            });
        }
    });
});

let swiper = new Swiper(".mySwiper", {
    slidesPerView:1,
    centeredSlides: true,
    loop:true,
    spaceBetween:25,
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