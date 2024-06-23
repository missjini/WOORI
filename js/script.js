$(document).ready(function (){
    var swiper = new Swiper(".mySwiper", { // 슬라이드 버튼 제어
        navigation: {
            nextEl: ".next_btn",
            prevEl: ".prev_btn",
        },
        loop:true
        });
    let slideIndex = 1;
        showSlides(slideIndex);
    
    function plusSlides(n) {
        showSlides(slideIndex += n);
    }
    
    function currentSlide(n) {
        showSlides(slideIndex = n);
    }
    
    function showSlides(n) {
        let i;
        const slides = document.getElementsByClassName("slide");
        if (n > slides.length) {
            slideIndex = 1;
        }
        if (n < 1) {
            slideIndex = slides.length;
        }
        for (i = 0; i < slides.length; i++) {
            slides[i].classList.remove("fade"); // 모든 슬라이드에서 fade 클래스 제거
        }
        slides[slideIndex - 1].classList.add("fade"); // 현재 슬라이드에만 fade 클래스 추가
    }
    
    // 메인 슬라이드 이미지 넘어가는 시간
    setInterval(function() {
        plusSlides(1);
    }, 5000); // Change image every 5 seconds
    
    $(document).ready(function (){
      
    });
    
});
    
// $(document).ready(function (){});

