window.onload = function() {
    // Scroll to the top of the page on mobile
    document.body.scrollTop = 0;
    // For compatibility with Safari on iOS
    document.documentElement.scrollTop = 0;
};

document.addEventListener('DOMContentLoaded', function() {
    // Scroll to the top of the page
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});

function filterImages(category) {
    var images = document.querySelectorAll('#gallery img');

    images.forEach(function(image) {
        if (category === 'all' || image.dataset.category === category) {
            image.style.display = 'block';
        } else {
            image.style.display = 'none';
        }
    });
}