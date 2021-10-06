const navSlide = () => {
  const burger = document.querySelector('.burger');
  const menu = document.querySelector('.menu');
  const navLinks = document.querySelectorAll('.nav__links');

  burger.addEventListener('click', () => {
    menu.classList.toggle('nav__active');

    navLinks.forEach((link, i) => {
      if(link.style.animation){
        link.style.animation = '';
      }
      else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${i / 7 + 0.3}s`;
      }
    });

    burger.classList.toggle('toggle');
  });
}

navSlide();
