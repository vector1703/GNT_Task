const images = [
    "img1.jpg",
    "img2.jpg",
    "img3.png",
    "img4.jpg",
    "img5.jpg",
    "img6.png",
    "img7.jpg",
    "img8.jpg",
    "img9.jpg",
    "img10.jpg"
];

let currentIndex = 0;

const slide = document.querySelector('#slide');
const next = document.querySelector('#next');
const prev = document.querySelector('#prev');


next.addEventListener('click', function() {

    currentIndex++;

    if (currentIndex >= images.length) {
        currentIndex = 0;
    }

    slide.src = images[currentIndex];

});


prev.addEventListener('click', function() {

    currentIndex--;

    if (currentIndex < 0) {
        currentIndex = images.length - 1;
    }

    slide.src = images[currentIndex];

});