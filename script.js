document.addEventListener('DOMContentLoaded', () => {
  const text1 = document.querySelector('.text-1');
  const text2 = document.querySelector('.text-2');
  const typingSpeed = 100; // Velocidad de tipeo en ms
  const erasingSpeed = 50; // Velocidad de borrado en ms
  const delayBeforeNext = 2000; // Retraso antes de la siguiente animación (en ms)

  function typeText(element, text, speed, callback) {
    let index = 0;
    element.textContent = '';
    element.classList.add('visible'); // Asegúrate de que el texto sea visible
    const interval = setInterval(() => {
      if (index < text.length) {
        element.textContent += text.charAt(index);
        index++;
      } else {
        clearInterval(interval);
        if (callback) callback();
      }
    }, speed);
  }

  function eraseText(element, speed, callback) {
    let text = element.textContent;
    let index = text.length;
    const interval = setInterval(() => {
      if (index > 0) {
        element.textContent = text.substring(0, index - 1);
        index--;
      } else {
        clearInterval(interval);
        element.classList.remove('visible');
        element.textContent = '';
        if (callback) callback();
      }
    }, speed);
  }

  function startAnimation() {
    typeText(text1, 'FRONTEND DEVELOPER', typingSpeed, () => {
      setTimeout(() => {
        eraseText(text1, erasingSpeed, () => {
          setTimeout(() => {
            typeText(text2, 'DANIEL PERALTA', typingSpeed);
          }, delayBeforeNext);
        });
      }, delayBeforeNext);
    });
  }

  startAnimation();
});
