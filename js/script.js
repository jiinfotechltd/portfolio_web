const serviceBoxes = document.querySelectorAll('.service-box');
serviceBoxes.forEach(serviceBox => {
const circle = serviceBox.querySelector('.circle');
const serviceBoxRect = serviceBox.getBoundingClientRect();
serviceBox.addEventListener('mouseenter', () => {
    document.body.style.cursor = 'none';
    circle.style.display = 'block';
});
serviceBox.addEventListener('mouseleave', () => {
    document.body.style.cursor = 'default';
    circle.style.display = 'none';
});
document.addEventListener('mousemove', (e) => {
    let x = e.pageX - serviceBoxRect.left - circle.offsetWidth / 2;
    let y = e.pageY - serviceBoxRect.top - circle.offsetHeight / 2;
    x = Math.max(0, Math.min(serviceBoxRect.width - circle.offsetWidth, x));
    y = Math.max(0, Math.min(serviceBoxRect.height - circle.offsetHeight, y));
    if (circle.style.display === 'block') {
        circle.style.left = `${x}px`;
        circle.style.top = `${y}px`;
    }
});
});

const navbar = document.getElementById('navbar');
const navbarLinks = document.querySelectorAll('.nav-link');
const brand = document.querySelector('.brand');
window.addEventListener('scroll', () => {
if (window.scrollY > 50) {
  navbar.classList.add('bg-white', 'shadow-md', 'text-gray-800');
  navbar.classList.remove('bg-transparent', 'text-white');
  navbarLinks.forEach(link => link.classList.add('text-gray-800'));
  navbarLinks.forEach(link => link.classList.remove('text-white'));
  brand.classList.add('text-[rgb(255,160,10)]');
  brand.classList.remove('text-white');
} else {
  navbar.classList.add('bg-transparent', 'text-white');
  navbar.classList.remove('bg-white', 'shadow-md', 'text-gray-800');
  navbarLinks.forEach(link => link.classList.add('text-white'));
  navbarLinks.forEach(link => link.classList.remove('text-gray-800'));
  brand.classList.remove('text-[rgb(255,160,10)]');
  brand.classList.add('text-white');
}
});

function isInViewport(element) {
const rect = element.getBoundingClientRect();
return rect.top < window.innerHeight && rect.bottom > 0;
}
window.addEventListener('scroll', () => {
const animatedElements = document.querySelectorAll('[data-animate]');
animatedElements.forEach((el) => {
    if (isInViewport(el)) {
        el.classList.add(el.dataset.animate);
    } else {
        el.classList.remove(el.dataset.animate);
    }
});
});

document.querySelector('.navbar-toggler').addEventListener('click', function () {
    const navbarNav = document.getElementById('navbarNav');
    navbarNav.classList.toggle('hidden');
    navbarNav.classList.toggle('flex');
    navbarNav.classList.toggle('flex-col');
    navbarNav.classList.remove('md:flex-row');
});