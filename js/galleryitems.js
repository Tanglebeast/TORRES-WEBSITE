const galleryItems = document.querySelectorAll('.gallery-item img');
const overlay = document.getElementById('overlay');
const overlayImage = document.getElementById('overlayImage');
const closeBtn = document.querySelector('.close');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
let currentIndex = 0;

// Open overlay
galleryItems.forEach((item, index) => {
    item.addEventListener('click', () => {
        currentIndex = index;
        showImage();
    });
});

function showImage() {
    overlay.style.display = 'flex';
    overlayImage.src = galleryItems[currentIndex].src;
}

// Close overlay
closeBtn.addEventListener('click', () => {
    overlay.style.display = 'none';
});

// Navigation
prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : galleryItems.length - 1;
    showImage();
});

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex < galleryItems.length - 1) ? currentIndex + 1 : 0;
    showImage();
});

// Close overlay when clicking outside the image
overlay.addEventListener('click', (e) => {
    if (e.target === overlay) {
        overlay.style.display = 'none';
    }
});
