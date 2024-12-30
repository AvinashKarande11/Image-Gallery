let currentImageIndex = 0;
const images = [
    { src: 'app1.jpg', caption: 'Image 1' },
    { src: 'app2.jpg', caption: 'Image 2' },
    { src: 'app3.jpg', caption: 'Image 3' },
    { src: 'app4.jpg', caption: 'Image 4' }
];

function openImageModal(index) {
    currentImageIndex = index;
    const modal = document.getElementById("imageModal");
    const modalImage = document.getElementById("modalImage");
    const caption = document.getElementById("caption");

    modal.style.display = "block";
    modal.style.opacity = 0;
    setTimeout(() => {
        modal.style.opacity = 1;
    }, 100);  // Delay for fade-in effect

    modalImage.src = images[index].src;
    caption.innerText = images[index].caption;
}

function closeModal() {
    const modal = document.getElementById("imageModal");
    modal.style.opacity = 0;
    setTimeout(() => {
        modal.style.display = "none";
    }, 300);  // Allow fade-out before hiding modal
}

function changeImage(direction) {
    currentImageIndex = (currentImageIndex + direction + images.length) % images.length;
    const modalImage = document.getElementById("modalImage");
    const caption = document.getElementById("caption");

    modalImage.style.opacity = 0;
    setTimeout(() => {
        modalImage.src = images[currentImageIndex].src;
        caption.innerText = images[currentImageIndex].caption;
        modalImage.style.opacity = 1;
    }, 300);
}

document.addEventListener("keydown", function(event) {
    const modal = document.getElementById("imageModal");
    if (modal.style.display === "block") {
        if (event.key === "ArrowLeft") {
            changeImage(-1);
        } else if (event.key === "ArrowRight") {
            changeImage(1);
        } else if (event.key === "Escape") {
            closeModal();
        }
    }
});
