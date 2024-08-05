let images = ['Untitled.jpg', 'Untitled1.jpg', 'Untitled2.jpg', 'Untitled3.jpg', 'Untitled4.jpg']; // ضع أسماء ملفات الصور هنا
let i = 0;
let intervalId;

let imageElement = document.getElementById('image');
let prevButton = document.getElementById('prevButton');
let nextButton = document.getElementById('nextButton');
let startButton = document.getElementById('startButton');
let stopButton = document.getElementById('stopButton');

function showImage(index) {
    imageElement.src = images[index];
}

function startSlideshow() {
    intervalId = setInterval(() => {
        i = (i < images.length - 1) ? i + 1 : 0;
        showImage(i);
    }, 2000); // تغيير الصورة كل ثانيتين
}

function stopSlideshow() {
    clearInterval(intervalId);
}

prevButton.addEventListener('click', () => {
    i = (i > 0) ? i - 1 : images.length - 1;
    showImage(i);
});

nextButton.addEventListener('click', () => {
    i = (i < images.length - 1) ? i + 1 : 0;
    showImage(i);
});

startButton.addEventListener('click', startSlideshow);
stopButton.addEventListener('click', stopSlideshow);

// العرض الأولي
showImage(i);