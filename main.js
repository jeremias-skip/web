const shineSpans = document.querySelectorAll('.greetings .shine');
let currentIndex = 0;
function shineEffect() {
    shineSpans.forEach(span => {
        span.style.opacity = 0.4;
    });
    shineSpans[currentIndex].style.opacity = 10;
    currentIndex = (currentIndex + 1) % shineSpans.length;
    setTimeout(() => {
        window.requestAnimationFrame(shineEffect);
    }, 80);
}
shineEffect();

