document.addEventListener("DOMContentLoaded", () => {

    const items = document.querySelectorAll(".gallery img, .gallery video");
    const lightbox = document.getElementById("lightbox");
    const imgBox = document.getElementById("lightbox-img");
    const videoBox = document.getElementById("lightbox-video");
    const closeBtn = document.querySelector(".close");
    const leftArrow = document.querySelector(".arrow.left");
    const rightArrow = document.querySelector(".arrow.right");

    let currentIndex = 0;

    function openLightbox(index) {

        currentIndex = index;
        const el = items[index];
        const type = el.dataset.type;
        const src = el.src;

        imgBox.style.display = "none";
        videoBox.style.display = "none";

        if (type === "image") {
            imgBox.src = src;
            imgBox.style.display = "block";
        } else {
            videoBox.src = src;
            videoBox.style.display = "block";
        }

        lightbox.classList.add("active");
    }

    function changeSlide(direction) {
        currentIndex += direction;

        if (currentIndex < 0) currentIndex = items.length - 1;
        if (currentIndex >= items.length) currentIndex = 0;

        openLightbox(currentIndex);
    }

    items.forEach((el, index) => {
        el.addEventListener("click", () => openLightbox(index));
    });

    closeBtn.addEventListener("click", () => {
        lightbox.classList.remove("active");
        videoBox.pause();
    });

    leftArrow.addEventListener("click", () => changeSlide(-1));
    rightArrow.addEventListener("click", () => changeSlide(1));

    document.addEventListener("keydown", e => {
        if (e.key === "Escape") lightbox.classList.remove("active");
        if (e.key === "ArrowLeft") changeSlide(-1);
        if (e.key === "ArrowRight") changeSlide(1);
    });

    lightbox.addEventListener("click", e => {
        if (e.target === lightbox) {
            lightbox.classList.remove("active");
            videoBox.pause();
        }
    });

});
