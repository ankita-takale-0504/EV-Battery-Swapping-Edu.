 
    const form = document.querySelector('.quiz-form');
    const quizScore = document.getElementById('quizScore');

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      let score = 0;
      if (form.q1.value === "Electric Vehicle") score++;
      if (form.q2.value === "5 minutes") score++;
      quizScore.textContent = `You scored ${score}/2!`;
    });
    
 let slideIndex = 0;
    const carousel = document.getElementById('carousel');
    const totalSlides = carousel.children.length;

    function moveSlide(direction) {
      slideIndex = (slideIndex + direction + totalSlides) % totalSlides;
      carousel.style.transform = `translateX(-${slideIndex * 700}px)`;
    }

