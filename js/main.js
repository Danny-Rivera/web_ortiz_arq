/* =========================================================
   ORTIZ ARQUITECTOS
   JAVASCRIPT PRINCIPAL
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       PROTECCIÓN CONTRA CARGAR EL JS DOS VECES
       ===================================================== */

    if (window.ortizArquitectosJSLoaded) {
        return;
    }

    window.ortizArquitectosJSLoaded = true;


    /* =====================================================
       MENÚ MÓVIL
       ===================================================== */

    const menuToggle = document.querySelector(".menu-toggle");
    const navigation = document.querySelector(".main-navigation");
    const header = document.querySelector(".site-header");


    if (menuToggle && navigation) {

        menuToggle.setAttribute("aria-expanded", "false");


        // Abrir / cerrar menú
        menuToggle.addEventListener("click", (event) => {

            event.preventDefault();
            event.stopPropagation();

            const isOpen = navigation.classList.toggle("active");

            menuToggle.classList.toggle("active", isOpen);

            if (header) {
                header.classList.toggle("menu-open", isOpen);
            }

            menuToggle.setAttribute(
                "aria-expanded",
                String(isOpen)
            );

        });


        // Cerrar menú al seleccionar una opción
        const navigationLinks =
            navigation.querySelectorAll("a");

        navigationLinks.forEach(link => {

            link.addEventListener("click", () => {

                navigation.classList.remove("active");

                menuToggle.classList.remove("active");

                if (header) {
                    header.classList.remove("menu-open");
                }

                menuToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );

            });

        });


        // Cerrar menú al presionar Escape
        document.addEventListener("keydown", (event) => {

            if (event.key === "Escape") {

                navigation.classList.remove("active");

                menuToggle.classList.remove("active");

                if (header) {
                    header.classList.remove("menu-open");
                }

                menuToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );

            }

        });


        // Si regresamos a escritorio, cerrar menú
        window.addEventListener("resize", () => {

            if (window.innerWidth > 600) {

                navigation.classList.remove("active");

                menuToggle.classList.remove("active");

                if (header) {
                    header.classList.remove("menu-open");
                }

                menuToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );

            }

        });

    }


    /* =====================================================
       GALERÍA / LIGHTBOX
       ===================================================== */

    const galleryButtons =
        document.querySelectorAll(".gallery-button");

    const lightbox =
        document.getElementById("lightbox");

    const lightboxImage =
        document.getElementById("lightbox-image");

    const lightboxCounter =
        document.getElementById("lightbox-counter");

    const closeButton =
        document.querySelector(".lightbox-close");

    const prevButton =
        document.querySelector(".lightbox-prev");

    const nextButton =
        document.querySelector(".lightbox-next");


    // Si esta página no tiene galería, no hacemos nada más
    if (!lightbox || !lightboxImage) {
        return;
    }


    /* =====================================================
       VARIABLES DE LA GALERÍA
       ===================================================== */

    let currentGallery = [];

    let currentIndex = 0;


    /* =====================================================
       OBTENER IMÁGENES DE UNA GALERÍA
       ===================================================== */

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


        return Array.from(galleryItems)
            .map(item => {

                // Primero intentamos obtener el href
                const href =
                    item.getAttribute("href");

                if (href) {
                    return href;
                }


                // Como alternativa, buscamos data-src
                const dataSrc =
                    item.getAttribute("data-src");

                if (dataSrc) {
                    return dataSrc;
                }


                return null;

            })
            .filter(Boolean);

    }


    /* =====================================================
       MOSTRAR IMAGEN
       ===================================================== */

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


    /* =====================================================
       SIGUIENTE IMAGEN
       ===================================================== */

    function nextImage() {

        if (currentGallery.length <= 1) {
            return;
        }


        currentIndex++;

        if (currentIndex >= currentGallery.length) {

            currentIndex = 0;

        }


        showImage();

    }


    /* =====================================================
       IMAGEN ANTERIOR
       ===================================================== */

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


    /* =====================================================
       ABRIR GALERÍA
       ===================================================== */

    galleryButtons.forEach(button => {

        button.addEventListener("click", (event) => {

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


            lightbox.classList.add("active");


            document.body.style.overflow =
                "hidden";

        });

    });


    /* =====================================================
       BOTÓN SIGUIENTE
       ===================================================== */

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


    /* =====================================================
       BOTÓN ANTERIOR
       ===================================================== */

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


    /* =====================================================
       CERRAR GALERÍA
       ===================================================== */

    function closeLightbox() {

        lightbox.classList.remove("active");


        document.body.style.overflow =
            "";


        lightboxImage.src =
            "";


        currentGallery = [];

        currentIndex = 0;

    }


    /* =====================================================
       BOTÓN CERRAR
       ===================================================== */

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


    /* =====================================================
       CERRAR HACIENDO CLICK FUERA
       ===================================================== */

    lightbox.addEventListener(
        "click",
        (event) => {

            if (event.target === lightbox) {

                closeLightbox();

            }

        }
    );


    /* =====================================================
       CONTROLES DEL TECLADO
       ===================================================== */

    document.addEventListener(
        "keydown",
        (event) => {

            // Si la galería no está abierta
            if (!lightbox.classList.contains("active")) {
                return;
            }


            // Flecha derecha
            if (event.key === "ArrowRight") {

                event.preventDefault();

                nextImage();

                return;

            }


            // Flecha izquierda
            if (event.key === "ArrowLeft") {

                event.preventDefault();

                previousImage();

                return;

            }


            // Escape
            if (event.key === "Escape") {

                event.preventDefault();

                closeLightbox();

                return;

            }

        }
    );


    /* =====================================================
       DESLIZAMIENTO EN TELÉFONOS
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
        { passive: true }
    );


    lightbox.addEventListener(
        "touchend",
        (event) => {

            if (!event.changedTouches.length) {
                return;
            }


            touchEndX =
                event.changedTouches[0].clientX;


            const difference =
                touchStartX - touchEndX;


            // Deslizar hacia la izquierda
            if (difference > 50) {

                nextImage();

            }


            // Deslizar hacia la derecha
            if (difference < -50) {

                previousImage();

            }

        },
        { passive: true }
    );

});
