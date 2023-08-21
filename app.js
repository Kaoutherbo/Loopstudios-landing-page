const menuBtn = document.querySelector('.menu');
const closeBtn = document.querySelector('.close');
const navMenu = document.querySelector('.list');
const header = document.querySelector('header');
let isClicked = true ;

function toggleMenu() {
  if (isClicked) {
    navMenu.classList.add('active'); 
    menuBtn.style.display = 'none';
    closeBtn.style.display = 'block';
    header.classList.add('active');
  } else {
    navMenu.classList.remove('active'); 
    menuBtn.style.display = 'block';
    closeBtn.style.display = 'none';
    header.classList.remove('active');
  }
  isClicked = !isClicked;
}

menuBtn.addEventListener('click', toggleMenu);
closeBtn.addEventListener('click', toggleMenu);