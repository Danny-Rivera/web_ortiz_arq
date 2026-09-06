document.addEventListener("DOMContentLoaded", () => {

    // ==========================================
    // GALERÍA / LIGHTBOX
    // ==========================================

    const galleryButtons = document.querySelectorAll(".gallery-button");
    const lightbox = document.getElementById("lightbox");
    const lightboxImage = document.getElementById("lightbox-image");
    const lightboxCounter = document.getElementById("lightbox-counter");

    const closeButton = document.querySelector(".lightbox-close");
    const prevButton = document.querySelector(".lightbox-prev");
    const nextButton = document.querySelector(".lightbox-next");

    let currentGallery = [];
    let currentIndex = 0;


    // ==========================================
    // ABRIR GALERÍA
    // ==========================================

    galleryButtons.forEach(button => {

        button.addEventListener("click", () => {

            const galleryName = button.dataset.gallery;
            const gallery = document.getElementById(`gallery-${galleryName}`);

            if (!gallery) return;

            currentGallery = Array.from(
                gallery.querySelectorAll("[data-gallery-item]")
            ).map(item => item.getAttribute("href"));

            if (currentGallery.length === 0) return;

            currentIndex = 0;

            showImage();

            lightbox.classList.add("active");

            document.body.style.overflow = "hidden";
        });

    });


    // ==========================================
    // MOSTRAR IMAGEN ACTUAL
    // ==========================================

    function showImage() {

        if (!currentGallery.length) return;

        lightboxImage.src = currentGallery[currentIndex];

        lightboxCounter.textContent =
            `${currentIndex + 1} / ${currentGallery.length}`;
    }


    // ==========================================
    // SIGUIENTE IMAGEN
    // ==========================================

    function nextImage() {

        if (!currentGallery.length) return;

        currentIndex++;

        if (currentIndex >= currentGallery.length) {
            currentIndex = 0;
        }

        showImage();
    }


    // ==========================================
    // IMAGEN ANTERIOR
    // ==========================================

    function previousImage() {

        if (!currentGallery.length) return;

        currentIndex--;

        if (currentIndex < 0) {
            currentIndex = currentGallery.length - 1;
        }

        showImage();
    }


    // ==========================================
    // BOTONES EN PANTALLA
    // ==========================================

    nextButton.addEventListener("click", (event) => {

        event.preventDefault();
        event.stopPropagation();

        nextImage();

    });


    prevButton.addEventListener("click", (event) => {

        event.preventDefault();
        event.stopPropagation();

        previousImage();

    });


    // ==========================================
    // CERRAR GALERÍA
    // ==========================================

    closeButton.addEventListener("click", (event) => {

        event.preventDefault();
        event.stopPropagation();

        closeLightbox();

    });


    function closeLightbox() {

        lightbox.classList.remove("active");

        document.body.style.overflow = "";

        lightboxImage.src = "";

        currentGallery = [];

        currentIndex = 0;
    }


    // ==========================================
    // CERRAR AL HACER CLICK FUERA DE LA IMAGEN
    // ==========================================

    lightbox.addEventListener("click", (event) => {

        if (event.target === lightbox) {
            closeLightbox();
        }

    });


    // ==========================================
    // CONTROLES DEL TECLADO
    // ==========================================

    document.addEventListener("keydown", (event) => {

        // Si la galería no está abierta, no hacemos nada
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

    });

});