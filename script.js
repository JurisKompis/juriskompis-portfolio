document.getElementById("year").textContent = new Date().getFullYear();

function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return rect.top <= window.innerHeight * 0.85 && rect.bottom >= 0;
}

function checkFadeSlide() {
  document.querySelectorAll('.fade-slide').forEach(section => {
    if (isInViewport(section)) {
      section.classList.add('active');
    }
  });
}

window.addEventListener('scroll', checkFadeSlide);
window.addEventListener('load', checkFadeSlide);
