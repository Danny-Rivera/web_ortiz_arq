```javascript
/* =========================================================
   ORTIZ ARQUITECTOS
   JAVASCRIPT PRINCIPAL
   ========================================================= */


document.addEventListener("DOMContentLoaded", () => {


    /* =====================================================
       EVITAR CARGAR EL SCRIPT DOS VECES
       ===================================================== */

    if (window.ortizArquitectosJSLoaded) {
        return;
    }

    window.ortizArquitectosJSLoaded = true;



    /* =====================================================
       HERO / SLIDESHOW
       ===================================================== */

    const heroSlides =
        document.querySelectorAll(".hero-slide");


    const heroDots =
        document.querySelectorAll(".hero-dot");


    const heroProjectNumber =
        document.querySelector(".hero-project-number");


    const heroProjectName =
        document.querySelector(".hero-project-name");


    const heroProjects = [
        "Residencia Pilarte",
        "Residencia Ximena Arana",
        "Martínez Cerda",
        "Casa Murillo",
        "Pool House",
        "Restaurante y Módulo Comercial"
    ];


    let heroCurrentSlide = 0;

    let heroInterval = null;


    /*
       Cambia la imagen actual.
    */

    function changeHeroSlide(index) {

        if (!heroSlides.length) {
            return;
        }


        /*
           Evitar índices inválidos.
        */

        if (index < 0) {
            index = heroSlides.length - 1;
        }


        if (index >= heroSlides.length) {
            index = 0;
        }


        /*
           Activar solamente la imagen correspondiente.
        */

        heroSlides.forEach((slide, i) => {

            slide.classList.toggle(
                "active",
                i === index
            );

        });


        /*
           Actualizar indicadores.
        */

        heroDots.forEach((dot, i) => {

            dot.classList.toggle(
                "active",
                i === index
            );

        });


        /*
           Guardar posición actual.
        */

        heroCurrentSlide = index;


        /*
           Actualizar número.
        */

        if (heroProjectNumber) {

            heroProjectNumber.textContent =
                `${String(index + 1).padStart(2, "0")} / ${String(heroSlides.length).padStart(2, "0")}`;
        }


        /*
           Actualizar nombre.
        */

        if (heroProjectName) {

            heroProjectName.textContent =
                heroProjects[index] || "";
        }

    }



    /*
       Pasar a la siguiente fotografía.
    */

    function nextHeroSlide() {

        if (heroSlides.length <= 1) {
            return;
        }


        let nextIndex =
            heroCurrentSlide + 1;


        if (nextIndex >= heroSlides.length) {
            nextIndex = 0;
        }


        changeHeroSlide(nextIndex);

    }



    /*
       Iniciar slideshow.

       5000 = 5 segundos.
    */

    function startHeroSlideshow() {

        if (heroSlides.length <= 1) {
            return;
        }


        clearInterval(heroInterval);


        heroInterval =
            setInterval(
                nextHeroSlide,
                5000
            );

    }



    /*
       Reiniciar contador cuando el usuario
       pulsa un indicador.
    */

    function restartHeroSlideshow() {

        clearInterval(heroInterval);

        startHeroSlideshow();

    }



    /*
       Indicadores inferiores.
    */

    heroDots.forEach(dot => {

        dot.addEventListener(
            "click",
            () => {

                const index =
                    Number(
                        dot.dataset.slide
                    );


                if (
                    Number.isNaN(index) ||
                    index < 0 ||
                    index >= heroSlides.length
                ) {
                    return;
                }


                changeHeroSlide(index);

                restartHeroSlideshow();

            }
        );

    });



    /*
       Iniciar Hero.
    */

    changeHeroSlide(0);

    startHeroSlideshow();



    /* =====================================================
       MENÚ MÓVIL
       ===================================================== */

    const menuToggle =
        document.querySelector(".menu-toggle");


    const navigation =
        document.querySelector(".main-navigation");


    const header =
        document.querySelector(".site-header");



    if (menuToggle && navigation) {


        menuToggle.setAttribute(
            "aria-expanded",
            "false"
        );



        /*
           Abrir / cerrar menú.
        */

        menuToggle.addEventListener(
            "click",
            (event) => {

                event.preventDefault();

                event.stopPropagation();


                const isOpen =
                    navigation.classList.toggle(
                        "active"
                    );


                menuToggle.classList.toggle(
                    "active",
                    isOpen
                );


                if (header) {

                    header.classList.toggle(
                        "menu-open",
                        isOpen
                    );

                }


                menuToggle.setAttribute(
                    "aria-expanded",
                    String(isOpen)
                );

            }
        );



        /*
           Cerrar menú cuando se pulsa un enlace.
        */

        const navigationLinks =
            navigation.querySelectorAll("a");


        navigationLinks.forEach(link => {

            link.addEventListener(
                "click",
                () => {

                    navigation.classList.remove(
                        "active"
                    );


                    menuToggle.classList.remove(
                        "active"
                    );


                    if (header) {

                        header.classList.remove(
                            "menu-open"
                        );

                    }


                    menuToggle.setAttribute(
                        "aria-expanded",
                        "false"
                    );

                }
            );

        });



        /*
           Escape cierra el menú.
        */

        document.addEventListener(
            "keydown",
            (event) => {

                if (event.key === "Escape") {

                    navigation.classList.remove(
                        "active"
                    );


                    menuToggle.classList.remove(
                        "active"
                    );


                    if (header) {

                        header.classList.remove(
                            "menu-open"
                        );

                    }


                    menuToggle.setAttribute(
                        "aria-expanded",
                        "false"
                    );

                }

            }
        );



        /*
           Si volvemos a escritorio,
           cerrar menú móvil.
        */

        window.addEventListener(
            "resize",
            () => {

                if (window.innerWidth > 600) {

                    navigation.classList.remove(
                        "active"
                    );


                    menuToggle.classList.remove(
                        "active"
                    );


                    if (header) {

                        header.classList.remove(
                            "menu-open"
                        );

                    }


                    menuToggle.setAttribute(
                        "aria-expanded",
                        "false"
                    );

                }

            }
        );

    }



    /* =====================================================
       GALERÍA / LIGHTBOX
       ===================================================== */

    const galleryButtons =
        document.querySelectorAll(
            ".gallery-button"
        );


    const lightbox =
        document.getElementById(
            "lightbox"
        );


    const lightboxImage =
        document.getElementById(
            "lightbox-image"
        );


    const lightboxCounter =
        document.getElementById(
            "lightbox-counter"
        );


    const closeButton =
        document.querySelector(
            ".lightbox-close"
        );


    const prevButton =
        document.querySelector(
            ".lightbox-prev"
        );


    const nextButton =
        document.querySelector(
            ".lightbox-next"
        );



    /*
       Si estamos en una página que no tiene
       lightbox, no ejecutamos esta parte.
    */

    if (!lightbox || !lightboxImage) {
        return;
    }



    let currentGallery = [];

    let currentIndex = 0;



    /*
       Obtener imágenes de una galería.
    */

    function getGalleryImages(button) {

        const galleryName =
            button.dataset.gallery;


        if (!galleryName) {
            return [];
        }


        const gallery =
            document.getElementById(
                `gallery-${galleryName}`
            );


        if (!gallery) {

            console.warn(
                `No se encontró la galería: gallery-${galleryName}`
            );

            return [];
        }


        const galleryItems =
            gallery.querySelectorAll(
                "[data-gallery-item]"
            );


        return Array
            .from(galleryItems)
            .map(item => {

                const href =
                    item.getAttribute(
                        "href"
                    );


                if (href) {
                    return href;
                }


                const dataSrc =
                    item.getAttribute(
                        "data-src"
                    );


                if (dataSrc) {
                    return dataSrc;
                }


                return null;

            })
            .filter(Boolean);

    }



    /*
       Mostrar imagen actual.
    */

    function showImage() {

        if (!currentGallery.length) {
            return;
        }


        const image =
            currentGallery[currentIndex];


        if (!image) {
            return;
        }


        lightboxImage.src = image;


        lightboxImage.alt =
            `Imagen ${currentIndex + 1} de ${currentGallery.length}`;


        if (lightboxCounter) {

            lightboxCounter.textContent =
                `${currentIndex + 1} / ${currentGallery.length}`;

        }

    }



    /*
       Siguiente imagen.
    */

    function nextImage() {

        if (currentGallery.length <= 1) {
            return;
        }


        currentIndex++;


        if (
            currentIndex >=
            currentGallery.length
        ) {

            currentIndex = 0;

        }


        showImage();

    }



    /*
       Imagen anterior.
    */

    function previousImage() {

        if (currentGallery.length <= 1) {
            return;
        }


        currentIndex--;


        if (currentIndex < 0) {

            currentIndex =
                currentGallery.length - 1;

        }


        showImage();

    }



    /*
       Abrir galería.
    */

    galleryButtons.forEach(button => {

        button.addEventListener(
            "click",
            (event) => {

                event.preventDefault();

                event.stopPropagation();


                currentGallery =
                    getGalleryImages(button);


                if (!currentGallery.length) {

                    console.warn(
                        "La galería no contiene imágenes."
                    );

                    return;
                }


                currentIndex = 0;


                showImage();


                lightbox.classList.add(
                    "active"
                );


                document.body.style.overflow =
                    "hidden";

            }
        );

    });



    /*
       Botón siguiente.
    */

    if (nextButton) {

        nextButton.addEventListener(
            "click",
            (event) => {

                event.preventDefault();

                event.stopPropagation();

                nextImage();

            }
        );

    }



    /*
       Botón anterior.
    */

    if (prevButton) {

        prevButton.addEventListener(
            "click",
            (event) => {

                event.preventDefault();

                event.stopPropagation();

                previousImage();

            }
        );

    }



    /*
       Cerrar lightbox.
    */

    function closeLightbox() {

        lightbox.classList.remove(
            "active"
        );


        document.body.style.overflow =
            "";


        lightboxImage.src =
            "";


        currentGallery = [];

        currentIndex = 0;

    }



    if (closeButton) {

        closeButton.addEventListener(
            "click",
            (event) => {

                event.preventDefault();

                event.stopPropagation();

                closeLightbox();

            }
        );

    }



    /*
       Cerrar haciendo clic fuera de la imagen.
    */

    lightbox.addEventListener(
        "click",
        (event) => {

            if (
                event.target === lightbox
            ) {

                closeLightbox();

            }

        }
    );



    /*
       Controles de teclado.
    */

    document.addEventListener(
        "keydown",
        (event) => {

            if (
                !lightbox.classList.contains(
                    "active"
                )
            ) {
                return;
            }


            if (
                event.key ===
                "ArrowRight"
            ) {

                event.preventDefault();

                nextImage();

                return;
            }


            if (
                event.key ===
                "ArrowLeft"
            ) {

                event.preventDefault();

                previousImage();

                return;
            }


            if (
                event.key ===
                "Escape"
            ) {

                event.preventDefault();

                closeLightbox();

            }

        }
    );



    /* =====================================================
       SWIPE EN TELÉFONO
       ===================================================== */

    let touchStartX = 0;

    let touchEndX = 0;


    lightbox.addEventListener(
        "touchstart",
        (event) => {

            if (!event.touches.length) {
                return;
            }


            touchStartX =
                event.touches[0].clientX;

        },
        {
            passive: true
        }
    );


    lightbox.addEventListener(
        "touchend",
        (event) => {

            if (
                !event.changedTouches.length
            ) {
                return;
            }


            touchEndX =
                event.changedTouches[0].clientX;


            const difference =
                touchStartX - touchEndX;


            if (difference > 50) {
                nextImage();
            }


            if (difference < -50) {
                previousImage();
            }

        },
        {
            passive: true
        }
    );


});
```
