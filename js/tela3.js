const slide = document.querySelectorAll(".slide");
const btnPrev = document.getElementById("prev-button");
const btnNext = document.getElementById("next-button");

let currentSlide = 0;

function hisdeSlide(){
    slide.forEach(item => item.classList.remove("on"))
}

function showSlide(){
    slide[currentSlide].classList.add("on")

}

function nextSlide(){
    hisdeSlide()
    if(currentSlide == slide.length -1 ) {
        currentSlide = 0
    } else{
        currentSlide ++
    }
    showSlide()
}


function prevtSlide(){
    hisdeSlide()
    if(currentSlide == 0 ) {
        currentSlide = slide.length - 1
    } else{
        currentSlide --
    }
    showSlide()
}

btnNext.addEventListener("click", nextSlide)
btnPrev.addEventListener("click", prevtSlide)