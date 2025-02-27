const slides = document.querySelectorAll('.slides img');
let slidIndex = 0;
let invervalId = null;

//initializeSlider();
document.addEventListener("DOMContentLoaded", initializeSlider);

function initializeSlider(){
    if(slides.length > 0){
        slides[slidIndex].classList.add("displaySlide");
        invervalId = setInterval(nextSlide, 1000);
    }
}

function showSlid(index){
    if(index >= slides.length){
        slidIndex = 0;
    }
    else if(index < 0){
        slidIndex = slides.length - 1;
    }

    slides.forEach(slide => {
        slide.classList.remove('displaySlide');
    });

    slides[slidIndex].classList.add('displaySlide');
}

function prevSlide(){
    clearInterval(invervalId);
    slidIndex--;
    showSlid(slidIndex);
}

function nextSlide(){
    slidIndex++;
    showSlid(slidIndex);
}