let slidesP = 0;
verSlides();

function verSlides() {
    let i;
    const slides = document.getElementsByClassName("momento");

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slidesP++;
    if (slidesP > slides.length) {
        slidesP = 1
    }    
    slides[slidesP - 1].style.display = "block";
    setTimeout(verSlides, 2000); 
}