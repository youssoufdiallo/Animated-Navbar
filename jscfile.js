const hamburger = document.querySelector('.hamburger');
const navLink = document.querySelector('.nav-links');
const links = document.querySelector('.nav-links li');

hamburger.addEventListener('click', togFunction);

function togFunction(){
    navLink.classList.toggle('open');
}